import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1a73e8' },
    secondary: { main: '#6d28d9' },
    background: { default: '#f6f8fb', paper: '#ffffff' }
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h5: { fontWeight: 700 }
  }
})

export default theme