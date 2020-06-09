const addBoard = (boards, setBoards, inputValue) => {
    let newBoards = [...boards];
    let newBoardId = 0;
    if (boards.length) {
        newBoardId = Math.max.apply(null, boards.map((board) => board.id));
    }
    newBoards.push({ id: newBoardId + 1, title: inputValue, tasks: [] });
    setBoards(newBoards);
};
export default addBoard;