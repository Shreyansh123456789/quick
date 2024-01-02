import { useState, useEffect } from "react";

function useApiData(url) {
  // Define state variables for data, loading status, and errors
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data from the API");
        }

        const result = await response.json();

        setData(result);
        console.log(result);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useApiData;
