// pages/index.js
'use client'
import { useState, useRef } from "react";
import { GoogleMap, useLoadScript, Marker, Autocomplete } from "@react-google-maps/api";

const Map = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchLngLat, setSearchLngLat] = useState(null);
  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState("");

  // Load script for Google Maps
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  // Static latitude and longitude
  const center = { lat: -1.4449082, lng: -48.4858324 };

  // Handle place change on search
  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    setSelectedPlace(place);
    setSearchLngLat({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 ">
      {/* Search component */}
      <Autocomplete
        onLoad={(autocomplete) => {
          console.log("Autocomplete loaded:", autocomplete);
          autocompleteRef.current = autocomplete;
        }}
        onPlaceChanged={handlePlaceChanged}
        options={{ fields: ["address_components", "geometry", "name"] }}
      >
        <input className="border p-2 rounded" type="text" placeholder="Search for a location" />
      </Autocomplete>

      {/* Map component */}
      <div className="w-1/2 h-96 mx-auto border rounded-sm ">
        <GoogleMap
          zoom={searchLngLat ? 18 : 13}
          center={searchLngLat || center}
          mapContainerClassName="map"
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          {selectedPlace && <Marker position={searchLngLat} />}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;
