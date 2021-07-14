const scale = 1.5
const tileSize = scale * 16

export const colors = {
  index22: '#ffffff',
  white: '#ffffff',
  index30: '#242234',
  bg: '#242234',
  index29: '#403353',
  canvasBg: '#403353',
  index37: '#dae0ea',
  index38: '#b3b9d1',
  index40: '#6d758d',
  index49: '#b9bffb',
}

export const canvas = {
  columns: 20,
  rows: 15,
  width: scale * 320,
  height: scale * 240,
}

export const player = {
  color: colors.white,
  width: scale * 32,
  height: scale * 32,
}

export const constants = {
  speed: 16,
  velocity: scale * 1,
}
