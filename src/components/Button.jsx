import PropTypes from 'prop-types';

const Button = ({ id, handleClick, title, className, disabled = false }) => (
  <button
    className={`bg-blue-400 hover:bg-blue-500 active:bg-red-100 transition p-3 rounded-3xl w-full disabled:bg-gray-500 disabled:cursor-not-allowed ${className}`}
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
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
