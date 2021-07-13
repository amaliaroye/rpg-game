/*
This `Controller` component takes events and keypresses and applies the correct actions based on the keys pressed
*/

import React, {useState, useEffect} from 'react'
import useKeyPress from '../hooks/useKeyPress'

const Controller = (props) => {
  // `useKeyPress` is a custom hook that returns an array containing all keys currently being held down
  const keysPressed = useKeyPress()

  const { setActiveInputs } = props

  useEffect(() => {
    let activeInputs = []
    if (keysPressed.includes('ArrowUp' || 'KeyW')) {activeInputs.push('up')}
    if (keysPressed.includes('ArrowDown' || 'KeyS')) {activeInputs.push('down')}
    if (keysPressed.includes('ArrowLeft' || 'KeyA')) {activeInputs.push('left')}
    if (keysPressed.includes('ArrowRight' || 'KeyD')) {activeInputs.push('right')}

    setActiveInputs(activeInputs)
  }, [keysPressed, setActiveInputs])

  return (
    ''
  )
}

export default Controller
