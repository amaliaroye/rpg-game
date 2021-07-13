import React from 'react'
import Gamepad from './Gamepad'
import Canvas from './Canvas'

const Display = (props) => {
  const { activeInputs, position } = props

  return (
    <div>
      <Canvas x={position[0]} y={position[1]}/>
      <Gamepad activeInputs={activeInputs} />
    </div>
  )
}

export default Display
