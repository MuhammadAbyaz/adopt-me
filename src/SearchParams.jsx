import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
import useBreedList from "./hooks/useBreedList";
import Pet from "./Pet";
import AdoptedPetContext from "./AdoptedPetContext";

const ANIMALS = ["birds", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [adoptedPet, _] = useContext(AdoptedPetContext);
  const [requestParams, setRequestParms] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const res = useQuery(["search", requestParams], fetchSearch);
  const pets = res?.data?.pets ?? [];
  const [animal, setAnimal] = useState("");
  const [breads] = useBreedList(animal);
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParms(obj);
        }}
      >
        {adoptedPet && (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        )}
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="animal"
            onChange={(e) => {
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
            name="breed"
            disabled={breads.length === 0}
            placeholder="breed"
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
        {res.isLoading ? (
          <div className="loading-pane">
            <h1>Loading</h1>
          </div>
        ) : pets.length > 0 ? (
          pets.map((pet) => (
            <Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              images={pet.images}
              state={pet.state}
              city={pet.city}
              id={pet.id}
              key={pet.id}
            />
          ))
        ) : (
          <h1 className="loading-pane">No Pets Found</h1>
        )}
      </div>
    </div>
  );
};

export default SearchParams;
