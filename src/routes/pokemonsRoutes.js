import express from "express";
import PokemonController from "../controllers/pokemonsController.js";

const router = express.Router();

router
    .get("/pokemons", PokemonController.listPokemons)
    .get("/pokemons/:id", PokemonController.listPokemonById)
    .post("/pokemons", PokemonController.createPokemon)
    .put("/pokemons/:id", PokemonController.updatePokemon)
    .delete("/pokemons/:id", PokemonController.deletePokemon)

export default router;