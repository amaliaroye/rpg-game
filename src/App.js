import React, { Fragment, useState, useEffect } from 'react'
import Display from './components/Display/Display'
import Controller from './components/Controller/Controller'
import useEvent from './hooks/useEvent'

const App = (props) => {
  //. I want to put the keysPressed state into the Controller component and keep the active key actions (up, down, left, right, etc) in this component only

  // this will record the keys that are currently being pressed in an array
  // const [keysPressed, setKeysPressed] = useState([])

  // const [activeInputs, setActiveInputs] = useState({
  //   up: false, down: false, left: false, right: false
  // })

  // const onKeyDown = event => {
  //   // checks if the button is already being held down to prevent unnecessarily re-rendering the components and re-adding event listeners
  //   if (event.repeat) return

  //   setKeysPressed((prevState) => {
  //     return [...prevState, event.code]
  //   })
  // }

  // const onKeyUp = event => {
  //   // remove the key from the keysPressed array
  //   setKeysPressed((prevState) => {
  //     return prevState.filter(key => key !== event.code)
  //   })
  // }

  // useEvent('keydown', onKeyDown)
  // useEvent('keyup', onKeyUp)

  return (
    <Fragment>
      <Controller
        // keysPressed={keysPressed}
      />
      <Display
        // activeInputs={activeInputs}
      />
    </Fragment>
  )
}

export default App
