import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema(
    {
        id:{type: String},
        number: {type: Number, required: true},
        name: {type: String, required: true},
        // type: {type: mongoose.Schema.Types.ObjectId, ref: 'types', required: true},
        type: {type: String},
        height: {type: Number, required: true},
        weight: {type: Number, required: true},
        description: {type: String, required: true},
        // evolutions: {type: mongoose.Schema.Types.ObjectId, ref: 'pokemon', required: true}
    }
);

const pokemons = mongoose.model('pokemons', pokemonSchema);

export default pokemons;