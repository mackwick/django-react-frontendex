import { useLoaderData, Link } from "react-router-dom";

function Show(props) {
  const aPet = useLoaderData();
  return (
    <div>
      <h1>{aPet.name}</h1>
      <h2>{aPet.age}</h2>
      <hr />
      <Link to="/">
        <button>Go Back.</button>
      </Link>
    </div>
  );
}

export default Show;
