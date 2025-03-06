import Box from '@mui/material/Box'
import Card from './Card'

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'


function ListCards({ cards }) {
    return (
        <SortableContext items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
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
                    ${theme.trelloCustom.colHeaderHeight} - 
                    ${theme.trelloCustom.colFooterHeight} - 
                    ${theme.spacing(4)})`,
                '&::-webkit-scrollbar-thumb': { backgroundColor: '#a4b0be' },
                '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }

            }}>
                {/* Cards */}
                {cards?.map(card => {
                    return <Card key={card._id} card={card} />
                })}
            </Box>
        </SortableContext>
    )
}

export default ListCards