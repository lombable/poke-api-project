import React, { useEffect, useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Context } from "../store/injectContext";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

const Favorites = () => {
    const { store, actions } = useContext(Context);

    const addSprite = async () => {
        if (store.favorites.length > 0) {
            for (let i = 0; i < store.favorites.length; i++) {
                await actions.getSpriteByName(store.favorites[i].name);
                if (store.sprite)
                    store.favorites[i].sprite = store.sprite?.sprites?.front_default;
            }
        }
    };

    useEffect(async () => {
        actions.getPokemon();
        addSprite();
    }, [store.favorites]);

    const pokemonCardGenerator = store.favorites.length > 0 ?
        store.favorites.map((pokemon) => {
            return (
                <div className="col-sm-4 py-2 mt-5" key={pokemon.name}>
                    <div className="card text-center">
                        <div className="card-header">Pokémon: {pokemon.name}</div>
                        <Link to={"/detailedpoke/" + pokemon.name} className="card-body">
                            <h5 className="card-title">{pokemon.name}</h5>
                            <p className="card-text">
                                {pokemon.sprite === undefined ? <Spinner /> :
                                    <img
                                        style={{ height: "100px", width: "100px" }}
                                        src={pokemon.sprite}
                                        alt="pokemon-sprite"
                                    />}
                            </p>
                        </Link>
                    </div>
                </div>
            );
        }) : <Spinner />;

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                </div>
                {
                    store.favorites?.length > 0 ?
                        <div className="row">
                            {pokemonCardGenerator}
                        </div>
                        :
                        <div className="text-center"><br /><br />
                            <h3>You haven't added any favorites. Add some!</h3>
                        </div>
                }
            </div>
        </>
    );
};

export default Favorites;