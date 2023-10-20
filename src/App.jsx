import Navbar from './components/Navbar';
import { useState } from 'react';
import GroupTable from './components/GroupTable';
import useApiData from './hooks/useApiData';

function App() {
  // Define the API endpoint URL for data fetching
  const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';

  // Use the custom hook 'useApiData' to fetch data from the API
  const { data, loading, error } = useApiData(apiUrl);

  // Initialize state variables for grouping and sorting options
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || "status");
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || "priority")

  // Function to update the 'groupBy' state and store it in 'localStorage'
  const changeGroupBy = (value) => {
    setGroupBy(value);
    localStorage.setItem('groupBy', value);
  }

  // Function to update the 'sortBy' state and store it in 'localStorage'
  const changeSortBy = (value) => {
    setSortBy(value);
    localStorage.setItem('sortBy', value);
  }

  // Handle loading state: Display a "Loading..." message
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state: Display an error message with the specific error message
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render the main application content once data is successfully fetched
  return (
    <div className='App'>
      {/* Render the Navbar component with grouping and sorting options */}
      <Navbar groupBy={groupBy} changeGroupBy={changeGroupBy} sortBy={sortBy} changeSortBy={changeSortBy} />

      {/* Render the GroupTable component with fetched data, grouping, and sorting options */}
      <GroupTable tickets={data.tickets} users={data.users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;
