import styled from 'styled-components';
import Logo from './Logo';
import { FlexContainer } from '../styledComponents';
import NavList from './NavList';
import CartContainer from './Cart/CartContainer';
import Search from './Search';
import { headerNavLinks } from '../data';
import HeaderCategories from './HeaderCategories';

const MainHeader = styled.header`
    padding: 10px 0 0;
    background-color: var(--bg);
    box-shadow: 5px 5px 45px -5px rgb(107 216 206 / 20%);
`;

const Header = () => {
    return (
        <MainHeader>
            <FlexContainer align="center" style={{paddingBottom: 10}}>
                <Logo />
                <NavList data={headerNavLinks} orientation="row" />
                <Search />
                <CartContainer />
            </FlexContainer>

            <HeaderCategories />
        </MainHeader>
    )
}

export default Header;