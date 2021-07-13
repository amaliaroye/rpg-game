import React, { useState, useEffect } from 'react'

const Engine = (props) => {
  const update = () => {

  }

  const gameLoop = () => {
    // a recursive game loop that gets input, updates game state, and renders the game
    update()
    window.requestAnimationFrame(gameLoop)
  }

  // maybe put this initial cycle call behind a start button
  window.requestAnimationFrame(gameLoop)

  return (
    <>
    </>
  )
}

export default Engine
