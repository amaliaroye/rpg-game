/*
  The `Game` component handles game data and logic
*/

import React, { useState, useEffect } from 'react'
import Player from './Player'
import { constants } from '../../data/variables'

const Game = (props) => {

  return (
    <>
      <Player {...props} />
    </>
  )
}

export default Game
