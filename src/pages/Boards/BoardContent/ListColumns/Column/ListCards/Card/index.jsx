import { Card as MuiCard } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import PeopleIcon from '@mui/icons-material/People'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import LinkIcon from '@mui/icons-material/Link'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function Card({ temporaryHideMedia }) {
    if (temporaryHideMedia) {
        return (
            <MuiCard sx={{
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
                    <Typography>ReactJS</Typography>
                </CardContent>
                <CardActions sx={{ p: '0 4px 8px 4px' }}>
                    <Button size="small" startIcon={<PeopleIcon />}>20</Button>
                    <Button size="small" startIcon={<ModeCommentIcon />}>15</Button>
                    <Button size="small" startIcon={<LinkIcon />}>5</Button>
                </CardActions>
            </MuiCard>
        )
    }
    return (
        <MuiCard sx={{
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
        </MuiCard>

    )
}

export default Card