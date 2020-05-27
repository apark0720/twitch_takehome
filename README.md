# Twitch React Test

The purpose of this test is to evaluate your skill as a developer. It should take you about 2 hours to complete, although you may take more time if you wish.

## Getting Started

1. Use the latest Node LTS
2. Install yarn globally if you don't already have it: `npm install -g yarn`
3. To build the project, run `yarn start`
4. When the build indicates it is complete, go to http://localhost:8080/

A webpack dev server will watch all the files in the project and automatically rebuild the bundle whenever a change is made to the code. We strongly recommend you use [Visual Studio Code](https://code.visualstudio.com/) as your editor for this project.

## Spec

When a user navigates to the app for the first time, the app should download the games data from the local web server. While the game data is being fetched, an indication of progress should be displayed.

Upon the completion of the games data download, a listing of games should be displayed on screen. The order of the listing should be determined by the `Order` field in the games data. Each item in the listing should display the following:

- Game icon
- Game name
- Whether the game supports addons
- Whether the game supports voice

When a user clicks on an item in the listing, the app should display a view which shows the details of the game. The game detail view should include all the data from the item in the listing and the following additions:

- Game slug
- List of game file names
- List of category section names

We've provided you with a basic structure to get you started. However, feel free to change it in any way you see fit.

## Technical

### Data
- The URL of the games data file is contained in the `gamesDataURL` property on the `config` object in the `globals` module.

```tsx
import { config } from 'ventura/globals';

const gameDataURL = config.gamesDataURL;
``` 

- In the games data, the game id (number) is located at the path `data[].ID`
- In the games data, the game name (string) is located at the path `data[].Name`
- In the games data, whether or not the game supports addons (boolean) is located at the path `data[].SupportsAddons`
- In the games data, whether or not the game supports voice (boolean) is located at the path `data[].SupportsVoice`
- In the games data, the order of the game (number) is located at the path `data[].Order`
- In the games data, the slug of the game (string) is located at the path `data[].Slug`
- In the games data, the game file names (string) are located at the path `data[].GameFiles[].FileName`
- In the games data, the category section names (string) are located at the path `data[].CategorySections[].Name`
- The URL of the game icon image can be constructed using the `gameIconURLTemplate` function on the `config` object in the `globals` module and the game ID.

```tsx
import { config } from 'ventura/globals';

const gameIconURL = config.gameIconURLTemplate({ gameID: gameID });
```

### Design

- The state of the application should be managed using Redux. Components should utilize data from the Redux store using React-Redux. The general structure of the application has been provided:

    - `source/actions/games.ts` should contain Redux actions
    - `source/models/config.ts` contains global config values
    - `source/models/game.ts` should contain an interface describing the game data
    - `source/reducers/games.ts` should contain a Redux reducer
    - `source/states/games.ts` should contain an interface describing the Games reducer state
    - `source/globals.ts` contains the global application values including `config` and `store` (Redux Store)

- We've provided `source/components/games/game-list.tsx` as a starting presentation component.

## Bonus, Not Required

- Implement Redux state and component testing using Jest
- Implement game search functionality
- Implement functionality to periodically re-download the game data file (in case it has updated)
- Provide details on choices regarding UI layout
