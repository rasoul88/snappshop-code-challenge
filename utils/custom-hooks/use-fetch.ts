import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string, options?: AxiosRequestConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [data, setData] = useState<AxiosResponse | null>(null);

  const makeRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, options);
      setData(response?.data);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    url && makeRequest();

    return () => {
      setIsLoading(false);
    };
  }, [url]);

  return {
    isLoading,
    error,
    data,
  };
};
