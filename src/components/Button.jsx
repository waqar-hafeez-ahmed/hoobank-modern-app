// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
  return (
    <button
      className={`${styles} bg-blue-gradient font-xl rounded-2xl px-6 py-4 font-poppins font-semibold text-primary outline-none`}
    >
      Get Started
    </button>
  );
};

export default Button;
