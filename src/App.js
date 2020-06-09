import React from 'react';
import AddBoardBlock from "./Components/addBoardBlock";
import Board from "./Components/boards/boards.js"
const App = () => {
  const [boards, setBoards] = React.useState([]);

  return (
    <div>
      {boards.length > 0 && boards.map((board) => {
        return (
          <Board board={board} key={board.id} boardsArray={boards} setBoards={setBoards}/>
        )
      })}
      <AddBoardBlock boards={boards} setBoards={setBoards} />

    </div>
  );
}
export default App;
