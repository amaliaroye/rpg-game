import { useState, useEffect } from 'react'

/*
  `useKeypress` is a custom hook that listens for and handles keypress events

  it then returns an array of keys currently pressed
*/

export default function useKeyPress () {
  const [keysPressed, setKeysPressed] = useState([])

  useEffect(() => {
    // initiate the event handler
    window.addEventListener('keydown', onKeyDown)

    // this will clean up the event every time the component is re-rendered to prevent memory leaks
    return function cleanup() {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp)

    return function cleanup() {
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  //* CALLBACK FUNCTIONS
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

  return keysPressed
}
