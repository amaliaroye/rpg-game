import React, { Fragment, useState } from 'react'
import Display from './components/Display/Display'
import Controller from './components/Controller/Controller'
import useEvent from './utility/useEvent'

const App = (props) => {
  //. I want to put the keysPressed state into the Controller component and keep the active key actions in this component only

  // this will record the keys that are pressed in an array
  const [keysPressed, setKeysPressed] = useState([])


  const onKeyDown = event => {
    // checks if the button is already being held down to prevent unnecessarily re-rendering the components and re-adding event listeners
    if (event.repeat) return

    setKeysPressed((prevState) => {
      return [...prevState, event.code]
    })
  }

  const onKeyUp = event => {
    // remove the key from the keysPressed array
    setKeysPressed((prevState) => {
      return prevState.filter(key => key !== event.code)
    })
  }

  useEvent('keydown', onKeyDown)
  useEvent('keyup', onKeyUp)

  console.log('keysPressed:', keysPressed)
  return (
    <Fragment>
      <Display />
      <Controller
        keysPressed={keysPressed}
      />
    </Fragment>
  )
}

export default App
