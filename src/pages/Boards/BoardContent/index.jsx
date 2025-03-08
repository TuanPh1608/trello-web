import Box from '@mui/material/Box'
import ListColumns from './ListColumns'
import { mapOrder } from '~/utils/sorts'
import { useEffect, useState, useCallback, useRef } from 'react'
import { cloneDeep } from 'lodash'

import Column from './ListColumns/Column'
import Card from './ListColumns/Column/ListCards/Card'

import { arrayMove } from '@dnd-kit/sortable'
import {
    DndContext,
    // PointerSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
    DragOverlay,
    defaultDropAnimationSideEffects,
    closestCorners,
    pointerWithin,
    rectIntersection,
    getFirstCollision,
    closestCenter

} from '@dnd-kit/core'

const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
    CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

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
    const [activeDragItemId, setActiveDragItemId] = useState(null)
    const [activeDragItemType, setActiveDragItemType] = useState(null)
    const [activeDragItemData, setActiveDragItemData] = useState(null)
    const [oldColumnDraggingCard, setOldColumnDraggingCard] = useState(null)

    // Điểm va chạm cuối cùng xử lý thuật toán phát hiện va chạm
    const lastOverId = useRef(null)

    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
    }, [board])

    const findColumnByCardId = (cardId) => {
        return orderedColumns.find(column => column?.cards?.map(card => card._id)?.includes(cardId))
    }
    // Cập nhật lại state khi kéo thả thẻ giữa các cột
    const moveCardBetweenColumns = (
        overColumn,
        overCardId,
        activeColumn,
        activeDraggingCardId,
        activeDraggingCardData,
        active,
        over
    ) => {
        setOrderedColumns(preColumns => {
            const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)
            let newCardIndex
            const isBelowOverItem = active.rect.current.translated &&
                active.rect.current.translated.top > over.rect.top + over.rect.height
            const modifier = isBelowOverItem ? 1 : 0
            newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

            const nextColumns = cloneDeep(preColumns)
            const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
            const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

            if (nextActiveColumn) {
                // Xóa card đang kéo khỏi cột hiện tại
                nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
                // Cập nhật lại cardOrderIds
                nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
            }
            if (nextOverColumn) {
                // Kiểm tra xem card đang kéo đã có trong cột đang kéo vào chưa
                nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
                // Cập nhật lại chuẩn dữ liệu khi kéo giữa các cột
                const rebuild_activeDraggingCardData = {
                    ...activeDraggingCardData,
                    columnId: overColumn._id
                }
                // Thêm card vào cột đang kéo vào
                nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, rebuild_activeDraggingCardData)
                // Cập nhật lại cardOrderIds
                nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
            }

            return nextColumns
        })
    }

    const handleDragStart = (event) => {
        // console.log('Drag start:', event)
        setActiveDragItemId(event?.active?.id)
        setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
        setActiveDragItemData(event?.active?.data?.current)
        // Nếu kéo thẻ thì lưu lại cột cũ chứa thẻ đang kéo
        if (event?.active?.data?.current?.columnId) {
            setOldColumnDraggingCard(findColumnByCardId(event?.active?.id))
        }
    }
    const handleDragOver = (event) => {

        // Không làm gì nếu kéo thẻ cột
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) { return }

        // console.log('Drag over:', event)

        const { active, over } = event
        // Nếu không tồn tại active hoặc over thì không làm gì cả
        if (!active || !over) return

        const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
        const { id: overCardId } = over
        // Tìm column chứa thẻ đang kéo và thẻ được kéo vào
        const activeColumn = findColumnByCardId(activeDraggingCardId)
        const overColumn = findColumnByCardId(overCardId)
        if (!activeColumn || !overColumn) return
        if (activeColumn._id !== overColumn._id) {
            moveCardBetweenColumns(overColumn, overCardId, activeColumn, activeDraggingCardId, activeDraggingCardData, active, over)
        }
    }
    const handleDragEnd = (event) => {
        // console.log('Drag end:', event)

        const { active, over } = event
        // Nếu không tồn tại active hoặc over thì không làm gì cả
        if (!active || !over) return
        // Xử lý khi kéo thả card
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
            const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
            const { id: overCardId } = over
            // Tìm column chứa thẻ đang kéo và thẻ được kéo vào
            const activeColumn = findColumnByCardId(activeDraggingCardId)
            const overColumn = findColumnByCardId(overCardId)
            if (!activeColumn || !overColumn) return

            //  Nếu kéo thẻ vào cột khác 
            if (oldColumnDraggingCard._id != overColumn._id) {
                moveCardBetweenColumns(overColumn, overCardId, activeColumn, activeDraggingCardId, activeDraggingCardData, active, over)
            }
            //  Nếu kéo thẻ vào cùng cột
            else {
                const oldCardIndex = oldColumnDraggingCard?.cards?.findIndex(c => c._id === activeDragItemId)
                const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId)

                // Dùng arrayMove cùng logic với kéo thả cột
                const dndOrderedCards = arrayMove(oldColumnDraggingCard?.cards, oldCardIndex, newCardIndex)

                setOrderedColumns(preColumns => {
                    const nextColumns = cloneDeep(preColumns)
                    const targetColumn = nextColumns.find(column => column._id === overColumn._id)

                    targetColumn.cards = dndOrderedCards
                    targetColumn.cardOrderIds = dndOrderedCards.map(card => card._id)

                    return nextColumns
                })
            }
        }
        // Xử lý khi kéo thả cột
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
            // Cho việc kéo vào thả cột
            if (active.id !== over.id) {
                const oldColumnIndex = orderedColumns.findIndex(c => c._id === active.id)
                const newColumnIndex = orderedColumns.findIndex(c => c._id === over.id)
                const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)
                // Update columnOrderIds
                // const dndOrderedColumnIds = dndOrderedColumns.map(c => c._id)

                setOrderedColumns(dndOrderedColumns)
            }
        }
        setActiveDragItemId(null)
        setActiveDragItemType(null)
        setActiveDragItemData(null)
        setOldColumnDraggingCard(null)
    }
    const dropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
            styles: { active: { opacity: '0.5' } }
        })
    }

    const collisionDetectionStrategy = useCallback((args) => {
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
            return closestCorners({ ...args })
        }
        // First, let's see if there are any Intersections with the pointer
        const pointerIntersections = pointerWithin(args)
        // Kiểm tra  xem có sự va chạm với pointer không
        const intersection = !!pointerIntersections?.length
            ? pointerIntersections
            : rectIntersection(args)

        let overId = getFirstCollision(intersection)
        // Nếu có va chạm
        if (overId) {
            const checkColumn = orderedColumns.find(column => column._id === overId)
            if (checkColumn) {
                overId = closestCenter({
                    ...args,
                    droppableContainers: args.droppableContainers.filter(container => {
                        return (container.id !== overId) && (checkColumn?.cardOrderIds?.includes(container.id))
                    })
                })[0]?.id
            }
            lastOverId.current = overId
            return [{ id: overId }]
        }
        return lastOverId.current ? [{ id: lastOverId.current }] : []

    }, [activeDragItemType, orderedColumns])

    return (
        <DndContext
            sensors={sensors}
            // collisionDetection={closestCorners}

            // Custom nâng cao collisionDetection
            collisionDetection={collisionDetectionStrategy}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd} >
            <Box sx={{
                width: '100%',
                height: (theme) => theme.trelloCustom.boardContentHeight,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
                p: '10px 0'

            }}>
                <ListColumns columns={orderedColumns} />
                <DragOverlay dropAnimation={dropAnimation}>
                    {!activeDragItemType && null}
                    {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
                    {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
                </DragOverlay>
            </Box >
        </DndContext>
    )
}

export default BoardContent