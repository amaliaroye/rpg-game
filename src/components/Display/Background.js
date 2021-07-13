import React from 'react'
import useCanvas from '../../hooks/useCanvas'
import { canvas, colors } from '../../data/variables'

const Background = (props) => {

const render = (context) => {
    if(!context) return
    // clear the canvas on every render
    context.clearRect(0, 0, canvas.width, canvas.height)

    // background fill
    context.fillStyle = colors.index29
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  // `useCanvas` is a custom hook that is passed in a render/draw function and returns a canvas context
  const context = useCanvas(render)

  return (
    <React.Fragment>
      <canvas
        id="background"
        ref={context}
        width={canvas.width}
        height={canvas.height}
      >
      </canvas>
    </React.Fragment>
  )
}

export default Background
