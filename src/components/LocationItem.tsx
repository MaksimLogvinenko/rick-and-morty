import React from "react";
import { Link } from "react-router-dom";
import { LocationsItemProps } from "../types/Locations";

const LocationItem: React.FC<LocationsItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
      <div className="flex flex-col gap-2 p-4 lg:p-6">
        <span className="text-sm text-gray-400">{item.dimension}</span>

        <h2 className="text-xl font-bold text-gray-800">
          <Link
            to={`/locations/${item.id}`}
            className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
          >
            {item.name}
          </Link>
        </h2>

        <div>
          <Link
            to={`/locations/${item.id}`}
            className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
