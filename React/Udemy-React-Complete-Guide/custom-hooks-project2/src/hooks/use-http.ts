import { useState } from "react";

const useHTTP = (requestConfig: any, applyDataFn: (data?: any) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyDataFn(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  // modern way to write
  return {
    isLoading,
    error,
    sendRequest,
  };

  // Old way to write in case properties have the sam ename with the value passed
  // return {
  //   isLoading: isLoading,
  //   error: error,
  //   sendRequest: sendRequest,
  // };
};
export default useHTTP;
