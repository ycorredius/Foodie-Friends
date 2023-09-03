import { useForm } from "react-hook-form";

function RecipeForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" {...register("name")} />
        </div>
        <div>
          <label htmlFor="instructions"> Instructions</label>
          <input name="instructions" {...register("instructions")} />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea name="ingredients" {...register("ingredients")} />
        </div>
        <div>
          <label htmlFor="avatar">Image</label>
          <input name="avatar" {...register("avatar")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default RecipeForm;
