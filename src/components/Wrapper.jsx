import PropTypes from 'prop-types';

const Wrapper = ({ children }) => {
    return (
        <div className="wrapper">{children}</div>
    );
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired, // `node` means anything that can be rendered, e.g., text, elements, etc.
};

export default Wrapper;
