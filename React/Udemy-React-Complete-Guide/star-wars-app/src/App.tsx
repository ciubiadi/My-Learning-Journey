import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import CharactersList from "./components/CharactersList/CharactersList";
import AddCharacter from "./components/AddCharacter/AddCharacter";

function App() {
  type SWCharacter = {
    name: string;
    birth_year: string;
    url: string;
    id: string;
  };

  const [characters, setCharacters] = useState<SWCharacter[]>([]);
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
  // async function fetchCharactersHandler() {
  const fetchCharactersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // const response = await fetch("https://swapi.dev/api/peopleWrongURL");
      // const response = await fetch("https://swapi.dev/api/people");
      const response = await fetch(
        "https://react-star-wars-2e4cd-default-rtdb.europe-west1.firebasedatabase.app/characters.json"
      );

      // I can use response.status as well
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log("data fetching GET");
      console.log(data);

      const loadedCharacters = [];

      for (const key in data) {
        loadedCharacters.push({
          name: data[key].name,
          birth_year: data[key].birthYearRef,
          url: data[key].url,
          id: data[key].name + " " + data[key].birthYearRef,
        });
      }

      setCharacters(loadedCharacters);
      // setCharacters(data.results);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  /* I use the useEffect hook because sending the HTTP request is a side effect which ultimately
  changes the component state. */
  useEffect(() => {
    fetchCharactersHandler();
  }, [fetchCharactersHandler]);

  async function addCharacterHandler(character: SWCharacter) {
    console.log("character in AddCharacterHandler");
    console.log(character);
    const response = await fetch(
      "https://react-star-wars-2e4cd-default-rtdb.europe-west1.firebasedatabase.app/characters.json",
      {
        method: "POST",
        body: JSON.stringify(character),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("data from POST");
    console.log(data);
  }

  return (
    <div className="App">
      <section className="section">
        <AddCharacter addCharacterHandler={addCharacterHandler} />
      </section>
      <section className="section-characters">
        <button onClick={fetchCharactersHandler}>Fetch Characters</button>

        {isLoading && <p>Loading...</p>}
        {!isLoading && characters?.length === 0 && !error && (
          <p>No movie characters found</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading &&
          characters?.length > 0 &&
          characters.map((item: SWCharacter) => {
            return (
              <CharactersList
                key={item.id}
                name={item.name}
                birthYear={item.birth_year}
              />
            );
          })}
      </section>
    </div>
  );
}

export default App;
