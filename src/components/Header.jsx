import Logo from './Logo';

import styled from 'styled-components';

import { FlexContainer } from './FlexContainer';
import { Container } from './Container';
import NavList from './NavList';

import { BsCartFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const MainHeader = styled.header`
    padding: 20px 0 0;
    background-color: var(--bg);
`;

const Cart = styled.div`
    margin-left: 60px;
    position: relative;
    width: 20px;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #F63747;
        font-size: 10px;
        color: #fff;
        position: absolute;
        top: -5px;
        right: -5px;
    }

    svg {
        color: var(--contrast);
    }
`;

const Search = styled.div`
    margin-left: auto;
    height: 40px;
    position: relative;
    max-width: 200px;
    width: 100%;

    input {
        display: block;
        width: 100%;
        height: 100%;
        padding: 0 15px 0 40px;
        border: none;
        border-left: 1px solid var(--txt-base);
        outline: none;
        font-size: 16px;
        line-height: 16px;
        font-weight: var(--fw-medium);
        color: var(--txt-base);
        background: none;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        color: var(--txt-base);
    }
`;

const Categories = styled.div`

    margin-top: 20px;
    padding: 20px 0;
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

const Header = () => {
    const { categories } = useSelector((state) => state.categories);

    return (
        <MainHeader>
            <FlexContainer>
                <Logo />
                <NavList />

                <Search>
                    <BiSearch
                        size="20px" />
                    <input type="text" placeholder='Пошук...' />
                </Search>

                <Cart>
                    <Link to="/cart">
                        <BsCartFill
                            size="20px" />

                        <span>1</span>
                    </Link>
                </Cart>
            </FlexContainer>

            <Categories>
                <Container>
                    <ul>
                        {[...categories]
                            ?.sort((a, b) => a.created - b.created)
                            .map(item => <li key={item.id}>
                                <Link to={`/category/${item.slug}`}>{item.name}</Link>
                            </li>)}
                    </ul>
                </Container>
            </Categories>
        </MainHeader>
    )
}

export default Header;