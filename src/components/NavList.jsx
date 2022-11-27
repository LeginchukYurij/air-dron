import styled from 'styled-components';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';




const NavList = styled.div`
    ul {
        display: flex;
        margin: 0;
    }

    li:not(:last-child) {
        margin-right: 20px;
    }

    li a {
        text-decoration: none;
        color: var(--txt-base);

        &:hover {
            color: var(--accent);
        }
    }
`;

export default () => {
    const data = [
        {
            name: 'Головна',
            path: '/'
        },
        {
            name: 'Оплата і достака',
            path: '/'
        },
        {
            name: 'Про компанію',
            path: '/'
        },
        {
            name: 'Блог',
            path: '/'
        }
    ];

    return (
        <NavList>
            <ul>
                {data?.map(item => <li key={uniqid()}>
                    <Link to={item.path}>{item.name}</Link>
                </li>)}
            </ul>
        </NavList>
    )
}
