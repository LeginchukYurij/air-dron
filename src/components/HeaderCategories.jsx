import styled from 'styled-components';
import { Container } from "../styledComponents";
import { useParams } from "react-router-dom";
import { useAllCategories } from "../hooks/useAllCategories";
import NLink from './NLink';
import { sortCategories } from '../utils';


const Categories = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    height: 60px;
    background-color: var(--accent);

    ul {
        display: flex;
        margin: 0;
    }

    li:not(:last-child) {
        margin-right: 20px;
    }

    li a {
        text-decoration: none;
        color: #fff;
    }
`;

const HeaderCategories = () => {
    const { categorySlug } = useParams();
    const [...categories] = useAllCategories();

    return (
        !categorySlug && <Categories>
            <Container>
                <ul>
                    {sortCategories(categories)
                        .map(item => 
                            <li key={item.id}>
                                <NLink to={`/category/${item.slug}`}>
                                    {item.name}
                                </NLink>
                            </li>
                        )}
                </ul>
            </Container>
        </Categories>
    )
}

export default HeaderCategories