# Notes

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
