import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import END_POINT from "../../../actions/recipe/endpoint";
import { Redirect, useHistory } from "react-router-dom";
import Categories from "./Categories";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

function NewRecipeForm(props) {
  if (!props.userId) {
    <Redirect to={"/login"} />;
  }
  const history = useHistory();
  const recipeName = React.useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    debugger
    axios
      .post(`${END_POINT}/recipes`, e, {
        withCredentials: true,
      })
      .then((response) => response.json)
      .then(history.push("/recipes"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset name="recipe" key="recipe">
          <div>
            <fieldset name={recipeName}>
              <label>Name</label>
              <input
                type="text"
                ref={register}
                name={`recipe[name]`}
                placeholder="e.g. Spaghetti"
              />
              <Categories ref={register}/>
              <Ingredients ref={register}/>
              <Instructions ref={register}/>
            </fieldset>
          </div>

          <div>
            <button type="submit">Create</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default NewRecipeForm;
