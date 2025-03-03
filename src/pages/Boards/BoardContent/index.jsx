import Box from '@mui/material/Box'
import ListColumns from './ListColumns'
import { mapOrder } from '~/utils/sorts'

function BoardContent({ board }) {
    const sortedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    return (
        <Box sx={{
            width: '100%',
            height: (theme) => theme.trelloCustom.boardContentHeight,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
            p: '10px 0'

        }}>
            <ListColumns columns={sortedColumns} />
        </Box >
    )
}

export default BoardContent