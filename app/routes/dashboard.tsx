import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { callApi } from "~/services/backend.server";

export const loader: LoaderFunction = async (args) => {
  return callApi();
};

const Dashboard = () => {
  const { message } = useLoaderData<typeof loader>();
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;
