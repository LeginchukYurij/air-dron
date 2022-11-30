import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NLink = ({to, children}) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? " active" : "")}>{children}</NavLink>
  )
};

NLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default NLink;