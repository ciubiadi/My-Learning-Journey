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
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    console.log(data);
    setCharacters(data.results);
    setIsLoading(false);
  }

  return (
    <div className="App">
      <section>
        <button onClick={fetchCharactersHandler}>Fetch Characters</button>
      </section>
      {isLoading && <p>Loading...</p>}
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
      {!isLoading && characters.length === 0 && (
        <p>No movie characters found</p>
      )}
    </div>
  );
}

export default App;
