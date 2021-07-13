import React, { useState, useEffect } from 'react'
import Display from './components/Display/Display'
import Controller from './components/Controller'
import Game from './components/Game/Game'
import Engine from './components/Engine'

const App = (props) => {
  const [activeInputs, setActiveInputs] = useState([])
  const [position, setPosition] = useState([0,0])

  return (
    <>
      {/* <Engine/> */}
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
