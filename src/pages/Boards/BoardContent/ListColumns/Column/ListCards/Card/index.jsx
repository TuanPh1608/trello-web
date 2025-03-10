import { Card as MuiCard } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import PeopleIcon from '@mui/icons-material/People'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import LinkIcon from '@mui/icons-material/Link'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Card({ card }) {

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: card._id,
        data: { ...card }
    })
    /* Lỗi khi kéo thả cột bị stretch kì =>
     https://github.com/clauderic/dnd-kit/issues/117
    */

    const dndKitCardStyles = {
        // touchAction: 'none',
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : undefined,
        border: isDragging ? '1px solid #3498db' : undefined
    }

    const shouldShowCardActions = !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
    return (
        <MuiCard
            ref={setNodeRef}
            style={dndKitCardStyles}
            {...attributes}
            {...listeners}
            sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                overflow: 'unset',
                display: card?.FE_PlaceholderCard ? 'none' : 'block'
                // overflow: card?.FE_PlaceholderCard ? 'hidden' : 'unset',
                // height: card?.FE_PlaceholderCard ? '0' : 'unset',
            }}
        >
            {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
            <CardContent sx={{
                p: 1.5,
                '&:last-child': {
                    pb: 1.5
                }

            }} >
                <Typography>{card?.title}</Typography>
            </CardContent>
            {shouldShowCardActions &&
                <CardActions sx={{ p: '0 4px 8px 4px' }}>
                    {!!card?.memberIds?.length &&
                        <Button size="small" startIcon={<PeopleIcon />}>{card?.memberIds?.length}</Button>
                    }
                    {!!card?.comments?.length &&
                        <Button size="small" startIcon={<ModeCommentIcon />}>{card?.comments?.length}</Button>
                    }
                    {!!card?.attachments?.length &&
                        <Button size="small" startIcon={<LinkIcon />}>{card?.attachments?.length}</Button>
                    }
                </CardActions>
            }
        </MuiCard>

    )
}

export default Card