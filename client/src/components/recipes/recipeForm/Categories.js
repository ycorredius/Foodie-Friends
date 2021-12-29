import React from "react";

function Categories(props) {

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const addCategory = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCategory = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const clearCategories = () => {
    setIndexes([]);
    setCounter(0);
  };

  return (
    <div>
      <div>
        {indexes.map((index) => {
          const fieldName = `categories[${index}]`;
          return (
            <fieldset
              name={`recipe[${fieldName}]`}
              key={`recipe[${fieldName}]`}
            >
              <label>
                Tag
                <input
                  type="text"
                  name={`recipe[${fieldName}.tag]`}
                  ref={props.register}
                  required
                />
              </label>
              <div>
                <button type="button" onClick={removeCategory(index)}>
                  Remove
                </button>
              </div>
            </fieldset>
          );
        })}
        <div>
          <button type="button" onClick={addCategory}>
            Add Category
          </button>

          <button type="button" onClick={clearCategories}>
            Clear Categories
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
