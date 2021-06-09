import React from "react";
import { useForm} from "react-hook-form";
import axios from "axios";
import END_POINT from "../../actions/recipe/endpoint";


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

  const onSubmit = (e) => {
    axios
      .patch(`${END_POINT}/recipes/${props.recipe.data.attributes.id}`,e,{withCredentials:true})
      .then(res => res.json)
      .then(window.location.reload())
  }
  
  return (
    <div class="container w-full max-w-xs object-center mt-32 mb-64 pb-64">
      <div class="flex flex-col justify-center items-center">
        <img src={props.recipe.data.attributes.image_url} alt="food" />
        <div class="flex flex-col item-center">
          <form
            class="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="hidden"
              name="id"
              ref={register}
              value={props.recipe.data.attributes.id}
            />
            <div>
              <label class="block text-gray-700 font-bold mb-2 " htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                ref={register}
                defaultValue={props.recipe.data.attributes.name}
              />
            </div>
            <h4 class="block text-gray-700 font-bold mb-2 ">Categories</h4>
            {indexes.map((category, index) => {
              const fieldName = `categories[${index}]`;
              return (
                <fieldset name={fieldName} key={fieldName}>
                  <input
                    type="hidden"
                    name={`${fieldName}.id`}
                    ref={register}
                    defaultValue={category.id}
                  />
                  <input type="hidden" defaultValue={category}></input>
                  <label class="block text-gray-700 text-sm font-bold mb-2 ">
                    Tag:
                    <input
                      type="text"
                      ref={register}
                      name={`${fieldName}.tag`}
                      defaultValue={category.tag}
                    />
                  </label>
                </fieldset>
              );
            })}

            <button type="button" onClick={addCategory}>
              Add Category
            </button>

            <h4 class="block text-gray-700 text-sm font-bold mb-2 ">
              Ingredients
            </h4>
            {ingredientIndexes.map((ingredient, index) => {
              const fieldName = `ingredients[${index}]`;
              return (
                <fieldset name={fieldName} key={fieldName}>
                  <input
                    type="hidden"
                    name={`${fieldName}.id`}
                    ref={register}
                    defaultValue={ingredient.id}
                  />
                  <label class="block text-gray-700 text-sm font-bold mb-2 ">
                    Name:
                    <input
                      type="text"
                      name={`${fieldName}.name`}
                      ref={register}
                      defaultValue={ingredient.name}
                    />
                  </label>

                  <label class="block text-gray-700 text-sm font-bold mb-2 ">
                    Quantiy
                    <input
                      type="text"
                      name={`${fieldName}.quantity`}
                      ref={register}
                      defaultValue={ingredient.quantity}
                    />
                  </label>
                </fieldset>
              );
            })}
            <button type="button" onClick={addIngredient}>
              Add Ingredient
            </button>
            <h4 class="block text-gray-700 font-bold mb-2 ">
              Instructions
            </h4>

            {instructionIndexes.map((instruction, index) => {
              const fieldName = `instructions[${index}]`;
              return (
                <fieldset name={fieldName} key={fieldName}>
                  <input
                    type="hidden"
                    name={`${fieldName}.id`}
                    ref={register}
                    defaultValue={instruction.id}
                  />
                  <label class="block text-gray-700 text-sm font-bold mb-2 ">
                    Step {index + 1}:
                    <input
                      type="text"
                      name={`${fieldName}.content`}
                      ref={register}
                      defaultValue={instruction.content}
                    />
                    <input
                      type="hidden"
                      name={`${fieldName}.id`}
                      defaultValue={instruction.id}
                    />
                  </label>
                </fieldset>
              );
            })}
            <button type="button" onClick={addInstruction}>
              Add Instruction
            </button>
            <button type="submit">Update</button>
            <button type="button" onclick>
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRecipeForm;
