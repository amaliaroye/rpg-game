import React from 'react'
import Gamepad from './Gamepad'
import Background from './Background'
import Game from './Game'

const Display = (props) => {
  const { activeInputs, position } = props

  return (
    <React.Fragment>
      <Background />
      <Game x={position[0]} y={position[1]} />
      <Gamepad activeInputs={activeInputs} />
    </React.Fragment>
  )
}

export default Display
