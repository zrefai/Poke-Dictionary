# Poké-Dictionary

A react native app for looking up pokemon using the PokéAPI.

<p align="center">
  <img src="https://github.com/zrefai/Poke-Dictionary/blob/master/assets/images/icon.png?raw=true" alt="icon" width="300" height="300">
</p>

## Goal Of The Project

Experiment with local caching and optimization techniques to provide a seamless solution for easy look up of any of the 890 pokemon.

## How To Run

Clone the project into any directory of your choosing. Then, under the root directory of the Poké-Dictionary folder run:

```
npm install
```

This should download all of the necessary packages and node modules. To run the project, open the a terminal window and at the root directory run:

```
npm start
```

This should start the metro bundler. Hitting `i` in your terminal will open it up in the iOS simulator. You need to have Xcode and the iOS simulator downloaded for this. **(DISCLAIMER: I developed this project soley for iOS and for iPhone. I have not tested this app for Android devices or tablets. Unexpected behavior may occur when opening this app with the latter mediums.)**

## Details

### How does it work?

This is a quick summary of how everything works. (NOTE: I write these things out so I can reference them in the future if I need to :))

#### Fetching and AsyncStorage

On a fresh download, the app will fetch any new pokemon from the PokéAPI and store it in AsyncStorage. If there is ever a re-render required of a pokemon in the search list or its details, it will fetch that data from AsyncStorage instead of fetching the data from the API. New pokemon data is always fetched and stored on initial render, but retrieved from device memory every time after. This makes renders quick, and its an efficient way for handling repeat renders of the same pokemon during searching. I had initially thought to use Redux as a container over AsyncStorage for this portion of the app. Its good practice to do so, but state management was not necessary for Pokemon lookup, their details, or moves.

#### Redux

However, there are places that use Redux: Unown Mode and the Favorites List. Unown Mode requires re-rendering every rendered element with Unown formatted text. To achieve this, I created a function that acted as a funnel for all text formatting in the app. When the switch is made to Unown Mode, the value is changed in Redux causing cascade re-renders, through the aformentioned function, in the search list and everywhere else (Unown mode also required different padding from the normal font and this adjustment is accounted for). The Favorites List acts in the same way. Whenever a pokemon is added to the list an action is called through dispatch and the list is updated in Redux causing the Favorites List to re-render.

#### Code Reuse

The code for this app is condensed as much as possible. Components like PokemonCard, PokemonDetails, and PokemonMoves in the search list are reused in the Favorites List as well. The PokemonTypes component has attributes (flags) for different styles of PokemonType; this component appears in PokemonCard, PokemonDetails, and PokemonMoves.

### Fun Learning Experiences From The App

- Every component in the details page except for the Info and Stats sections of a pokemon required a different and sometimes multiple API calls to fetch the data. Stats and Info data are available attributes in the first fetch of a pokemon's data, but this is not the case for Damage Stats, Moves List or Evolutions. Managing this was difficult at first, and required use of smart parent components and dummy children components. This was a fun challenge for a concept that was fairly new to me in practice.
- Searching was improperly implemented in the app at first. I had it so that if you didnt spell the pokemon's name correctly the first time, you would probably have to use google to get the correct spelling. My friend recommended suggestions to searches to make the user experience more fluid and boy did it make a difference. A Fuzzy Search algorithm is used for searching pokemon now, brought to you by [Fuse.js](https://fusejs.io/). This is a neat library, and very easy to use.
- Error handling was challenging with this API. After implementing Fuzzy Search, the app opened up to a lot more data all at once. This caused a ton of crashes, as I was not handling any of the errors from potential null values in the API nor handling errors in fetching the data. To counteract this, I built custom hooks to return results or errors from fetching. The app contained a ton of conditions for checking null values and was causing data to render slowly in certain areas. This was fixed by reducing/optimizing these checks in key areas.

## Stills

<p align="center">
<img src="https://github.com/zrefai/Poke-Dictionary/blob/master/assets/stills/sim1.png?raw=true" alt="icon" width="300" height="650">
<img src="https://github.com/zrefai/Poke-Dictionary/blob/master/assets/stills/sim2.png?raw=true" alt="icon" width="300" height="650">
<img src="https://github.com/zrefai/Poke-Dictionary/blob/master/assets/stills/details.png?raw=true" alt="icon" width="300" height="650">
<img src="https://github.com/zrefai/Poke-Dictionary/blob/master/assets/stills/details2.png?raw=true" alt="icon" width="300" height="650">
<img src="https://github.com/zrefai/Poke-Dictionary/blob/master/assets/stills/moves.png?raw=true" alt="icon" width="300" height="650">
<img src="https://github.com/zrefai/Poke-Dictionary/blob/master/assets/stills/favorites.png?raw=true" alt="icon" width="300" height="650">
<img src="https://github.com/zrefai/Poke-Dictionary/blob/master/assets/stills/unown.png?raw=true" alt="icon" width="300" height="650">
</p>
