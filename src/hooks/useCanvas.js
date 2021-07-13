/*
`useCanvas` is a custom hook that takes in a `render` callback function and returns the canvasRef

https://betterprogramming.pub/add-an-html-canvas-into-your-react-app-176dab099a79
*/

import { useRef, useEffect } from 'react'

const useCanvas = render => {
   const canvasRef = useRef(null)

  useEffect(() => {

    const context = canvasRef.current.getContext('2d')
    // frameCount helps with animation timing in the render function
    let frameCount = 0
    let animationFrameId = ''

    // the `draw` function is called recursively and wraps all the steps that will be repeated in the animation
    const draw = () => {
      frameCount++
      render(context, frameCount)
      animationFrameId = window.requestAnimationFrame(draw)
    }
    draw()

    return function cleanup() {
      window.cancelAnimationFrame(animationFrameId)
    }
  },[render])

   return canvasRef
}

export default useCanvas
