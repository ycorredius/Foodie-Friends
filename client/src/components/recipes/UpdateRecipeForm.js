import React from "react";
import { useForm} from "react-hook-form";
import axios from "axios";
import END_POINT from "../../actions/recipe/endpoint";
import { useHistory } from "react-router-dom";
import { Form, Button } from "bootstrap-4-react";


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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={props.recipe.data.attributes.image_url} alt="food"/>
        <input
          type="hidden"
          name="id"
          ref={register}
          value={props.recipe.data.attributes.id}
        />
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name='name'
            ref={register}
            defaultValue={props.recipe.data.attributes.name}
          />
        </div>
        <h4>Categories</h4>
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
                <label>
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

        <h4>Ingredients</h4>
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
                  <label>
                    Name:
                    <input
                      type="text"
                      name={`${fieldName}.name`}
                      ref={register}
                      defaultValue={ingredient.name}
                    />
                  </label>

                  <label>
                    quantiy:
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
        <h4>Instructions</h4>

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
                <label>
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
        <button type="button" onclick>Delete</button>
      </form>
    </div>
  );
}

export default UpdateRecipeForm;
