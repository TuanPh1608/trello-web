import Box from '@mui/material/Box'
function AppBar() {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            width: '100%',
            height: (theme) => theme.trelloCustom.appBarHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            Trello
        </Box>
    )
}

export default AppBar