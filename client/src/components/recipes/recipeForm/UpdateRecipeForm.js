import React from "react";
import { useForm} from "react-hook-form";
import axios from "axios";
import END_POINT from "../../../actions/recipe/endpoint";


//TODO: Refactor to create a smaller file and faster experience.  
function UpdateRecipeForm(props) {
  const [indexes, setIndexes] = React.useState(
    props.recipe.data.attributes.categories
  );
  const [counter, setCounter] = React.useState(
    props.recipe.data.attributes.categories.length
  );

  const { register, handleSubmit} = useForm();

  const [ingredientIndexes, setIngredientIndexes] = React.useState(
    props.recipe.data.attributes.ingredients
  );
  const [ingredientCounter, setIngredientCounter] = React.useState(
    props.recipe.data.attributes.ingredients.length
  );
  const [instructionIndexes, setInstructionIndexes] = React.useState(
    props.recipe.data.attributes.instructions
  );
  const [instructionCounter, setInstructionCounter] = React.useState(
    props.recipe.data.attributes.instructions.length
  );
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
   const removeCategory = (id) => () => {
     setIndexes((prevIndexes) => [
       ...prevIndexes.filter((item) => item.id !== id),
     ]);
     axios.delete(`${END_POINT}/categories/${id}`,{withCredentials:true})
     .then(res => res.json)
   };
   const removeInstruction = (id) => () => {
     setInstructionIndexes((prevInstructionIndexes) => [
       ...prevInstructionIndexes.filter((item) => item.id !== id),
     ]);
     setInstructionCounter((prevCounter) => prevCounter - 1);
     axios.delete(`${END_POINT}/instructions/${id}`)
     .then((res) => res.json);
   };
   const removeIngredient = (id) => () => {
     setIngredientIndexes((prevIngredientIndexes) => [
       ...prevIngredientIndexes.filter((item) => item.id !== id),
     ]);
     setIngredientCounter((prevCounter) => prevCounter - 1);
     axios.delete(`${END_POINT}/ingredients/${id}`).then((res) => res.json);
   };

  const onSubmit = (e) => {
    axios
      .patch(`${END_POINT}/recipes/${props.recipe.data.attributes.id}`,e,{withCredentials:true})
      .then(res => res.json)
      .then(window.location.reload())
  }
  
  return (
    <div class="container w-full max-w-xs object-center mt-32 ">
      <div class="flex flex-col">
        <div class="h-full xl:block gap-4 place-self-center">
          <img
            src={props.recipe.data.attributes.avatar}
            alt="food"
            class="avatar "
          />`
        </div>
        <div class="">
          <div class="">
            <div class="">
              <form
                class="max-w-s mb-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="hidden"
                  name={`recipe[id]`}
                  ref={register}
                  value={props.recipe.data.attributes.id}
                  required
                />
                <div class="grid grid-cols-1  ">
                  <label
                    class="block text-gray-700 font-bold mb-2 "
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name={`recipe[name]`}
                    ref={register}
                    defaultValue={props.recipe.data.attributes.name}
                    required
                  />
                </div>
                <h4 class="block text-gray-700 font-bold mb-2 place-self-center ">Categories</h4>
                <div className="flex flex-cols">
                {indexes.map((category, index) => {
                  const fieldName = `categories[${index}]`;
                  return (
                    <fieldset name={fieldName} key={fieldName}>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="hidden"
                        name={`recipe[${fieldName}.id]`}
                        ref={register}
                        defaultValue={category.id}
                        required
                      />
                      <input type="hidden" defaultValue={category}></input>
                      <label class="block text-gray-700 text-sm font-bold mb-2 ">
                        Tag
                        <input
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          ref={register}
                          name={`recipe[${fieldName}.tag]`}
                          defaultValue={category.tag}
                          required
                        />
                      </label>
                      <div class="flex items-center justify-center">
                        <button
                          type="button"
                          onClick={removeCategory(category.id)}
                          class="font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                        >
                          Remove
                        </button>
                      </div>
                    </fieldset>
                  );
                })}
                </div>
                  <div class="flex items-center justify-center">

                <button
                  class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={addCategory}
                >
                  Add Category
                </button>
                </div>

                <h4 class="block text-gray-700 font-bold mb-2 ">Ingredients</h4>
                {ingredientIndexes.map((ingredient, index) => {
                  const fieldName = `ingredients[${index}]`;
                  return (
                    <fieldset name={fieldName} key={fieldName}>
                      <div class="grid grid-cols-3 gap-2">
                      <input
                        type="hidden"
                        name={`recipe[${fieldName}.id]`}
                        ref={register}
                        defaultValue={ingredient.id}
                        required
                      />
                      <label class="block text-gray-700 text-sm font-bold mb-2 ">
                        Name
                        <input
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name={`recipe[${fieldName}.name]`}
                          ref={register}
                          defaultValue={ingredient.name}
                          required
                        />
                      </label>

                      <label class="block text-gray-700 text-sm font-bold mb-2 ">
                        Quantiy
                        <input
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name={`recipe[${fieldName}.quantity]`}
                          ref={register}
                          defaultValue={ingredient.quantity}
                          required
                        />
                      </label>
                      <div class="flex items-center justify-center">
                        <button
                          type="button"
                          onClick={removeIngredient(ingredient.id)}
                          class="bg-blue-dark hover:bg-gray-700 text-white font-bold px-4 py-2 m-2 rounded focus:outline-none focus:shadow-outline items-center justify-center"
                        >
                          X
                        </button>
                      </div>
                      </div>
                    </fieldset>
                  );
                })}
                                <div class="flex items-center justify-center">

                <button
                  class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={addIngredient}
                >
                  Add Ingredient
                </button>
                </div>
                <h4 class="block text-gray-700 font-bold mb-2 ">
                  Instructions
                </h4>

                {instructionIndexes.map((instruction, index) => {
                  const fieldName = `instructions[${index}]`;
                  return (
                    <fieldset name={fieldName} key={fieldName}>
                      <input
                        type="hidden"
                        name={`recipe[${fieldName}.id]`}
                        ref={register}
                        defaultValue={instruction.id}
                        required
                      />
                      <label class="block text-gray-700 text-sm font-bold mb-2 ">
                        Step {index + 1}:
                        <input
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name={`recipe[${fieldName}.content]`}
                          ref={register}
                          defaultValue={instruction.content}
                          required
                        />
                      </label>

                      <button
                        type="button"
                        onClick={removeInstruction(instruction.id)}
                        class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        X
                      </button>
                    </fieldset>
                  );
                })}
                                <div class="flex items-center justify-center">

                <button
                  class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={addInstruction}
                >
                  Add Instruction
                </button>
                </div>
                                <div class="flex items-center justify-center pt-4">

                <button
                  class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  type="submit"
                >
                  Update
                </button>
                <button
                  class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onclick
                >
                  Delete
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateRecipeForm;
