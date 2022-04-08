import './App.css';
import { useState, useEffect } from 'react';
import nasa from './api/nasa';


import Map from './components/Map';

function App() {

  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const res = await nasa.get("events");
      setEventData(res.data.events);
      setIsLoading(false);
    }
    fetchEvents()
  }, [])

  return (
    <div className="App">
      {
        isLoading ? 
        <h1>Loading...</h1>
        :
        <Map eventData={eventData} />
      }
    </div>
  );
}

export default App;
