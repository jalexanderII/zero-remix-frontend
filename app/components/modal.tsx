import { Portal } from "./portal";
import type { NavigateFunction } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import React from "react";

interface props {
  children: React.ReactNode;
  isOpen: boolean;
  ariaLabel?: string;
  className?: string;
  navigate_path: string;
}

export const Modal: React.FC<props> = ({
  children,
  isOpen,
  ariaLabel,
  className,
  navigate_path,
}) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <Portal wrapperId="modal">
      <div
        className="fixed inset-0 overflow-y-auto bg-gray-600 bg-opacity-80"
        aria-labelledby={ariaLabel ?? "modal-title"}
        role="dialog"
        aria-modal="true"
        onClick={() => navigate(navigate_path)}
      ></div>
      <div className="fixed inset-0 pointer-events-none flex justify-center items-center max-h-screen overflow-auto">
        <div
          className={`${className} p-4 bg-gray-200 pointer-events-auto h-5/6 md:rounded-xl`}
        >
          <CloseButton navigate={navigate} navigate_path={navigate_path} />
          {/* This is where the modal content is rendered  */}
          {children}
        </div>
      </div>
    </Portal>
  );
};

interface CloseProps {
  navigate: NavigateFunction;
  navigate_path: string;
}

const CloseButton: React.FC<CloseProps> = ({ navigate, navigate_path }) => {
  return (
    <div className="flex flex-col items-right md:flex-row">
      <div className="flex-1" />
      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        data-modal-hide="popup-modal"
        onClick={() => navigate(navigate_path)}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
    </div>
  );
};
