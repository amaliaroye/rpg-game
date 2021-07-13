/*
  This is a presentational component to display a controller gamepad under the canvas that will highlight active keys
*/

import React from 'react'
import styled from 'styled-components'
import { colors } from '../../data/Variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Gamepad = styled.div`
  font-size: 3rem;
	margin: .1em;
	display: grid;
  /* place-items sets both align-items and justify-items */
  place-items: center;
  /* place-content sets both align-content and justify-content */
  place-content: center;
	grid-template-columns: 1em 1em 1em;
	grid-template-rows: 1em 1em 1em;
	gap: .1em;
	grid-template-areas:
		'. up .'
		'left . right'
		'. down .';
  `

const Icon = styled(FontAwesomeIcon)`
  /* Ternary operator to change the color when the button is active */
  grid-area: ${props => props.grid};
  /* color: ${props => props.active ? colors.white : colors.bg}; */
  color: ${colors.bg};
  background: ${props => props.active ? colors.white : colors.index40};
  height: 3rem !important;
  width: 3rem !important;
  border-radius: .125em;
`

const ControllerDisplay = (props) => {

  return (
    <div>
      <Gamepad>
        <Icon
          icon="caret-up"
          grid="up"
          // active={props.activeInputs.up ? 'active' : ''}
        />
        <Icon
          icon="caret-left"
          grid="left"
        />
        <Icon
          icon="caret-right"
          grid="right"
        />
        <Icon
          icon="caret-down"
          grid="down"
        />
      </Gamepad>
    </div>
  )
}

export default ControllerDisplay
