import { useState, useCallback } from "react";
import axios from "axios";

const useRequest = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios({
        method: requestConfig.method ? requestConfig.method : "GET",
        url: requestConfig.url,
        data: requestConfig.body ? requestConfig.body : {},
      });
      console.log(response.data);

      applyData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const cleanError = () => {
    setError();
  };

  return {
    isLoading,
    error,
    sendRequest,
    cleanError,
  };
};

export default useRequest;
