const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'https://pokeapi.co/api/v2/pokemon/?limit=30',
            pokemon: [],
            next: '',
            sprite: '',
            favorites: []
        },

        actions: {

            getPokemon: async (url) => {
                await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            pokemon: data.results,
                            next: data.next
                        })
                    })
            },

            getSpriteByName: async (name) => {
                await fetch("https://pokeapi.co/api/v2/pokemon/" + name + "/", {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            sprite: data
                        })
                    })
            },

            addFavorites: async (favPokemon) => {
                const store = getStore();
                setStore({ favorites: store.favorites.concat(favPokemon) });
            }
        }
    };

}
export default getState;