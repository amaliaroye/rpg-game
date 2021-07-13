import React from 'react'
import useCanvas from '../../hooks/useCanvas'
import { world, colors } from '../../data/Variables'
import ControllerDisplay from './ControllerDisplay'

const Display = (props) => {

  const render = (context) => {
    context.clearRect(0, 0, world.width, world.height)

    // background
    context.fillStyle = colors.index29
    context.fillRect(0, 0, world.width, world.height)
  }

  const context = useCanvas(render)

  return (
    <div>
      <canvas
        id="canvas"
        ref={context}
        width={world.width}
        height={world.height}
      >
      </canvas>

      <ControllerDisplay activeInputs={props.activeInputs} />
    </div>
  )
}

export default Display
