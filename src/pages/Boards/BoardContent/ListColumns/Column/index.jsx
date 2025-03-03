import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'

import Button from '@mui/material/Button'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'

import ListCards from './ListCards'

function Column() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <Box sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#dfe4ea'),
            ml: 2,
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(4)})`
        }}>
            <Box sx={{
                height: (theme) => theme.trelloCustom.colHeaderHeight,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography variant='h6' sx={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>Column Title</Typography>
                <Box>
                    <Tooltip title="More options">
                        <ExpandMoreIcon sx={{ color: 'text.primary', cursor: 'pointer' }}
                            id="basic-button-column-title"
                            aria-controls={open ? 'basic-column-dropdown"' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                        </ExpandMoreIcon>
                    </Tooltip>

                    <Menu
                        id="basic-column-dropdown"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button-column-title"'
                        }}
                    >
                        {/* Add new card */}
                        <MenuItem>
                            <ListItemIcon>
                                <AddCardIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Add new card</ListItemText>
                        </MenuItem>

                        <MenuItem>
                            <ListItemIcon>
                                <ContentCut fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Cut</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCopy fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Copy</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentPaste fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Paste</ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <Cloud fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Delete this column</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Cloud fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Archive this column</ListItemText>
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
            {/* List card */}
            <ListCards />

            {/* Column footer */}
            <Box sx={{
                height: (theme) => theme.trelloCustom.colFooterHeight,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Button startIcon={<AddCardIcon />}>Add new card</Button>
                <Tooltip title="Drag to move">
                    <DragHandleIcon sx={{
                        cursor: 'pointer'
                    }} />
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Column