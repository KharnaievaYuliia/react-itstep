const addTask = (boards, setBoards, boardId, newTask) => {
    let newBoards = [...boards];
    let currentBoard = newBoards.find(board => board.id === boardId);
    let newBoardId = 0;
    if (currentBoard.tasks.length) {
        newBoardId = Math.max.apply(null, newBoards.map((board) => board.id));
    }
    currentBoard.tasks.push({ id: newBoardId + 1, text: newTask })
}
export default addTask;