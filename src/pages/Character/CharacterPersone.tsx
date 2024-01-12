import React from "react";
import axios from "axios";
import { Character } from "../../types/Characters";
import { Link, useParams } from "react-router-dom";

import Loader from "../../components/Loader";

const CharacterPersone: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState<Character | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get<Character>(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при выполнении GET-запроса:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <Link
              to={"/characters"}
              className="inline-block flex-1 rounded-lg mb-10 bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
            >
              Go to back
            </Link>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="grid gap-4 lg:grid-cols-5">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                  <img
                    src={character?.image}
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="md:py-8">
                <div className="mb-2 md:mb-3">
                  <span className="mb-0.5 inline-block text-gray-500">
                    {character?.gender} |{" "}
                    <strong
                      className={`${
                        character?.status === "Dead"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {character?.status}
                    </strong>
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                    {character?.name}
                  </h2>
                </div>
                <div className="mb-6 flex items-center gap-3 md:mb-10">
                  <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
                    <span className="text-sm">{character?.origin.name}</span>
                  </div>
                </div>

                <div className="mb-6 flex items-center gap-2 text-gray-500">
                  <span className="text-sm">{character?.created}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterPersone;
