import type { AccountInfo } from "~/utils/types.server";
import { create } from "zustand";

// define types for state values and actions separately
type State = {
  timeline: number;
  frequency: number;
  planType: number;
  amount: number[];
  totalAmount: number;
  accountInfo: AccountInfo[];
};

type Actions = {
  updateTimeline: (value: number) => void;
  updateFrequency: (value: number) => void;
  updatePlanType: (value: number) => void;
  updateAmount: (amount: number, index: number) => void;
  setTotalAmount: () => void;
  updateAccountInfo: (data: AccountInfo, index: number) => void;
  reset: () => void;
};

// define the initial state
const initialState: State = {
  timeline: 0,
  frequency: 0,
  planType: 0,
  amount: [],
  totalAmount: 0,
  accountInfo: [],
};

// create store
export const usePaymentPlanCreationForm = create<State & Actions>()(
  (set, get) => ({
    ...initialState,
    updateTimeline: (value) => set({ timeline: value }),
    updateFrequency: (value) => set({ frequency: value }),
    updatePlanType: (value) => set({ planType: value }),
    updateAmount: (amount, index) => {
      set((state) => {
        const newAmount = [...state.amount];
        newAmount[index] = amount;
        return { amount: newAmount };
      });
    },
    setTotalAmount: () =>
      set((state) => ({
        totalAmount: state.amount.reduce((pv, cv) => pv + cv, 0),
      })),
    updateAccountInfo: (data, index) => {
      set((state) => {
        const newAccountInfo = [...state.accountInfo];
        newAccountInfo[index] = data;
        return { accountInfo: newAccountInfo };
      });
    },
    reset: () => {
      set(initialState);
    },
  })
);
