import React from 'react'
import useCanvas from '../../hooks/useCanvas'
import { world, colors } from '../../Variables'

const Canvas = (props) => {

  const render = (context) => {
    context.clearRect(0, 0, world.width, world.height)

    // background
    context.fillStyle = colors.index29
    context.fillRect(0, 0, world.width, world.height)
  }

  const context = useCanvas(render)

  return (
      <canvas
        id="canvas"
        ref={context}
        width={world.width}
        height={world.height}
      >
      </canvas>
  )
}

export default Canvas
