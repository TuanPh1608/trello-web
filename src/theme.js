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

        },
        light: {

        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '*::-webkit-scrollbar': {
                        width: '12px',
                        height: '12px',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#bdc3c7',
                        borderRadius: '10px',
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#3498db',
                    },

                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: '0.9rem',

                }),
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: '0.9rem',
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.light,
                    },
                    '&:hover': {
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main,
                        },
                    },
                }),
            },
        },
    },
})

export default theme
