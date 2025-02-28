
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: '.mode-%s',
    },
    trelloCustom: {
        appBarHeight: '52px',
        boardBarHeight: '60px',

    },
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    main: '#90caf9',
                },
                secondary: {
                    main: '#f48fb1',
                },
                error: red,
                background: {
                    default: '#303030',
                    paper: '#424242',
                },
                text: {
                    primary: 'rgba(255, 255, 255, 0.87)',
                    secondary: 'rgba(255, 255, 255, 0.7)',
                    disabled: 'rgba(255, 255, 255, 0.5)',
                }
            },
        },
        light: {
            palette: {
                primary: {
                    main: '#1976d2',
                },
                secondary: {
                    main: '#dc004e',
                },
                error: red,
                background: {
                    default: '#fafafa',
                    paper: '#fff',
                },
            },
        }
    },
})

export default theme
