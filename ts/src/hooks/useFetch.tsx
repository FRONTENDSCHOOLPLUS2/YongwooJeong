import { useEffect, useState } from "react";
import { Dashboard } from "types";

const defaultOptions: RequestInit = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credentials: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

const API_SERVER = "https://api.fesp.shop";

const useFetch = (url: string, options: RequestInit = {}) => {
  const [data, setData] = useState<Dashboard | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<any> => {
    let { ...restOptions } = {
      ...defaultOptions,
      ...options,
      headers: {
        ...(defaultOptions.headers ?? {}),
        ...(options.headers ?? {}),
      },
    };

    try {
      setLoading(true);

      if (!url.startsWith("http")) {
        url = API_SERVER + url;
      }

      const response = await fetch(url, restOptions);

      if (!response.ok) {
        throw new Error(`2xx 이외의 응답: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err instanceof TypeError) {
        // 서버에 도달하지 못하면 여기에 걸림.
        console.error("네트워크 에러");
        setError(err);
      } else if (err instanceof Error) {
        // 서버에서 에러를 보내면 여기서 걸림.
        console.error(err.message);
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
