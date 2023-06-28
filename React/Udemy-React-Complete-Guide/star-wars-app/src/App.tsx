import React, { useState } from "react";
import "./App.css";
import CharactersList from "./components/CharactersList/CharactersList";

function App() {
  type SWCharacter = {
    name: string;
    birth_year: string;
    url: string;
  };

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const dummyMovies: Array<SWCharacter> = [
  //   {
  //     id: 1,
  //     name: "dummy",
  //     birthYear: "1999",
  //   },
  //   {
  //     id: 2,
  //     name: "dummy2",
  //     birthYear: "1194",
  //   },
  // ];

  // Promise without Async await
  // function fetchCharactersHandler() {
  //   fetch("https://swapi.dev/api/people")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setCharacters(data.results);
  //     });
  // }

  // With Async + await
  async function fetchCharactersHandler() {
    setIsLoading(true);
    setError(null);
    // const response = await fetch("https://swapi.dev/api/people");
    // Fetching wrong url below
    try {
      // const response = await fetch("https://swapi.dev/api/peopleWrongURL");
      const response = await fetch("https://swapi.dev/api/people");

      // I can use response.status as well
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      setCharacters(data.results);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <div className="App">
      <section>
        <button onClick={fetchCharactersHandler}>Fetch Characters</button>
      </section>
      {isLoading && <p>Loading...</p>}
      {!isLoading && characters.length === 0 && !error && (
        <p>No movie characters found</p>
      )}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading &&
        characters.length > 0 &&
        characters.map((item: SWCharacter) => {
          return (
            <CharactersList
              key={item.url}
              name={item.name}
              birthYear={item.birth_year}
            />
          );
        })}
    </div>
  );
}

export default App;
