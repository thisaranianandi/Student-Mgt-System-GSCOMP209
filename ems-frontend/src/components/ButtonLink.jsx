// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';  // Import PropTypes

// const ButtonLink = ({ text, toAction }) => {
//   return (
//     <Link className="btn btn-outline-primary mb-2" to={toAction}>
//       {text}
//     </Link>
//   );
// };

// // Add PropTypes validation
// ButtonLink.propTypes = {
//   text: PropTypes.string.isRequired,    // Ensure text is a string and required
//   toAction: PropTypes.func.isRequired,  // Ensure toAction is a function and required
// };
// export default ButtonLink;


import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ButtonLink = ({ text, toAction }) => {
  return (
    <Link className="btn btn-outline-primary mb-2" to={toAction}>
      {text}
    </Link>
  );
};

// Correct PropTypes validation
ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,   // Ensure text is a string and required
  toAction: PropTypes.string.isRequired,  // Ensure toAction is a string (URL/path)
};

export default ButtonLink;
