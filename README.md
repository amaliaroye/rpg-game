# RPG Game

A 2D, top-down RPG game created in React using HTML5 canvas!

[NOTES](NOTES.md)

---

## File Structure
src
  - data: game data stored in json format
  - hooks: reusable hooks
  - assets: images and fonts
  - components: game components
    - Controller: handles user input
    - Game: handles game logic
    - Display: handles rendering the canvas
      - Canvas

---

## Components
Inspired by [react-game-kit](https://github.com/formidablelabs/react-game-kit)

#### `<Stage />`

#### `<World />`

#### `<Tilemap />`
**columns** (number): number of columns in tilemap
**rows** (number): number of rows in tilemap
**width** (number):
**height** (number):
**src** (string): tilemap image source path
**tileSize** (number): tilemap tile size
**scale** (number): tilemap image scale
**layers** (array): array of arrays that contain the tilemap indexes for each layer of the map

#### `<Player />`
**src** (string): tilemap image source path
**width** (number)
**height** (number)

#### `<Controller />`


---

## Custom Hooks
#### `useEvent`

#### `useCanvas`

---
