import React, { useState, useEffect } from 'react'
import Display from './components/Display/Display'
import Controller from './components/Controller'
import Game from './components/Game/Game'
import Engine from './components/Engine'
import useAnimationFrame from './hooks/useAnimationFrame'

const App = (props) => {
  const [activeInputs, setActiveInputs] = useState([])
  const [position, setPosition] = useState([0,0])
  const [deltaTime, setDeltaTime] =useState('')

  useAnimationFrame(time => {
    setDeltaTime(time)
  })

  return (
    <>
      {/* <Engine/> */}
      <Controller setActiveInputs={setActiveInputs} />

      <Display
        activeInputs={activeInputs}
        position={position}
        deltaTime={deltaTime}
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
