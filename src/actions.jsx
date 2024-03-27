import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL;

//Create action
export const createAction = async ({ request }) => {
  //get form data
  const formData = await request.formData();
  //construct req body
  const newPet = {
    name: formData.get("name"),
    age: formData.get("age"),
  };
  //send req to the backend
  await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPet),
  });
  //redirect to index
  return redirect("/");
};

//Update action

//Delete action
