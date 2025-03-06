import Box from '@mui/material/Box'
import Column from './Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Button from '@mui/material/Button'

import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'


function ListColumns({ columns }) {
    /* https://github.com/clauderic/dnd-kit/issues/183#issuecomment-812569512 */
    return (
        <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
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
                {
                    columns?.map(column => {
                        return <Column key={column._id} column={column} />
                    })
                }
                {/* Add more columns */}
                <Box
                    sx={{
                        minWidth: '250px',
                        maxWidth: '250px',
                        mx: 2,
                        borderRadius: '8px',
                        height: 'fit-content',
                        bgcolor: '#ffffff3d'
                    }}
                >
                    <Button
                        startIcon={<NoteAddIcon />}
                        sx={{
                            color: 'white',
                            width: '100%',
                            justifyContent: 'flex-start',
                            pl: 3,
                            py: 1
                        }}
                    >
                        Add new column
                    </Button>
                </Box>
            </Box >
        </SortableContext >
    )
}

export default ListColumns