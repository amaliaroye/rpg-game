import React from 'react'
import Gamepad from './Gamepad'
import Canvas from './Canvas'

const Display = (props) => {

  return (
    <div>
      <Canvas />
      <Gamepad activeInputs={props.activeInputs} />
    </div>
  )
}

export default Display
