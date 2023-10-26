// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const darkTheme = {
  dark: false,
  colors: {
    background: '#000000',
    surface: '#000000',
    primary: '#FFFD01',
    'primary-darken-1': '#C8FC4C',
    secondary: '#FC2535',
    'secondary-darken-1': '#FE7683',
    error: '#4FFFDF',
    info: '#E6E903',
    success: '#B3B0AF',
    warning: '#04F407',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'darkTheme',
    themes: {
      darkTheme,
    },
  },
})