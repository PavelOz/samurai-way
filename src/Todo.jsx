import { useState } from "react";
import { Item } from "./Item";

// Initial checkbox states
const checkBoxState = [false, false, true, true];

export const Todo = () => {
    // State hook for managing checkbox states
    const [state, setState] = useState(checkBoxState);
    console.log("1", state);
    // Function to toggle the state of a checkbox at a given index
    const changeCheckboxState = (index) => {
        // Create a new array with the toggled state for the checkbox at the given index
        const newState = state.map((item, i) => i === index ? !item : item);
        
        // Update the component's state with the new array
        setState(newState);
    };
    console.log("2", state);
    return (
        <>
            {state.map((item, index) => 
                <Item key={index} checked={item} onChange={() => changeCheckboxState(index)} />
            )}
        </>
    );
};
