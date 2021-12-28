import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormData from "form-data";
import END_POINT from "../../actions/recipe/endpoint";
import { useHistory } from "react-router-dom";

export default function UploadImage(props) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (e) => {
    let formData = new FormData();

    formData.append("image", e.image[0]);
    formData.append("recipeId", e.recipeId);
    axios
      .post(`${END_POINT}/recipes/${props.recipeId}/photos`, formData, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((res) => history.push(`/recipe/${res.data.id}`));
  };
  return (
    <div class="container w-full max-w-xs">
      <div cdlass="flex flex-col justify-center items-center">
        <div class="flex font-bold text-blue-dark justify-center">
          <h3>Upload image</h3>
        </div>
        <form
          class="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="file" ref={register} name="image" />
          <input
            type="hidden"
            value={props.recipeId}
            ref={register}
            name="recipeId"
          />
          <button
            class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
