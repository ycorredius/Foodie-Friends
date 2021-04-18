import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import END_POINT from "../../actions/recipe/endpoint";
import { useHistory } from "react-router-dom";
import { Form, Button } from "bootstrap-4-react";

function UpdateRecipeForm(props) {
  const history = useHistory();

  const recipeName = React.useState("");

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const { register, handleSubmit } = useForm();

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

  const removeCategory = (id, index) => () => {
    if (id) {
      setIndexes((prevIndexes) => [
        ...prevIndexes.filter((item) => item.id !== id),
      ]);
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      setIndexes((prevIndexes) => [
        ...prevIndexes.filter((item) => item !== index),
      ]);
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const removeInstruction = (id, index) => () => {
    if (id) {
      setInstructionIndexes((prevInstructionIndexes) => [
        ...prevInstructionIndexes.filter((item) => item.id !== id),
      ]);
      setInstructionCounter((prevCounter) => prevCounter - 1);
    } else {
      setInstructionIndexes((prevInstructionIndexes) => [
        ...prevInstructionIndexes.filter((item) => item !== index),
      ]);
      setInstructionCounter((prevCounter) => prevCounter - 1);
    }
  };

  const removeIngredient = (id, index) => () => {
    if (id) {
      setIngredientIndexes((prevIngredientIndexes) => [
        ...prevIngredientIndexes.filter((item) => item !== id),
      ]);
      setIngredientCounter((prevCounter) => prevCounter - 1);
    } else {
      setIngredientIndexes((prevIngredientIndexes) => [
        ...prevIngredientIndexes.filter((item) => item !== index),
      ]);
      setIngredientCounter((prevCounter) => prevCounter - 1);
    }
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

  const onSubmit = (e) =>{
      e.preventDefault();
      debugger
  }
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <img src={props.recipe.data.attributes.image_url} />
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" value={props.recipe.data.attributes.name} />

          <h4>Categories</h4>
          {indexes.map((category, index) => {
            const fieldName = `${category.tag}`;
            return (
              <Form.Group>
                <fieldset name={fieldName} key={fieldName}>
                  <label>
                    Tag:
                    <input
                      type="text"
                      name={`${fieldName}`}
                      ref={register}
                      value={category.tag}
                    />
                  </label>

                  <button type="button" onClick={removeCategory(category.id)}>
                    Remove
                  </button>
                </fieldset>
              </Form.Group>
            );
          })}

          <Button type="button" onClick={addCategory}>
            Add Category
          </Button>

          <Button type="button" onClick={clearCategories}>
            Clear Categories
          </Button>

          <h4>Ingredients</h4>
          <Form.Group>
            {ingredientIndexes.map((ingredient, index) => {
              const fieldName = `${ingredient.name}`;
              return (
                <fieldset
                  name={fieldName}
                  key={fieldName}
                  value={ingredient.name}
                >
                  <label>
                    Name:
                    <input
                      type="text"
                      name={`${fieldName}.name`}
                      ref={register}
                      value={ingredient.name}
                    />
                  </label>

                  <label>
                    quantity:
                    <input
                      type="text"
                      name={`${fieldName}.quantity`}
                      ref={register}
                      value={ingredient.quantity}
                    />
                  </label>
                  <Button
                    type="button"
                    onClick={removeIngredient(ingredient.id)}
                  >
                    Remove
                  </Button>
                </fieldset>
              );
            })}
          </Form.Group>
          <Button type="button" onClick={addIngredient}>
            Add Ingredient
          </Button>

          <Button type="button" onClick={clearIngredient}>
            Clear Ingredients
          </Button>

          <h4>Instructions</h4>

          {instructionIndexes.map((instruction, index) => {
            const fieldname = `${instruction.content}`;
            return (
              <Form.Group>
                <fieldset name={fieldname} key={fieldname}>
                  <label>
                    Step {index + 1}:
                    <input
                      type="text"
                      name={`${fieldname}`}
                      ref={register}
                      value={instruction.content}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={removeInstruction(instruction.id, index)}
                  >
                    remove
                  </button>
                </fieldset>
              </Form.Group>
            );
          })}

          <Button type="button" onClick={addInstruction}>
            Add Instruction
          </Button>

          <Button type="button" onClick={clearInstructions}>
            Clear Instructions
          </Button>

          <button type="submit">Update</button>
        </form>
      </Form>
    </div>
  );
}

export default UpdateRecipeForm;
