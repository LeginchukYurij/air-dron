import styled from 'styled-components';
import logo from '../assets/logo.svg';

const LogoBox = styled.div`
    margin-right: 60px;
    display: flex;
    align-items: center;

    span {
        font-weight: var(--fw-bold);
        font-size: 24px;
        color: var(--contrast);
    }
    
    img {
        width: 80px;
    }
`;


export default () => {
    return (
        <LogoBox>
            <img src={logo} alt="Logo" />
            <span>AIR-DRON</span>
        </LogoBox>
    )
}
