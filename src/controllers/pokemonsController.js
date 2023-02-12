import pokemons from "../models/Pokemon.js";

class PokemonController{

    static listPokemons = (req, res) => {
        pokemons.find().populate('type').exec((err, pokemons) => {
            res.status(200).json(pokemons);
        });
    }
    
    static listPokemonById = (req, res) => {
        const id = req.params.id;
        pokemons.findById(id).populate('type', 'name').exec((err, pokemon) => {
            if(err){
                res.status(400).send({message: `${err.message} - Pokemon id not found!`})
            }else{
                res.status(200).send(pokemon);
            }
        });
    }

    static createPokemon = (req, res) => {
        let pokemon = new pokemons(req.body);
        pokemon.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Failed to create pokemon`})
            }else{
                res.status(201).send(pokemon.toJSON());
            }
        });
    }

    static updatePokemon = (req, res) => {
        const id = req.params.id;
        pokemons.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: `Successfully updated pokemon!`})
            }
        });
    }

    static deletePokemon = (req, res) => {
        const id = req.params.id;
        pokemons.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message});
            }else{
                res.status(200).send({message: `Successfully deleted pokemon!`})
            }
        });
    }

}

export default PokemonController;