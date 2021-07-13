/*
  This is a presentational component to display a controller gamepad under the canvas that will highlight active keys
*/

import React from 'react'
import styled from 'styled-components'
import { colors } from '../../data/variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ControllerGrid = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
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
  opacity: ${props => props.active ? '100%' : '40%'};
  height: 3rem !important;
  width: 3rem !important;
  border-radius: .125em;
`

const Gamepad = ({activeInputs}) => {
  return (
    <ControllerGrid>
      <Icon
        icon="caret-up"
        grid="up"
        active={activeInputs.includes('up') ? 'active' : ''}
        />
      <Icon
        icon="caret-down"
        grid="down"
        active={activeInputs.includes('down') ? 'active' : ''}
      />
      <Icon
        icon="caret-left"
        grid="left"
        active={activeInputs.includes('left') ? 'active' : ''}
        />
      <Icon
        icon="caret-right"
        grid="right"
        active={activeInputs.includes('right') ? 'active' : ''}
        />
    </ControllerGrid>
  )
}

export default Gamepad
