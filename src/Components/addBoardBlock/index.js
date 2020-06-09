import React from "react";
import addBoard from "../../utils/addBoard.js";



const AddBoardBlock = ({ boards, setBoards }) => {
    const [inputValue, setInputValue] = React.useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleClick = (e) => {
        setInputValue("");
        addBoard(boards, setBoards, inputValue);
    }
    return (
        <>
            <input value={inputValue} type="text" onChange={handleChange} />
            <button onClick={handleClick}>Add block</button>
        </>
    )

}

export default AddBoardBlock;