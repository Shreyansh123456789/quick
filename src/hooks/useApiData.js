import { useState, useEffect } from 'react';

function useApiData(url) {
  // Define state variables for data, loading status, and errors
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an async function to fetch data from the provided URL
    const fetchData = async () => {
      try {
        // Send a GET request to the API
        const response = await fetch(url);

        // Check if the response status is OK (2xx)
        if (!response.ok) {
          // If not OK, throw an error with a message
          throw new Error('Failed to fetch data from the API');
        }

        // If the response is OK, parse the JSON data
        const result = await response.json();

        // Update the 'data' state with the fetched result
        setData(result);

        // Set the 'loading' state to 'false' since data fetching is complete
        setLoading(false);
      } catch (err) {
        // If an error occurs during fetching, capture the error
        setError(err);

        // Set the 'loading' state to 'false' since data fetching is complete (with or without errors)
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts or when the URL changes
    fetchData();
  }, [url]); // The 'url' dependency ensures the effect is re-triggered when the URL changes

  // Return an object containing the data, loading status, and error
  return { data, loading, error };
}

export default useApiData;
