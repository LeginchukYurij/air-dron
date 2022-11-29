import commerce from '../libs/commerce';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../redux/products/categoriesSlice';

export const useCategory = (categorySlug) => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.categories);

  useEffect(() => {
    const fetchCategory = async () => {
      const category = await commerce.categories.retrieve(categorySlug, { type: 'slug' });
      dispatch(setSelectedCategory(category));
    };

    fetchCategory();
  }, [categorySlug]);

  return selectedCategory;
};
