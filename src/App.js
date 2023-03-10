import React, { useEffect, useState } from 'react';
import Aside from './components/Aside';
import GeolocationModal from './components/GeolocationModal';
import Map from './components/Map';
import useFilteredRestaurantLists from './components/FilteringRestaurant';

function App() {
   const filteredRestaurantLists = useFilteredRestaurantLists(); 

    // user location
  const WatchPosition = () => {
    navigator.geolocation.watchPosition(function (position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      const newPosition = { lat, lng };
      return (newPosition)
    },
      function (error) {
        if (error.code === error.PERMISSION_DENIED)
          activeDisplayModal()
      });
  };
  
  // hook manage Modal
  let [useDisplayModal, setDisplayModal] = useState(false)
  const activeDisplayModal = () => {
    setDisplayModal(useDisplayModal = true)
  }
 
 // hook manage current user Position for map
  const [currentPosition, setCurrentPosition] = useState({ lat: 44.91, lng: -0.5 }); 
  useEffect(() => {
    navigator.geolocation.watchPosition(function (position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      const newPosition = { lat: lat, lng: lng };
      setCurrentPosition(newPosition);
    });
  }, [setCurrentPosition]); 

return (
<div>
      {WatchPosition()}
      {(useDisplayModal && <GeolocationModal></GeolocationModal>) || null}
      <Map newPosition={currentPosition} restaurantLists={filteredRestaurantLists} > </Map>
      <Aside restaurantLists={filteredRestaurantLists}  ></Aside>
</div>
);
}
export default App;



