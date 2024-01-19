const Button = (props) => {
  const { id, title } = props;
  return (
    <>
      <button className="bg-blue-400 hover:bg-blue-500 active:bg-red-100 transition p-3 rounded-3xl w-full">
        <span className="mr-1">{id}.</span>
        {title}
      </button>
    </>
  );
};

export default Button;
