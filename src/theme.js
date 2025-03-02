import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: '.mode-%s'
    },
    trelloCustom: {
        appBarHeight: '60px',
        boardBarHeight: '60px'
    },
    colorSchemes: {
        dark: {

        },
        light: {

        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '*::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#dcdde1',
                        borderRadius: '10px'
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#bdc3c7'
                    }

                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderWidth: '1px',
                    '&:hover': {
                        borderWidth: '1px'
                    }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: { fontSize: '0.9rem' }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: '0.9rem',

                    '& fieldset': {
                        borderWidth: '1px !important'
                    },
                    '&:hover fieldset': {
                        borderWidth: '2px !important'
                    },
                    '&.Mui-focused fieldset': {
                        borderWidth: '2px !important'
                    }
                }
            }
        }
    }
})

export default theme
