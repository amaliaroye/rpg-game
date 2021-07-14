/*
  `useAnimationFrame` is a custom hook to maintain a fixed-time step game cycle

  `requestAnimationFrame` executes when the browser is ready to re-draw, so the game could run at different speeds on different devices and browsers.

  `requestAnimationFrame()` returns an integer (`requestId`) that can be passed into `cancelAnimationFrame()` to cancel a call and cleanup to prevent memory leaks

  passing in a callback function helps keep the game logic seperate from the display logic

  Based on:
  https://css-tricks.com/using-requestanimationframe-with-react-hooks/
  https://gist.github.com/balmacefa/3e899642ae96eeb78e76d015d9587397

*/

import { useRef, useEffect } from 'react'

export default function useAnimationFrame(callback) {
  // `useRef` can be used for mutable variables that will persist and are able to be changed without triggering a re-render
  const requestId = useRef(null)
  const previousTime = useRef(null)

  const cycle = timestamp => {
    if (previousTime.current !== undefined) {
      // `deltaTime` represents the time elapsed since the previous frame was drawn
      const deltaTime = timestamp - previousTime.current
      // run the passed in `callback` function at every animation cycle
      callback(deltaTime)
    }

    previousTime.current = timestamp

    // the 'state' will always be the initial value here
    requestId.current = requestAnimationFrame(cycle)
  }

  // initializes and cleans up requests
  useEffect(() => {
    requestId.current = requestAnimationFrame(cycle)

    return function cleanup() {
      cancelAnimationFrame(requestId.current)
    }
  }, []) // only run this effect once
}
