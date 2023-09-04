const Button = ({ styles }) => {
  return (
    <button
      className={`${styles} py-4 px-6 bg-blue-gradient font-xl font-poppins font-semibold text-primary rounded-2xl outline-none`}
    >
      Get Started
    </button>
  );
};

export default Button;
