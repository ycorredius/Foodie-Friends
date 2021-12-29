import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import END_POINT from "../../actions/recipe/endpoint";
import { Redirect, useHistory } from "react-router-dom";

function NewRecipeForm(props) {
  if (!props.userId) {
    <Redirect to={"/login"} />;
  }
  const history = useHistory();

  const recipeName = React.useState("");

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const { register, handleSubmit } = useForm();

  const [ingredientIndexes, setIngredientIndexes] = React.useState([]);
  const [ingredientCounter, setIngredientCounter] = React.useState(0);

  const [instructionIndexes, setInstructionIndexes] = React.useState([]);
  const [instructionCounter, setInstructionCounter] = React.useState(0);

  const addCategory = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const addInstruction = (props) => {
    setInstructionIndexes((prevInstructionIndexes) => [
      ...prevInstructionIndexes,
      instructionCounter,
    ]);
    setInstructionCounter((prevCounter) => prevCounter + 1);
  };

  const addIngredient = () => {
    setIngredientIndexes((prevIngredientIndexes) => [
      ...prevIngredientIndexes,
      ingredientCounter,
    ]);
    setIngredientCounter((prevIngredientCounter) => prevIngredientCounter + 1);
  };

  const onSubmit = (e) => {
    axios
      .post(`${END_POINT}/recipes`, e, {
        withCredentials: true,
      })
      .then((response) => response.json)
      .then(history.push("/recipes"));
  };

  const removeCategory = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const removeInstruction = (index) => () => {
    setInstructionIndexes((prevInstructionIndexes) => [
      ...prevInstructionIndexes.filter((item) => item !== index),
    ]);
    setInstructionCounter((prevCounter) => prevCounter - 1);
  };

  const removeIngredient = (index) => () => {
    setIngredientIndexes((prevIngredientIndexes) => [
      ...prevIngredientIndexes.filter((item) => item !== index),
    ]);
    setIngredientCounter((prevCounter) => prevCounter - 1);
  };

  const clearCategories = () => {
    setIndexes([]);
    setCounter(0);
  };

  const clearInstructions = () => {
    setInstructionIndexes([]);
    setInstructionCounter(0);
  };

  const clearIngredient = () => {
    setIngredientIndexes([]);
    setIngredientCounter();
  };

  return (
    <div >
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset name="recipe" key="recipe">
            <div >
              <fieldset name={recipeName}>
                <label>Name</label>
                <input
                  type="text"
                  ref={register}
                  name={`recipe[name]`}
                  placeholder="e.g. Spaghetti"
                />
              </fieldset>
            </div>
            <div>
              {indexes.map((index) => {
                const fieldName = `categories[${index}]`;
                return (
                  <fieldset
                    name={`recipe[${fieldName}]`}
                    key={`recipe[${fieldName}]`}
                  >
                    <label >
                      Tag
                      <input
                        type="text"
                        name={`recipe[${fieldName}.tag]`}
                        ref={register}
                        required
                      />
                    </label>
                    <div>
                      <button
                        type="button"
                        onClick={removeCategory(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </fieldset>
                );
              })}
              <div >
                <button
                  type="button"
                  onClick={addCategory}
                >
                  Add Category
                </button>

                <button
                  type="button"
                  onClick={clearCategories}
                >
                  Clear Categories
                </button>
              </div>
            </div>
            <div>
              {ingredientIndexes.map((index) => {
                const fieldName = `ingredients[${index}]`;
                return (
                  <fieldset
                    name={`recipe[${fieldName}]`}
                    key={`recipe[${fieldName}]`}
                  >
                    <div >
                      <label >
                        Item
                        <input
                          type="text"
                          name={`recipe[${fieldName}.name]`}
                          ref={register}
                          required
                        />
                      </label>

                      <label >
                        Quantiy
                        <input
                          type="text"
                          name={`recipe[${fieldName}.quantity]`}
                          ref={register}
                          required
                        />
                      </label>
                    </div>
                    <div >
                      <button
                        type="button"
                        onClick={removeIngredient(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </fieldset>
                );
              })}
              <div >
                <button
                  type="button"
                  onClick={addIngredient}
                >
                  Add Ingredient
                </button>

                <button
                  type="button"
                  onClick={clearIngredient}
                >
                  Clear Ingredients
                </button>
              </div>
            </div>
            <div>
              {instructionIndexes.map((index) => {
                const fieldName = `instructions[${index}]`;
                return (
                  <fieldset
                    name={`recipe[${fieldName}]`}
                    key={`recipe[${fieldName}]`}
                  >
                    <label >
                      Step
                      <input
                        type="text"
                        name={`recipe[${fieldName}.content]`}
                        ref={register}
                        required
                      />
                    </label>
                    <div >
                      <button
                        type="button"
                        onClick={removeInstruction(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </fieldset>
                );
              })}
              <div>
                <button
                  type="button"
                  onClick={addInstruction}
                >
                  Add Instruction
                </button>

                <button
                  type="button"
                  onClick={clearInstructions}
                >
                  Clear Instructions
                </button>
              </div>
            </div>
            <div >
              <button
                type="submit"
              >
                Create
              </button>
            </div>
          </fieldset>
        </form>
      </div>
  );
}

export default NewRecipeForm;
