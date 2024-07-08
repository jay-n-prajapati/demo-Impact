const Input = ({ className, placeholder }) => {
  return (
    <input
      type="text"
      name="name"
      className={`w-full border border-[#D3D3D3] px-4 py-2 outline-none focus:border-black duration-300  ${className}`}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
