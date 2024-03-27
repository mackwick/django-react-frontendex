const URL = import.meta.env.VITE_BASE_URL;

//Index loader
export const indexLoader = async () => {
  const response = await fetch(`${URL}`);
  const allPets = await response.json();
  return allPets;
};

//Show loader
export const showLoader = async ({ params }) => {
  const response = await fetch(`${URL}${params.id}/`);
  const aPet = await response.json();
  return aPet;
};
