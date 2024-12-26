

// export default Button;
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-outline-primary mb-2" onClick={onClick}>
      {text}
    </button>
  );
};

// Add PropTypes validation
Button.propTypes = {
  text: PropTypes.string.isRequired,  // Ensure text is a string and required
  onClick: PropTypes.func.isRequired,  // Ensure onClick is a function and required
};

export default Button;
