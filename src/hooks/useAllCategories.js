import commerce from '../libs/commerce';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../redux/products/categoriesSlice';
import { useEffect } from 'react';

export const useAllCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await commerce.categories.list();
      dispatch(setCategories(data));
    };

    fetchCategories();
  }, []);

  return categories;
};
