/*
  This component handles Player movement on the canvas
*/

import React, { useState, useEffect } from 'react'
import { constants } from '../../data/variables'

const Player = (props) => {
  const { position, setPosition, activeInputs } = props
  const { speed } = constants

  const [x, setX] = useState(position[0])
  const [y, setY] = useState(position[1])

  useEffect(() => {
    setPosition([x, y])
  }, [setPosition, x, y])

  // Move the player!
  useEffect(() => {
    if (activeInputs.includes('up')) {
      setY(y => y-speed)
    }
    if (activeInputs.includes('down')) {
      setY(y => y+speed)
    }
    if (activeInputs.includes('left')) {
      setX(x => x-speed)
    }
    if (activeInputs.includes('right')) {
      setX(x => x+speed)
    }
  },[setY,setX,activeInputs,speed])

  return (
    ''
  )
}

export default Player
