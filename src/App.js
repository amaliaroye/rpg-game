import React, { useState, useEffect } from 'react'
import Display from './components/Display/Display'
import Controller from './components/Controller'


const App = (props) => {

  const [activeInputs, setActiveInputs] = useState([])

  return (
    <>
      <Controller setActiveInputs={setActiveInputs} />
      <Display activeInputs={activeInputs}/>
    </>
  )
}

export default App
