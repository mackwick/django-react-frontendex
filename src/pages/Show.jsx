import { useLoaderData, Link, Form } from "react-router-dom";

function Show(props) {
  const aPet = useLoaderData();
  //optional chaining ?.
  const id = aPet?.url.split("/")[4];
  return (
    <div>
      <h1>{aPet.name}</h1>
      <h2>{aPet.age}</h2>
      <hr />
      <div>
        {/* Update form */}
        <Form action={`/update/${id}/`} method="POST">
          <label htmlFor="name">
            Rename you Turtle
            <input type="text" id="name" name="name" defaultValue={aPet.name} />
          </label>

          <label htmlFor="age">
            Did they have a birthday?
            <input type="number" id="age" name="age" defaultValue={aPet.age} />
          </label>
          <button style={{ backgroundColor: "blue" }}>Update our Turtle</button>
        </Form>

        {/* Delete Form */}
        <Form action={`/delete/${id}/`} method="post">
          <button style={{ backgroundColor: "red" }}>Release Turtle</button>
        </Form>
      </div>
      <hr />
      <Link to="/">
        <button>Go Back.</button>
      </Link>
    </div>
  );
}

export default Show;
