import styled from "styled-components";
import { useSelector } from "react-redux";
import NLink from "./NLink";
import { sortCategories } from "../utils";

const CategoriesBox = () => {
    const {categories} = useSelector(state => state.categories);

    return (
        <ul>
            {sortCategories([...categories])
                .map(item => 
                    <li>
                        <NLink to={`/category/${item.slug}`}>{item.name}</NLink>
                    </li>)}
        </ul>
    )
};

export default CategoriesBox;