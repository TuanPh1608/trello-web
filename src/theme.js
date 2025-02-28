import { createTheme } from '@mui/material/styles'
import { red, blue, grey } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: '.mode-%s',
    },
    trelloCustom: {
        appBarHeight: '60px',
        boardBarHeight: '60px',
    },
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    main: blue[700],
                },
                secondary: {
                    main: grey[500],
                },
                error: {
                    main: red[700],
                },
                background: {
                    default: '#121212',
                    paper: '#1d1d1d',
                },
                text: {
                    primary: '#ffffff',
                    secondary: grey[400],
                    disabled: grey[600],
                },
            },
        },
        light: {
            palette: {
                primary: {
                    main: blue[500],
                },
                secondary: {
                    main: grey[700],
                },
                error: {
                    main: red[500],
                },
                background: {
                    default: '#ffffff',
                    paper: '#f5f5f5',
                },
                text: {
                    primary: '#000000',
                    secondary: grey[800],
                    disabled: grey[400],
                },
            },
        },
    },
})

export default theme
