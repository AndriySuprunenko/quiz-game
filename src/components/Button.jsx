import PropTypes from 'prop-types';

const Button = ({ id, handleClick, title, className, disabled }) => (
  <button
    className={`bg-blue-400 hover:bg-blue-500 text-white text-lg transition p-3 rounded-3xl w-full disabled:bg-gray-500 disabled:cursor-not-allowed ${className}`}
    onClick={handleClick}
    disabled={disabled}
  >
    <span className="mr-1">{id}</span>
    {title}
  </button>
);

Button.propTypes = {
  id: PropTypes.number,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  id: null,
  disabled: false,
  className: '',
};

export default Button;
