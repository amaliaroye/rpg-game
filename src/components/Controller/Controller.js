/*
  This component takes events and keypresses and applies the correct actions based on the keys pressed
*/

import React, {useState} from 'react'

const Controller = ({ keysPressed }) => {
  const [active, setActive] = useState({
    up: false, down: false, left: false, right: false, shift: false, ctrl: false
  })

  if (keysPressed.includes('ArrowUp')) {
    setActive()
  }


  return (
    ''
  )
}

export default Controller
