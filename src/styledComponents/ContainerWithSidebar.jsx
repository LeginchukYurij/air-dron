import styled from "styled-components";
import PropTypes from 'prop-types';

const ContainerWithSidebar = styled.div`
    display: grid;
    ${ props => props.sidebarPos === 'left' ? 'grid-template-columns: 25% 1fr' : 'grid-template-columns: 1fr 25%' };
    grid-column-gap: 30px;
`;

ContainerWithSidebar.propTypes = {
    sidebarPos: PropTypes.oneOf(['left', 'right']),
}

export default ContainerWithSidebar;