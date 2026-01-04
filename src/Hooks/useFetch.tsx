import React from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T,>(URL: RequestInfo | URL, options?: RequestInit): FetchState<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>("");

  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    if (!URL) return;
    async function fetchData() {
      setLoading(true);
      setData(null);
      try {
        setError("");
        const response = await fetch(URL, { signal, ...optionsRef.current });
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const json = (await response.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(error.message);
        setData(null);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    }
    fetchData();

    return () => controller.abort();
  }, [URL]);

  return { data, loading, error };
};

export default useFetch;
