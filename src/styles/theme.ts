import { shade, transparentize } from 'polished'

const theme = {
  primary: {
    main: shade(0.06, '#FFFFFF'),
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#FF8C00',
    contrastText: '#FFFFFF'
  },

  success: {
    main: '#28A745',
    contrastText: '#FFFFFF'
  },
  warning: {
    main: '#F5BB00',
    contrastText: '#222222'
  },
  error: {
    main: '#EF3340',
    contrastText: '#FFFFFF'
  },
  info: {
    main: '#4D6DFF',
    contrastText: '#FFFFFF'
  },

  background: '#FFFFFF',
  text: '#222222',
  shadow: `0 0 8px 4px ${transparentize(0.8, shade(0.1, '#FFFFFF'))}`
}

export { theme }
