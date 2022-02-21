import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailedPokemon = () => {
    const [pokemon, setPokemon] = useState({});

    const [pokemonDescription, setPokemonDescription] = useState({});

    const { name } = useParams();

    useEffect(() => {
        const getPokemonData = async () => {
            await fetch("https://pokeapi.co/api/v2/pokemon/" + name + "/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setPokemon(data);
                });
        };
        getPokemonData();

        const getPokemonDescription = async () => {
            await fetch("https://pokeapi.co/api/v2/pokemon-species/" + name + "/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setPokemonDescription(data);
                });
        };
        getPokemonDescription();

    }, [name]);


    return (
        <div className="container-fluid">
            <div className="card mb-3 mx-auto mt-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4 text-center">
                        <img src={pokemon.sprites?.front_default} className="img-fluid text-center rounded-start img-responsive" alt="pokemon-sprite" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Pokemon name: {pokemon.name}</h5>
                            <p className="card-text">Height: {pokemon.height} inches.</p>
                            <p className="card-text">Weight: {pokemon.weight} pounds.</p>
                            <p className="card-text">Description: <br />{pokemonDescription.flavor_text_entries ? pokemonDescription.flavor_text_entries[0].flavor_text : "Loading.."}</p>
                            <p className="card-text"><Link className="btn btn-light" to="/pokegrid">Go back</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedPokemon;