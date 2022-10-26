import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({target}) => {    
    setInputValue(target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    // setCategories(categories => [...categories, inputValue]);
    onNewCategory(newInputValue);
    setInputValue('');
    //setCategories(inputValue);
  }
  return(
    <form onSubmit={onSubmit}>
        <input
        type="text" 
        placeholder="Search gif"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
    />
    </form>     
  )
};
