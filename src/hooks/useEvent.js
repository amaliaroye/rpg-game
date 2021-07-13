/*
  This is a custom hook to listen for and register events

  https://atomizedobjects.com/blog/javascript/develop-2d-javascript-games-html5-react/
*/

import { useEffect } from 'react'

export default function useEvent (event, handler) {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler)

    // this will clean up the event every time the component is re-rendered to prevent memory leaks
    return function cleanup() {
      window.removeEventListener(event, handler)
    }
  })
}
//? is there no dependency array?
