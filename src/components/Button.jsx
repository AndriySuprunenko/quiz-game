import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      className={`bg-blue-400 hover:bg-blue-500 active:bg-red-100 transition p-3 rounded-3xl w-full ${props.className}`}
      onClick={props.handleClick}
    >
      <span className="mr-1">{props.id}</span>
      {props.title}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
