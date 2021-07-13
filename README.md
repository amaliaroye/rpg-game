# RPG Game

A 2D RPG game created in React.


## Inspiration
[RPG game with React / Redux / HTML5](https://levelup.gitconnected.com/rpg-game-with-react-redux-html5-part-1-build-a-tile-map-9144fd867830)

[Create A 2D RPG Game With react-three-fiber](https://morioh.com/p/f8fd435c6310)

[Making "The Danger Crew" RPG with CodePen and React](https://codepen.io/punkydrewster713/post/making-an-rpg-in-react)

[How to develop 2D JavaScript games with HTML5 and React](https://atomizedobjects.com/blog/javascript/develop-2d-javascript-games-html5-react/)

[Poth on Programming Rabbit Trap](https://github.com/pothonprogramming/pothonprogramming.github.io/tree/master/content/rabbit-trap)
[HTML Canvas in React](https://betterprogramming.pub/add-an-html-canvas-into-your-react-app-176dab099a79)
[Animating Canvas Using React Hooks](http://www.petecorey.com/blog/2019/08/19/animating-a-canvas-with-react-hooks/)
[MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

[React Game Kit](https://formidable.com/blog/2016/09/15/introducing-react-game-kit/)
[React Game Kit Demo](http://reactnext.surge.sh/)

---

## Components
Inspired by [react-game-kit](https://github.com/formidablelabs/react-game-kit)
[React Game Kit Repo](https://github.com/formidablelabs/react-game-kit)

#### `<Stage />`

#### `<World />`

#### `<Tilemap />`
**columns** (number): number of columns in tilemap
**rows** (number): number of rows in tilemap
**width** (number)
**height** (number)
**src** (string): tilemap image source path
**tileSize** (number): tilemap tile size
**scale** (number): tilemap image scale
**layers** (array): array of arrats that contain tile indexes
```js
layers={[
  [
    0, 0, 0, 0,
    1, 0, 1, 1,
    0, 0, 1, 0,
    1, 0, 0, 0,
  ]
]}
```

### `<Sprite />`

---

## Custom Hooks
#### `useEvent`

#### `useCanvas`

## File Structure
src
+ constants
+ data : game data stored in json format
+ utility : reusable hooks
  + useKey
  + useEvent
  + useCanvas
+ assets
  + images
  + fonts
+ shared : small reusable presentational components
  + Button
  + Card
  + Input
+ components


## Reference
[react-icons](https://react-icons.github.io/react-icons)

[Using FontAwesome with React](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
[FAS Icons](https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid&m=free)
