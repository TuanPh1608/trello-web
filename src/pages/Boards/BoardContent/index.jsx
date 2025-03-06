import Box from '@mui/material/Box'
import ListColumns from './ListColumns'
import { mapOrder } from '~/utils/sorts'
import { useEffect, useState } from 'react'

import { arrayMove } from '@dnd-kit/sortable'
import {
    DndContext,
    // PointerSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core'
function BoardContent({ board }) {
    // const pointerSensor = useSensor(PointerSensor, {
    //     activationConstraint: {
    //         distance: 10
    //     }
    // })
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 10
        }
    })
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    })
    const sensors = useSensors(
        mouseSensor,
        touchSensor
    )

    const [orderedColumns, setOrderedColumns] = useState([])

    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
    }, [board])
    const handleDragEnd = (event) => {
        const { active, over } = event
        // Cho việc kéo thả cột lung tung => không làm gì cả
        if (!over) return

        // Cho việc kéo vào thả cột
        if (active.id !== over.id) {
            const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
            const newIndex = orderedColumns.findIndex(c => c._id === over.id)
            const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
            // Update columnOrderIds
            // const dndOrderedColumnIds = dndOrderedColumns.map(c => c._id)

            setOrderedColumns(dndOrderedColumns)

        }

    }
    return (
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
            <Box sx={{
                width: '100%',
                height: (theme) => theme.trelloCustom.boardContentHeight,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
                p: '10px 0'

            }}>
                <ListColumns columns={orderedColumns} />
            </Box >
        </DndContext>
    )
}

export default BoardContent