import { useEffect, useState } from "react";
import useBreedList from "./hooks/useBreedList";
import Pet from "./Pet";

const ANIMALS = ["birds", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breads] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}$breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="animal"
            onChange={(e) => {
              setBreed("");
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            disabled={breads.length === 0}
            placeholder="breed"
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breads.map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <div className="search">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              images={pet.images}
              location={pet.location}
              id={pet.id}
              key={pet.id}
            />
          ))
        ) : (
          <h1>No Pets Found</h1>
        )}
      </div>
    </div>
  );
};

export default SearchParams;
