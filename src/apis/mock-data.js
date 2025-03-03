/**
 * YouTube: TrungQuanDev - Một Lập Trình Viên
 * Created by trungquandev.com's author on Jun 28, 2023
 */
export const mockData = {
    board: {
        _id: 'board-id-01',
        title: 'Pateros React Learning Board',
        description: 'Pro MERN stack Course',
        type: 'public', // 'private'
        ownerIds: [], // Những users là Admin của board
        memberIds: [], // Những users là member bình thường của board
        columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03', 'column-id-04'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
        columns: [
            {
                _id: 'column-id-01',
                boardId: 'board-id-01',
                title: 'Backlog',
                cardOrderIds: ['card-id-01', 'card-id-02', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-06', 'card-id-07'],
                cards: [
                    {
                        _id: 'card-id-01',
                        boardId: 'board-id-01',
                        columnId: 'column-id-01',
                        title: 'Setup Project',
                        description: 'Initialize the project repository and setup initial configurations',
                        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFph9Ejbh-V90j4HnELf4Of7XWwYawFzTI-g&s',
                        memberIds: ['user-id-01'],
                        comments: ['Initial setup complete', 'Reviewed by team lead'],
                        attachments: ['setup-guide.pdf', 'project-structure.png']
                    },
                    { _id: 'card-id-02', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Define Requirements', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { _id: 'card-id-03', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Create Wireframes', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { _id: 'card-id-04', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Setup CI/CD', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { _id: 'card-id-05', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Research Libraries', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { _id: 'card-id-06', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Design Database', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { _id: 'card-id-07', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Prepare Documentation', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
                ]
            },
            {
                _id: 'column-id-02',
                boardId: 'board-id-01',
                title: 'In Progress',
                cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
                cards: [
                    { _id: 'card-id-08', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Develop Feature A', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { _id: 'card-id-09', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Fix Bug B', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { _id: 'card-id-10', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Write Unit Tests', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
                ]
            },
            {
                _id: 'column-id-03',
                boardId: 'board-id-01',
                title: 'Completed',
                cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13'],
                cards: [
                    { _id: 'card-id-11', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Deploy to Production', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { _id: 'card-id-12', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Code Review', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { _id: 'card-id-13', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Documentation', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
                ]
            },
            {
                _id: 'column-id-04',
                boardId: 'board-id-01',
                title: 'Review',
                cardOrderIds: ['card-id-14', 'card-id-15'],
                cards: [
                    { _id: 'card-id-14', boardId: 'board-id-01', columnId: 'column-id-04', title: 'Client Feedback', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { _id: 'card-id-15', boardId: 'board-id-01', columnId: 'column-id-04', title: 'Team Retrospective', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
                ]
            }
        ]
    }
}