import React from 'react'
import useCanvas from '../../hooks/useCanvas'
import { canvas, colors, player } from '../../variables'

const Canvas = (props) => {

  const render = (context) => {
    if(!context) return
    // clear the canvas on every render
    context.clearRect(0, 0, canvas.width, canvas.height)

    // background fill
    context.fillStyle = colors.index29
    context.fillRect(0, 0, canvas.width, canvas.height)

    // player fill
    context.fillStyle = player.color
    context.fillRect(props.x, props.y, player.width, player.height)
  }

  // `useCanvas` is a custom hook that is passed in a render/draw function and returns a canvas context
  const context = useCanvas(render)

  return (
      <canvas
        id="canvas"
        ref={context}
        width={canvas.width}
        height={canvas.height}
      >
      </canvas>
  )
}

export default Canvas
