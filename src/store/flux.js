const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'https://pokeapi.co/api/v2/pokemon',
            pokemon: [],
            sprite: '',
            error: null
        },

        actions: {

            getPokemon: () => {
                const store = getStore();
                fetch(store.path + '?limit=20&offset=0', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            pokemon: data.results,
                            error: null
                        })

                    })
            },

            getSpriteByName: (name) => {
                const store = getStore();
                fetch(store.path + '/' + name, {
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

            addSprite: () => {
                const store = getStore();
                if (store.pokemon.length > 0) {
                    for (let i = 0; i < store.pokemon.length; i++) {
                        store.getSpriteByName(store.pokemon[i].name);
                        if (store.sprite) store.pokemon[i].sprite = store.sprite?.sprites?.front_default
                    }
                    return console.log("result", store.pokemon)
                }

            }
        }
    };

}
export default getState;