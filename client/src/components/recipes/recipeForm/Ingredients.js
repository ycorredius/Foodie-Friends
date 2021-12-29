import React from "react";

function Ingredients(props) {

  const [ingredientIndexes, setIngredientIndexes] = React.useState([]);
  const [ingredientCounter, setIngredientCounter] = React.useState(0);

  const removeIngredient = (index) => () => {
    setIngredientIndexes((prevIngredientIndexes) => [
      ...prevIngredientIndexes.filter((item) => item !== index),
    ]);
    setIngredientCounter((prevCounter) => prevCounter - 1);
  };

  const addIngredient = () => {
    setIngredientIndexes((prevIngredientIndexes) => [
      ...prevIngredientIndexes,
      ingredientCounter,
    ]);
    setIngredientCounter((prevIngredientCounter) => prevIngredientCounter + 1);
  };

  const clearIngredient = () => {
    setIngredientIndexes([]);
    setIngredientCounter();
  };
  return (
    <div>
      <div>
        {ingredientIndexes.map((index) => {
          const fieldName = `ingredients[${index}]`;
          return (
            <fieldset
              name={`recipe[${fieldName}]`}
              key={`recipe[${fieldName}]`}
            >
              <div>
                <label>
                  Item
                  <input
                    type="text"
                    name={`recipe[${fieldName}.name]`}
                    ref={props.register}
                    required
                  />
                </label>

                <label>
                  Quantiy
                  <input
                    type="text"
                    name={`recipe[${fieldName}.quantity]`}
                    ref={props.register}
                    required
                  />
                </label>
              </div>
              <div>
                <button type="button" onClick={removeIngredient(index)}>
                  Remove
                </button>
              </div>
            </fieldset>
          );
        })}
        <div>
          <button type="button" onClick={addIngredient}>
            Add Ingredient
          </button>

          <button type="button" onClick={clearIngredient}>
            Clear Ingredients
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
