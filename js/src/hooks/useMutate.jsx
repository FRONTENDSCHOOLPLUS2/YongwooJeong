import { useState } from "react";

const defaultOptions = {
  method: "POST",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

const API_SERVER = "https://api.fesp.shop";

const useMutate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const send = async (options = {}) => {
    let { url, ...restOptions } = {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        url = API_SERVER + url;
      }

      const response = await fetch(url, restOptions);

      if (!response.ok) {
        throw new Error(`2xx 이외의 응답: ${response.status}`);
      }

      const result = await response.json();
      return result;
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

  send.post = (url, body, options) => {
    return send({
      method: "POST",
      url,
      body: JSON.stringify(body),
      ...options,
    });
  };

  send.patch = (url, body, options) => {
    return send({
      method: "PATCH",
      url,
      body: JSON.stringify(body),
      ...options,
    });
  };

  send.delete = (url, options) => {
    return send({
      method: "DELETE",
      url,
      ...options,
    });
  };

  return { loading, error, send };
};

export default useMutate;
