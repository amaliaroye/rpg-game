# Notes

[README](README.md)

## Vocabulary is Hard
#### Nouns:
action direction motion boundingBox collision
buttonInput keyPress

#### Verbs:
draw render display collide activate

#### Adjectives:
active

---

## Atomic File Structure
[styled-components](https://stackoverflow.com/questions/42987939/styled-components-organization)

Atom: a native html tag element
```jsx
const Input = props => <input {...props} />
```

Molecules: a group of atoms
```jsx
const Field = ({ label, ...inputProps }) => (
  <Label>
        {label}
        <Input {...inputProps} />
    </Label>
)
```

Organisms: a group of molecules and/or other organisms
```jsx
const Form = (props) => (
  <form {...props}>
        <Field label="Name" type="text" />
        <Field label="Email" type="email" />
    </form>
)
```

Pages:
```jsx
const HomePage = () => (
  <PageTemplate header={<Header />}>
        <Form />
    </PageTemplate>
)
```

Templates:
```jsx
const PageTemplate = ({ header, children }) => (
  <main>
        {header && <div>{header}</div>}
        {children}
    </main>
)
```

## MVC: Model/View/Controller
Controller : handles user input
  - never handles game logic
  - acts as the bridge between the Model and the View

Model : handles data logic
  - never interacts with the View
  - only interacts with data

View: handles data presentation
  - never interacts with the Model
  - dynamically rendered

## Reference
[react-icons](https://react-icons.github.io/react-icons)

[Using FontAwesome with React](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
[FAS Icons](https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid&m=free)

## Inspiration
[RPG game with React / Redux / HTML5](https://levelup.gitconnected.com/rpg-game-with-react-redux-html5-part-1-build-a-tile-map-9144fd867830)

[Create A 2D RPG Game With react-three-fiber](https://morioh.com/p/f8fd435c6310)

[Making "The Danger Crew" RPG with CodePen and React](https://codepen.io/punkydrewster713/post/making-an-rpg-in-react)

[How to develop 2D JavaScript games with HTML5 and React](https://atomizedobjects.com/blog/javascript/develop-2d-javascript-games-html5-react/)

[Poth on Programming Rabbit Trap](https://github.com/pothonprogramming/pothonprogramming.github.io/tree/master/content/rabbit-trap)

[Animating Canvas Using React Hooks](http://www.petecorey.com/blog/2019/08/19/animating-a-canvas-with-react-hooks/)
[MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

[React Game Kit](https://formidable.com/blog/2016/09/15/introducing-react-game-kit/)
[React Game Kit Demo](http://reactnext.surge.sh/)


[Add an HTML Canvas Into Your React App](https://betterprogramming.pub/add-an-html-canvas-into-your-react-app-176dab099a79)
