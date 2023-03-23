import { useNavigation } from "@remix-run/react";
import React, { useEffect, useState } from "react";

const LoadingSpinner: React.FC = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const transition = useNavigation();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (transition.state === "loading") {
      timeoutId = setTimeout(() => setShowSpinner(true), 1000);
    } else {
      setShowSpinner(false);
    }

    return () => clearTimeout(timeoutId);
  }, [transition.state]);

  if (!showSpinner) {
    return null;
  }

  return (
    // <div className="flex justify-center items-center min-h-screen">
    //     <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
    // </div>
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-purple-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
