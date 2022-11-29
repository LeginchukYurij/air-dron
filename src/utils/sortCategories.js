export const sortCategories = (categories) => {
  return categories?.sort((a, b) => a.created - b.created);
};
