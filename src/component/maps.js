"use client"
import { useState, useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker, Autocomplete } from "@react-google-maps/api";

const Map = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchLngLat, setSearchLngLat] = useState(null);
  const [mapHeight, setMapHeight] = useState("70vh");
  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState("");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMapHeight("50vh")
        setMapHeight("70vh")
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isLoaded) return <div>Loading....</div>;

  const center = { lat: -1.4449082, lng: -48.4858324 };

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    setSelectedPlace(place);
    setSearchLngLat({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 p-12">
      <div className="w-1/3 h-96 mx-auto border rounded-sm" style={{ height: mapHeight }}>
        <GoogleMap
          zoom={searchLngLat ? 18 : 13}
          center={searchLngLat || center}
          mapContainerClassName="map"
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          {selectedPlace && <Marker position={searchLngLat} />}
        </GoogleMap>
      </div>
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
    </div>
  );
};

export default Map;
