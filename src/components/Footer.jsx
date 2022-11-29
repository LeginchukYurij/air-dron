import styled from 'styled-components';
import { FlexContainer } from "../styledComponents";
import Logo from "./Logo";
import NavList from './NavList';
import { infoPages } from '../data';

const FooterWrapper = styled.footer`
    padding: 20px 0;
    background-color: var(--box-bg);
`;

const Copyright = styled.div`
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FlexContainer align="flex-start">
                <Logo />

                <NavList data={infoPages} orientation="column" />
            </FlexContainer>

            <Copyright>
                © 2022 Всі права захищені
            </Copyright>
        </FooterWrapper>
    )
}

export default Footer;