import React, { useEffect, useContext } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { Context } from "../store/injectContext";

const Pokegrid = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPokemon()
        const addSprite = async () => {
            if (store.pokemon.length > 0) {
                for (let i = 0; i < store.pokemon.length; i++) {
                    await actions.getSpriteByName(store.pokemon[i].name);
                    if (store.sprite) store.pokemon[i].sprite = store.sprite?.sprites?.front_default
                }
            }
        }
        addSprite()
    }, [])



    const pokemonCardGenerator = store.pokemon.map((pokemon) => {
        return (
            <div className="col-sm-4 py-2 mt-5" key={pokemon.name}>
                <div className="card text-center">
                    <div className="card-header">
                        Pokémon: {pokemon.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                        <p className="card-text">
                            <img style={{ height: "100px", width: "100px" }} src={pokemon.sprite} alt="pokemon-sprite" />
                        </p>
                    </div>
                    <div className="card-footer text-muted">
                        Info adicional
                    </div>
                </div>
            </div>

        )
    })

    return (
        <div className="container-fluid">
            <div className="row">
                {pokemonCardGenerator}
            </div>
            <Link className="btn btn-light" to="/">Go back</Link>
        </div>
    )

}

export default Pokegrid;