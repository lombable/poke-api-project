# PokeApi project

This project is made as a project for Pinflag for the front-end job position.

## How to start this app?

In the project directory, you can run "npm install" to install all dependencies that are needed to run the project. Then, a simple "npm start" will do the trick.

### `What's inside this app?`

It is divided in three different main parts: Landing page, Pokégrid and Favorites

### `Landing page:`

Where you will find a video playing in the background, and depending if you're checking the video in a desktop computer/laptop or a mobile it will show different videos playing. It has a "start" button that will guide you to the next section:

### `Pokégrid`

Here you will find all the pokemon in the national pokédex order, starting on number 1 (Bulbasaur). If you click on the image, you will get detailed information on the pokemon, including number (in national pokédex), height, weight and pokédex description.

In the main page of the pokégrid you have a button where you can add your favorite pokémon to a list so you can read them later on. You can access the Pokégrid or Favorites tab in the top navbar.

In the pokégrid you can also find a filter where you just type the name and it will automatically filter and try to look for what you're typing. There's also a button in the end of the page to load the next 30 batch of pokémon.

### `Favorites`

In this section you can find all the pokémon you added from the pokégrid rendered by cards where you can also get pokédex information. If there are no pokémon in the favorite list, a message saying "No favorites added" will show up.

### `What's on the navbar on top?`

Easy access to Pokégrid, the landing page and the favorites tab!

### `What was used to create this project?`

Mainly React to do all the logic and the rendering, Bootstrap in order to get quick elements and make it responsive easily and PokeAPI in order to get information from all the pokémon (fetching data from PokeAPIv2, from "https://pokeapi.co/")
