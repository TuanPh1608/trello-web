import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import AppIcon from '@mui/icons-material/Apps'
import TrelloIcon from '~/assets/trello.svg'
import Typography from '@mui/material/Typography'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profile from './Menu/Profile'

function AppBar() {
    return (
        <Box px={2} sx={{
            width: '100%',
            height: (theme) => theme.trelloCustom.appBarHeight,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'background.paper',
            color: 'text.primary',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
            }}>
                <AppIcon sx={{ color: 'primary.main', }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <img src={TrelloIcon} alt='Trello' />
                    <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
                        Trello</Typography>
                </Box>
                <Workspaces />
                <Recent />
                <Starred />
                <Templates />
                <Button variant="outlined">Create</Button>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
            }}>
                <TextField id="outlined-search" label="Search..." type="search" size='small' />
                <ModeSelect />

                <Tooltip title="Notifications">
                    <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
                        <IconButton>
                            <NotificationsNoneIcon />
                        </IconButton>
                    </Badge>
                </Tooltip>

                <Tooltip title="Help">
                    <IconButton>
                        <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
                    </IconButton>
                </Tooltip>

                <Profile />
            </Box>

        </Box>
    )
}

export default AppBar