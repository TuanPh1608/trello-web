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
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import PeopleIcon from '@mui/icons-material/People'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import LinkIcon from '@mui/icons-material/Link'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import CardMedia from '@mui/material/CardMedia'

const COL_HEADER_HEIGHT = '40px'
const COL_FOOTER_HEIGHT = '40px'

function BoardContent() {
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
            width: '100%',
            height: (theme) => theme.trelloCustom.boardContentHeight,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
            p: '10px 0'

        }}>
            <Box sx={{
                bgcolor: 'inherit',
                width: '100%',
                height: '100%',
                overflowX: 'auto',
                overflowY: 'hidden',
                display: 'flex',
                '&::webkit-scrollbar-track': { m: 2 }

            }}>
                {/* Column */}
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
                        height: COL_HEADER_HEIGHT,
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
                    <Box sx={{
                        p: '0 5px',
                        m: '0 5px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        maxHeight: (theme) => `calc(
                    ${theme.trelloCustom.boardContentHeight} - 
                    ${COL_HEADER_HEIGHT} - 
                    ${COL_FOOTER_HEIGHT} - 
                    ${theme.spacing(4)})`,
                        '&::-webkit-scrollbar-thumb': { backgroundColor: '#a4b0be' },
                        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }

                    }}>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://letdiv.com/wp-content/uploads/2024/04/khoa-hoc-react.png"
                                title="green iguana"
                            />
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>ReactJS</Typography>
                            </CardContent>
                            <CardActions sx={{ p: '0 4px 8px 4px' }}>
                                <Button size="small" startIcon={<PeopleIcon />}>20</Button>
                                <Button size="small" startIcon={<ModeCommentIcon />}>15</Button>
                                <Button size="small" startIcon={<LinkIcon />}>5</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{
                        height: COL_FOOTER_HEIGHT,
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
                {/* Column */}
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
                        height: COL_HEADER_HEIGHT,
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
                    <Box sx={{
                        p: '0 5px',
                        m: '0 5px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        maxHeight: (theme) => `calc(
                    ${theme.trelloCustom.boardContentHeight} - 
                    ${COL_HEADER_HEIGHT} - 
                    ${COL_FOOTER_HEIGHT} - 
                    ${theme.spacing(4)})`,
                        '&::-webkit-scrollbar-thumb': { backgroundColor: '#a4b0be' },
                        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }

                    }}>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://letdiv.com/wp-content/uploads/2024/04/khoa-hoc-react.png"
                                title="green iguana"
                            />
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>ReactJS</Typography>
                            </CardContent>
                            <CardActions sx={{ p: '0 4px 8px 4px' }}>
                                <Button size="small" startIcon={<PeopleIcon />}>20</Button>
                                <Button size="small" startIcon={<ModeCommentIcon />}>15</Button>
                                <Button size="small" startIcon={<LinkIcon />}>5</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }

                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{
                                p: 1.5,
                                '&:last-child': {
                                    pb: 1.5
                                }
                            }} >
                                <Typography>
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{
                        height: COL_FOOTER_HEIGHT,
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
            </Box>

        </Box >
    )
}

export default BoardContent