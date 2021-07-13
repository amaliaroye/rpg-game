import React, { useState, useEffect } from 'react'
import Display from './components/Display/Display'
import Controller from './components/Controller'
import Game from './components/Game/Game'


const App = (props) => {
  const [activeInputs, setActiveInputs] = useState([])
  const [position, setPosition] = useState([0,0])

  const update = () => {

  }

  // a recursive game loop!
  const cycle = () => {
    update()
    window.requestAnimationFrame(cycle)
  }

  // maybe put this initial cycle call behind a start button
  window.requestAnimationFrame(cycle)

  return (
    <>
      <Controller setActiveInputs={setActiveInputs} />

      <Display
        activeInputs={activeInputs}
        position={position}
      />

      <Game
        activeInputs={activeInputs}
        position={position}
        setPosition={setPosition}
      />
    </>
  )
}

export default App
