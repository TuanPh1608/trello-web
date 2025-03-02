import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'


const CHIP_STYLES = {
    bgcolor: 'transparent',
    color: 'white',
    border: '1px solid white',
    borderRadius: '5px',
    '& .MuiSvgIcon-root': {
        color: 'white'
    },
    '& .hover': {
        bgcolor: 'primary.50'
    }
}

function BoardBar() {
    return (
        <Box sx={{
            width: '100%',
            height: (theme) => theme.trelloCustom.boardBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            paddingX: 2,
            overflowX: 'auto',
            borderBottom: '1px solid white',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <Chip
                    sx={CHIP_STYLES}
                    icon={<DashboardIcon />}
                    label="Dashboard"
                    clickable
                />
                <Chip
                    sx={CHIP_STYLES}
                    icon={<VpnLockIcon />}
                    label="Public/Private Workspace"
                    clickable
                />
                <Chip
                    sx={CHIP_STYLES}
                    icon={<AddToDriveIcon />}
                    label="Add To Google Drive"
                    clickable
                />
                <Chip
                    sx={CHIP_STYLES}
                    icon={<BoltIcon />}
                    label="Automation"
                    clickable
                />
                <Chip
                    sx={CHIP_STYLES}
                    icon={<FilterListIcon />}
                    label="Filter"
                    clickable
                />
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <Button
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                            borderColor: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)'
                        }
                    }}
                    variant="outlined"
                    startIcon={<PersonAddIcon />}
                >
                    Invite
                </Button>
                <AvatarGroup
                    max={4}
                    sx={{
                        gap: '8px',
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            fontSize: '0.8rem',
                            color: 'white',
                            cursor: 'pointer',
                            '&:first-of-type': {
                                bgcolor: '#a4b0be'
                            }
                        }
                    }}
                >
                    <Tooltip title="Pateros">
                        <Avatar alt="Pateros" src="https://avatars.githubusercontent.com/u/118117794?v=4" />
                    </Tooltip>
                    <Tooltip title="Pateros">
                        <Avatar alt="Pateros" src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/452434455_2058348647895493_8507649098585520520_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEz3wtjQD3P-nIUw-ZfSmHvO1OQ7hxeLsU7U5DuHF4uxcignaWm1vFz275SIk9HDQT5j7RM2fZXhNtqity4nmzv&_nc_ohc=3I6gVeUr7VYQ7kNvgEbUaXE&_nc_oc=AdiPs-2hnqpOBv66taptl-XXr804tAwemeVyYJex5tLdvDqSgATwAj_-8ZDOK1Vlo8g&_nc_zt=23&_nc_ht=scontent.fhan3-2.fna&_nc_gid=AE8a0pU5ojTHmi_-M9HixuC&oh=00_AYDCvEZUlcHZAutEgdA72nvgeXjG6hLx_2u97SKLmvLf7g&oe=67C9BF16" />
                    </Tooltip>
                    <Tooltip title="Pateros">
                        <Avatar alt="Pateros" src="https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-1.jpg" />
                    </Tooltip>
                    <Tooltip title="Pateros">
                        <Avatar alt="Pateros" src="https://avatars.githubusercontent.com/u/118117794?v=4" />
                    </Tooltip>
                    <Tooltip title="Pateros">
                        <Avatar alt="Pateros" src="https://avatars.githubusercontent.com/u/118117794?v=4" />
                    </Tooltip>

                </AvatarGroup>
            </Box>
        </Box>
    )
}

export default BoardBar