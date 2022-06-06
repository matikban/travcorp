import React, {useState, useEffect} from 'react';
import RecentViewedTrips from './Components/RecentViewedTrips/RecentViewedTrips';

import './App.scss';

function App() {
  let [trips, setTrips] = useState(null)

  useEffect(() => {
    fetch("https://mocki.io/v1/1f7191ad-6fbf-407b-8536-96ef762e6ad5")
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTrips(data);
    })
  },[])

    return (
      <div className="App container">
       {trips && <RecentViewedTrips trips={trips} />}
    </div>
    );
}

export default App;
