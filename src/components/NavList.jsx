import PropTypes from 'prop-types';
import styled from "styled-components";
import uniqid from "uniqid";
import NLink from "./NLink";




const NavListWrapper = styled.div`
    ul {
        display: flex;
        margin: 0;
        flex-direction: ${props => props.orientation === "row" ? "row" : "column"};
    }

    li:not(:last-child) {
        ${props => props.orientation === "row" ? "margin-right: 20px;" : "margin-bottom: 10px;"};
    }

    li a {
        text-decoration: none;
        color: var(--txt-base);

        &:hover {
            color: var(--accent);
        }

        &.active {
            color: var(--accent);
        }
    }
`;

const NavList = ({ data, orientation }) => {
    return (
        <NavListWrapper orientation={orientation}>
            <ul>
                {data?.map(item => <li key={uniqid()}>
                    <NLink to={item.path}>{item.name}</NLink>
                </li>)}
            </ul>
        </NavListWrapper>
    )
}

NavList.propTypes = {
    data: PropTypes.array.isRequired,
    orientation: PropTypes.string.isRequired
};

export default NavList;
