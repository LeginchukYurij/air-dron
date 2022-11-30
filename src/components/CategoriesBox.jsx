import styled from "styled-components";
import { useSelector } from "react-redux";
import NLink from "./NLink";
import { sortCategories } from "../utils";

const UL = styled.ul`
    margin: 0;

    li:not(:last-child) {
        margin-bottom: 10px;
    }
    


    li a {
        color: var(--txt-base);
        text-decoration: none;
        display: flex;
        flex-wrap: wrap;
        width: fit-content;


        &:hover, &.active {
            color: var(--accent);
        }

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            padding: 2px 5px;
            width: fit-content;
            height: fit-content;
            background-color: var(--accent);
            color: #fff;
            font-size: 12px;
            border-radius: 3px;
        }
    }
`;

const CategoriesBox = () => {
    const {categories} = useSelector(state => state.categories);

    return (
        <UL>
            {sortCategories([...categories])
                .map(item => 
                    item.products ? 
                            <li key={item.id}>
                                <NLink to={`/category/${item.slug}`}>
                                    {item.name}
                                    <span>{item.products}</span>
                                </NLink>
                            </li> : null
                    )}
        </UL>
    )
};

export default CategoriesBox;