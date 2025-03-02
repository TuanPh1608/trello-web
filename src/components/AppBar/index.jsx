import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import AppIcon from '@mui/icons-material/Apps'
import Typography from '@mui/material/Typography'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menu/Profile'
import TrelloIcon from '~/assets/trello.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import SearchIcon from '@mui/icons-material/Search'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'


function AppBar() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <Box px={2} sx={{
            width: '100%',
            height: (theme) => theme.trelloCustom.appBarHeight,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
            color: 'text.primary',
            gap: 2,
            overflowX: 'auto'

        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <AppIcon sx={{ color: 'white' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox sx={{ color: 'white' }} />
                    <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
                        Trello</Typography>
                </Box>
                <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    gap: 2
                }}>
                    <Workspaces />
                    <Recent />
                    <Starred />
                    <Templates />
                    <Button
                        variant="outlined"
                        startIcon={<LibraryAddIcon />}
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                            '&:hover': {
                                borderColor: 'white',
                                bgcolor: 'rgba(255,255,255,0.1)'
                            }
                        }}
                    >
                        Create
                    </Button>
                </Box>

            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <TextField
                    id="outlined-search"
                    label="Search..."
                    type="text"
                    size='small'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" >
                                <SearchIcon sx={{ color: 'white' }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <CloseIcon
                                    fontSize='small'
                                    sx={{
                                        color: searchValue ? 'white' : 'transparent',
                                        cursor: 'pointer'
                                    }
                                    }

                                    onClick={() => setSearchValue('')}
                                />
                            </InputAdornment>
                        )
                    }}
                    sx={{
                        minWidth: '120px',
                        maxWidth: '180px',
                        '& label': {
                            color: 'white'
                        },
                        '& input': {
                            color: 'white'
                        },
                        '& label.Mui-focused': {
                            color: 'white'
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white'
                            },
                            '&:hover fieldset': {
                                borderColor: 'white'
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white'
                            }
                        }
                    }}
                />
                <ModeSelect />

                <Tooltip title="Notifications">
                    <Badge color="error" variant="dot" sx={{ cursor: 'pointer' }}>
                        <NotificationsNoneIcon sx={{
                            color: 'white'
                        }} />
                    </Badge>
                </Tooltip>

                <Tooltip title="Help">
                    <HelpOutlineIcon sx={{
                        cursor: 'pointer',
                        color: 'white'
                    }} />
                </Tooltip>

                <Profile />
            </Box>

        </Box >
    )
}

export default AppBar