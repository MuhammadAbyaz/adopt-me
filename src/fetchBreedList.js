const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) return [];
  const apiResult = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiResult.ok) {
    throw new Error(
      `searchParams/${animal} fetch breed list for that animal failed`
    );
  }
  return apiResult.json();
};

export default fetchBreedList;
