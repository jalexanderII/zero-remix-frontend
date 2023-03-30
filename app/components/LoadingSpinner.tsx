import { useNavigation } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { Text } from "@tremor/react";

const LoadingSpinner: React.FC = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const transition = useNavigation();

  useEffect(() => {
    let spinnerTimeoutId: NodeJS.Timeout;
    let messageTimeoutId: NodeJS.Timeout;

    if (transition.state === "loading") {
      spinnerTimeoutId = setTimeout(() => setShowSpinner(true), 300);
      messageTimeoutId = setTimeout(() => setShowMessage(true), 600);
    } else {
      setShowSpinner(false);
      setShowMessage(false);
    }

    return () => {
      clearTimeout(spinnerTimeoutId);
      clearTimeout(messageTimeoutId);
    };
  }, [transition.state]);

  if (!showSpinner) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <div
        className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-purple-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
      {showMessage && (
        <Text className="text-center text-gray-700">
          Just a little longer, crunching numbers and getting your data...
        </Text>
      )}
    </div>
  );
};

export default LoadingSpinner;
