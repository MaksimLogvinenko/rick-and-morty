import React from "react";
import axios from "axios";
import { Location } from "../types/Characters";

import Loader from "./Loader";
import LocationItem from "./LocationItem";

const LocationList = () => {
  const [locations, setLocations] = React.useState<Location[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/location"
        );
        setLocations(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при выполнении GET-запроса:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
      {loading ? (
        <Loader />
      ) : (
        locations.map((location) => (
          <LocationItem key={location.id} item={location} />
        ))
      )}
    </div>
  );
};

export default LocationList;
