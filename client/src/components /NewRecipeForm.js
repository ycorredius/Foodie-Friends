import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

function NewRecipeForm() {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit } = useForm();

  const addCategory = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const removeCategory = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const clearCategories = () => {
    setIndexes([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name: </label>
        <input type="text" name="name" placeholder="e.g. Spaghetti" />
      </div>
      {indexes.map((index) => {
        const fieldName = `categories[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <label>
              First Name {index}:
              <input
                type="text"
                name={`${fieldName}.tag`}
                ref={register}
              />
            </label>

            <button type="button" onClick={removeCategory(index)}>
              Remove
            </button>
          </fieldset>
        );
      })}

      <button type="button" onClick={addCategory}>
        Add Category
      </button>
      <button type="button" onClick={clearCategories}>
        Clear Categories
      </button>
      <input type="submit" />
    </form>
  );
}

export default NewRecipeForm;
