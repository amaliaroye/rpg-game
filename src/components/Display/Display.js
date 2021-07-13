import React from 'react'
import Gamepad from './Gamepad'
import Background from './Background'
import Foreground from './Foreground'

const Display = (props) => {
  const { activeInputs, position } = props

  return (
    <React.Fragment>
      <Background />
      <Foreground x={position[0]} y={position[1]} />
      <Gamepad activeInputs={activeInputs} />
    </React.Fragment>
  )
}

export default Display
