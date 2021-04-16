import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import FormData from 'form-data';
import END_POINT from "../../actions/recipe/endpoint";
import { useHistory } from "react-router-dom";



export default function UploadImage(props) {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = (e) =>{
        let formData = new FormData()
        formData.append('image',e.image[0])
        formData.append('recipeId',e.recipeId)
        axios.patch(`${END_POINT}/recipes/${props.recipeId}/upload_image`,formData,{
            withCredentials:true 
        })
        .then(response => response.data)
        .then(res =>history.push(`/recipes/${res.data.id}`))
    }
    return (
      <div>
        <h3>Upload image</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" ref={register} name="image"/>
            <input type='hidden'value={props.recipeId} ref={register} name="recipeId"/>
            <button type="submit">submit</button>
        </form>
      </div>
    );
}