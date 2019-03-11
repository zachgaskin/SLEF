export const colors = {
  mainWhite: '#fff',
  mainBlack: '#262626',
  mainYellow: '#f3bf29',
  mainOrange: '#f57e20',
  mainGrey: '#474747',
}

export const transDefault = 'transition:all 0.5s ease-in-out'

export const transObject = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transFunction = ({
  property = 'all',
  time = '0.5s',
  type = 'linear',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const letterSpacing = ({ spacing = '0.1rem' }) => {
  return `letter-spacing:${spacing}`
}

export const textSlanted = `font-family: 'Caveat', cursive;`

export const border = ({
  width = '0.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border: ${width} ${type} ${color}`
}

export const transition = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition:${property} ${time} ${type}`
}
