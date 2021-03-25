import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import END_POINT from "../../actions/recipe/endpoint";
import { useHistory } from "react-router-dom";
import { Form,Button } from 'bootstrap-4-react';
import FormData from 'form-data'

function NewRecipeForm() {
  const history = useHistory();

  const recipeName = React.useState("");
  const imageFile = React.useState("");

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
    let formData = new FormData();
    formData.append('imageFile',imageFile)
    formData.append('name',recipeName)
    debugger
    axios.post(`${END_POINT}/recipes`,formData, { 
      withCredentials: true})
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
  };

  const clearInstructions = () => {
    setInstructionIndexes([]);
  };

  const clearIngredient = () => {
    setIngredientIndexes([]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
        <fieldset name={recipeName}>
          <label>Name: </label>
          <input
            type="text"
            ref={register}
            name="name"
            placeholder="e.g. Spaghetti"
          />
        </fieldset>
        </Form.Group>
        
        {instructionIndexes.map((index) => {
          const fieldname = `instructions[${index}]`;
          return (
            <Form.Group>
            <fieldset name={fieldname} key={fieldname}>
              <label>
                Step {index + 1}:
                <input type="text" name={`${fieldname}`} ref={register} />
              </label>

              <button type="button" onClick={removeInstruction(index)}>
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

        {indexes.map((index) => {
          const fieldName = `categories[${index}]`;
          return (
            <Form.Group>
            <fieldset name={fieldName} key={fieldName}>
              <label>
                Tag:
                <input type="text" name={`${fieldName}.tag`} ref={register} />
              </label>

              <button type="button" onClick={removeCategory(index)}>
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

        <Form.Group>
        {ingredientIndexes.map((index) => {
          const fieldName = `ingredients[${index}]`;
          return (
            <fieldset name={fieldName} key={fieldName}>
              <label>
                Name:
                <input type="text" name={`${fieldName}.name`} ref={register} />
              </label>

              <label>
                quantiy:
                <input
                  type="text"
                  name={`${fieldName}.quantity`}
                  ref={register}
                />
              </label>
              <Button type="button" onClick={removeIngredient(index)}>
                Remove
              </Button>
            </fieldset>
            );
          })}
          </Form.Group>
          <Button type="button" onClick={addIngredient} >
            Add Ingredient
          </Button>

        <Button type="button" onClick={clearIngredient}>
          Clear Ingredients
        </Button>
        <fieldset name={imageFile}>
          <Form.Group>
            <label htmlFor="exampleControlsFile1">Image</label>
            <input type="file" ref={register} name="imageFile" />
          </Form.Group>
        </fieldset>
        <Button type="submit"> Create </Button>
     </Form>
  );
}

export default NewRecipeForm;
