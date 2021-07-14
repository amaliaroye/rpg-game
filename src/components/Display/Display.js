import React from 'react'
import Hud from './Hud'
import Background from './Background'
import Foreground from './Foreground'

const Display = (props) => {
  const { activeInputs, position, deltaTime } = props

  return (
    <React.Fragment>
      <Background />
      <Foreground x={position[0]} y={position[1]} />
      <Hud activeInputs={activeInputs} deltaTime={deltaTime} />
    </React.Fragment>
  )
}

export default Display
