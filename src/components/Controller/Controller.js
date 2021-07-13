/*
This `Controller` component takes events and keypresses and applies the correct actions based on the keys pressed
*/

import React, {useState, useEffect} from 'react'
import useKeyPress from '../../hooks/useKeyPress'

const Controller = (props) => {
  const [up, setUp] = useState(false)
  const [down, setDown] = useState(false)
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(false)

  const keysPressed = useKeyPress()
  useEffect(() => {
    keysPressed.includes('ArrowUp' || 'KeyW') ? setUp(true) : setUp(false)
    keysPressed.includes('ArrowDown' || 'KeyS') ? setDown(true) : setDown(false)
    keysPressed.includes('ArrowLeft' || 'KeyA') ? setLeft(true) : setLeft(false)
    keysPressed.includes('ArrowRight' || 'KeyD') ? setRight(true) : setRight(false)
  }, [keysPressed])

  return (
    ''
  )
}

export default Controller
