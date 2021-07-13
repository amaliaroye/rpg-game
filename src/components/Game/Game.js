import React, { useState, useEffect } from 'react'
import Player from './Player'
import { constants } from '../../variables'

const Game = (props) => {

  return (
    <>
      <Player {...props} />
    </>
  )
}

export default Game
