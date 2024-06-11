import React, { useState, useEffect } from "react";
import { PokemonSpritiesAPI, PokemonAPI } from "./PokeAPI";
import PokeFilter from "../PokeFilter/PokeFilter";
import { motion } from "framer-motion";
import "./PokemonCards.css";

const PokemonCards = () => {
  // things to add into the cards
  // to flip and show the back of the card with more information
  // to make them into a dec
  // to add smooth transtion between cards
  // make it similar to tgs cards
  // more api calls
  // add a random pokemon genator
  // click on a pokemon card takes me to another page on this page have pagination
  // load more options only have 24 cards at one time
  // atomic arhtecte 
  // implement redux tool kit 
  // axio instance 
  // bootstrap

  //create a new repository tonight and give accesss 
  // git crash course 


  const [spritesData, setSpritesData] = useState([]);
  const [namesData, setNamesData] = useState(null);

  async function fetchPokemonSprites() {
    const results = await Promise.all(PokemonSpritiesAPI());
    setSpritesData(results);
  }

  async function fetchPokemonNames() {
    const results = await PokemonAPI();
    setNamesData(results);
  }

  console.log(namesData);

  useEffect(() => {
    fetchPokemonSprites();
    fetchPokemonNames();
  }, []);

  return (
    <>
      <div className="poke-title">Pokedex</div>
      <div>
        <PokeFilter />
      </div>
      <div>Sorting</div>
      <div>Suprise me Box</div>

      <div className="card-container">
        {spritesData.map((sprite, index) => (
          <motion.div
            className="card"
            key={index}
            whileHover={{ scale: 1, rotate: 5 }}
            whileTap={{
              scale: 0.8,
              rotate: 0,
              borderRadius: "100%",
            }}
          >
            <img src={sprite.front_default} alt={`Pokemon ${index}`} />
            <span>
              {namesData ? (
                <div>
                  <h4>{namesData.results[index].name}</h4>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default PokemonCards;
