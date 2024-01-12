import React from "react";
import { Link } from "react-router-dom";
import { CharacterItemProps } from "../types/Characters";

const CharacterItem: React.FC<CharacterItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
      <Link
        to={`/characters/${item.id}`}
        className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
      >
        <img
          src={item.image}
          loading="lazy"
          alt={item.name}
          className={`${
            item.status === "Dead" ? "grayscale" : "grayscale-0"
          } absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110`}
        />
      </Link>

      <div className="flex flex-col gap-2 p-4 lg:p-6">
        <span className="text-sm text-gray-400">
          {item.gender} | {item.species}
        </span>

        <h2 className="text-xl font-bold text-gray-800">
          <Link
            to={`/characters/${item.id}`}
            className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
          >
            {item.name}
          </Link>
        </h2>

        <div>
          <Link
            to={`/characters/${item.id}`}
            className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
