/*
This `Controller` component takes events and keypresses and applies the correct actions based on the keys pressed
*/

import React, {useState, useEffect} from 'react'
import useKeyPress from '../hooks/useKeyPress'

const Controller = (props) => {
  // const [up, setUp] = useState(false)
  // const [down, setDown] = useState(false)
  // const [left, setLeft] = useState(false)
  // const [right, setRight] = useState(false)

  // `useKeyPress` is a custom hook that returns an array containing all keys currently being held down
  const keysPressed = useKeyPress()

  // const { setUp, setDown, setLeft, setRight } = props
  // useEffect(() => {
  //   keysPressed.includes('ArrowUp' || 'KeyW') ? setUp(true) : setUp(false)
  //   keysPressed.includes('ArrowDown' || 'KeyS') ? setDown(true) : setDown(false)
  //   keysPressed.includes('ArrowLeft' || 'KeyA') ? setLeft(true) : setLeft(false)
  //   keysPressed.includes('ArrowRight' || 'KeyD') ? setRight(true) : setRight(false)
  // }, [keysPressed])


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
