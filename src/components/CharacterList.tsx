import React from "react";
import axios from "axios";
import { Character } from "../types/Characters";

import Loader from "./Loader";
import CharacterItem from "./CharacterItem";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
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
        characters.map((character) => (
          <CharacterItem key={character.id} item={character} />
        ))
      )}
    </div>
  );
};

export default CharacterList;
