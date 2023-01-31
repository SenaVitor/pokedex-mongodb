import express from "express";
import pokemons from "./pokemonsRoutes.js"

const routes = (app) => {
    app.route('./').get((req, res) => {
        res.status(200).send({titulo: "Pokedex"});
    });

    app.use(
        express.json(),
        pokemons
    )
}

export default routes;