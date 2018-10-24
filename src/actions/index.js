export const FETCH_ANIMALS = "FETCH_ANIMALS";

export const fetchAnimals = () => {
  return {
    type: FETCH_ANIMALS,
    payload: ["monkey", "giraffe", "zebra", "rat"]
  };
};
