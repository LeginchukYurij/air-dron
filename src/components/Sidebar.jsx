import PropTypes from 'prop-types';

const Sidebar = ({ children }) => {
  return (
    <div>
        {children}
    </div>
  )
};

Sidebar.propTypes = {
  children: PropTypes.node,
};

export default Sidebar;