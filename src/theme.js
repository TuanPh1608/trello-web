import { createTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '60px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COL_HEADER_HEIGHT = '40px'
const COL_FOOTER_HEIGHT = '40px'

// Create a theme instance.
const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: '.mode-%s'
    },
    trelloCustom: {
        appBarHeight: APP_BAR_HEIGHT,
        boardBarHeight: BOARD_BAR_HEIGHT,
        boardContentHeight: BOARD_CONTENT_HEIGHT,
        colHeaderHeight: COL_HEADER_HEIGHT,
        colFooterHeight: COL_FOOTER_HEIGHT
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
                root: {
                    '&.MuiTypography-body1': {
                        fontSize: '0.9rem'
                    }
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '0.9rem'
                }
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
