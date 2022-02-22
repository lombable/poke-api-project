import React, { useEffect, useContext, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Context } from "../store/injectContext";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

const Pokegrid = () => {
    const { store, actions } = useContext(Context);

    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=30');

    const [userInput, setUserInput] = useState('');

    const [filteredPokemon, setFilteredPokemon] = useState([]);

    const addSprite = async () => {
        if (store.pokemon.length > 0) {
            for (let i = 0; i < store.pokemon.length; i++) {
                await actions.getSpriteByName(store.pokemon[i].name);
                if (store.sprite)
                    store.pokemon[i].sprite = store.sprite?.sprites?.front_default;
            }
        }
    };

    const favoriteHandler = (pokemon) => {
        let newFavorite = {
            "name": pokemon.name,
            "sprites": pokemon.sprite,
        }
        actions.addFavorites(newFavorite);
    }

    useEffect(async () => {
        await actions.getPokemon(loadMore);
        addSprite();
        setFilteredPokemon(store.pokemon)
        setLoadMore(store.next);
    }, [store.next]);


    const pokemonCardGenerator = filteredPokemon.length > 0 ?
        filteredPokemon.map((pokemon) => {
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
                        <div className="card-footer text-muted">
                            <button className="btn btn-secondary" onClick={() => favoriteHandler(pokemon)}>Add to favorites</button>
                        </div>
                    </div>
                </div>
            );
        }) : <Spinner />;

    const filterOnChange = (e) => {
        setUserInput(e.target.value)
        let filterResults = store.pokemon.filter(pokemon => pokemon.name.includes(userInput))
        setFilteredPokemon(filterResults);
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="align-center">
                    <input type="text" className="form-control mt-5" placeholder="Filter" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => filterOnChange(e)} />
                </div>
                <div className="row">{pokemonCardGenerator}</div>
                <div className="row">
                    <div className="mx-auto text-center  px-2 py-5">
                        <button className="btn btn-light" onClick={() => actions.getPokemon(loadMore)}>Next</button><br />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pokegrid;