const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'https://pokeapi.co/api/v2/pokemon',
            pokemon: [],
            sprite: '',
        },

        actions: {

            getPokemon: async () => {
                const store = getStore();
                await fetch(store.path + '?limit=20', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            pokemon: data.results
                        })

                    })
            },

            getSpriteByName: async (name) => {
                const store = getStore();
                await fetch(store.path + '/' + name, {
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
            }
        }
    };

}
export default getState;