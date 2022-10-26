import { useState } from "react";
import {AddCategory, GifGrid} from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
    //setCategories(cat => [...cat, 'HeMan']); //con call-back
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />
        {categories.map((category) => 
            (<GifGrid key={category} category={category}/>)
        )}
    </>
  );
};

export default GifExpertApp;
