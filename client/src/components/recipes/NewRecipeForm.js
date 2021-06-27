import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import END_POINT from "../../actions/recipe/endpoint";
import { useHistory } from "react-router-dom";

function NewRecipeForm(props) {
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

  const addInstruction = () => {
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
    debugger
    axios
      .post(`${END_POINT}/recipes`,e, {
        withCredentials: true
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
    <div class="container w-full max-w-xs object-center">
      <div class="flex flex-col justify-center items-center gap-4">
        <form
          class="bg-gray-300 shadow-md rounded p-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset name="recipe" key="recipe">
          <div class="grid grid-cols-1  ">
            <fieldset name={recipeName}>
              <label class="block text-gray-700 font-bold mb-2 ">Name</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <fieldset name={`recipe[${fieldName}]`} key={`recipe[${fieldName}]`}>
                  <label class="block text-gray-700 font-bold mb-2 ">
                    Tag
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name={`recipe[${fieldName}.tag]`}
                      ref={register}
                      required
                    />
                  </label>
                  <div class='flex items-center justify-center'>
                    <button
                      type="button"
                      onClick={removeCategory(index)}
                      class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Remove
                    </button>
                  </div>
                </fieldset>
              );
            })}
            <div class="grid grid-cols-2 items-center justify-center">
              <button
                type="button"
                onClick={addCategory}
                class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
              >
                Add Category
              </button>

              <button
                type="button"
                onClick={clearCategories}
                class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
              >
                Clear Categories
              </button>
            </div>
          </div>
          <div>
            {ingredientIndexes.map((index) => {
              const fieldName = `ingredients[${index}]`;
              return (
                <fieldset name={`recipe[${fieldName}]`} key={`recipe[${fieldName}]`}>
                  <div class="grid grid-cols-2 gap-2">
                    <label class="block text-gray-700 font-bold mb-2 ">
                      Item
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name={`recipe[${fieldName}.name]`}
                        ref={register}
                        required
                      />
                    </label>

                    <label class="block text-gray-700 font-bold mb-2 ">
                      Quantiy
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name={`recipe[${fieldName}.quantity]`}
                        ref={register}
                        required
                      />
                    </label>
                  </div>
                  <div class="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={removeIngredient(index)}
                      class="bg-blue-dark hover:bg-gray-700 text-white font-bold px-4 py-2 m-2 rounded focus:outline-none focus:shadow-outline items-center justify-center"
                    >
                      Remove
                    </button>
                  </div>
                </fieldset>
              );
            })}
            <div class="grid grid-cols-2 items-center justify-center">
              <button
                type="button"
                onClick={addIngredient}
                class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
              >
                Add Ingredient
              </button>

              <button
                type="button"
                onClick={clearIngredient}
                class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
              >
                Clear Ingredients
              </button>
            </div>
          </div>
          <div>
            {instructionIndexes.map((index) => {
              const fieldName = `instructions[${index}]`;
              return (
                <fieldset name={`recipe[${fieldName}]`} key={`recipe[${fieldName}]`}>
                  <label class="block text-gray-700 font-bold mb-2 ">
                    Step 
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name={`recipe[${fieldName}.content]`}
                      ref={register}
                      required
                    />
                  </label>
                <div class="flex items-center justify-center">

                  <button
                    type="button"
                    onClick={removeInstruction(index)}
                    class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    
                    Remove
                  </button>
                  </div>
                </fieldset>
              );
            })}
            <div class="grid grid-cols-2 items-center justify-center">
              <button
                type="button"
                onClick={addInstruction}
                class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
              >
                Add Instruction
              </button>

              <button
                type="button"
                onClick={clearInstructions}
                class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
              >
                Clear Instructions
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create
            </button>
          </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default NewRecipeForm;
