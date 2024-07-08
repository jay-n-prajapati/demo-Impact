import { cn } from "../../utils";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-full py-3 px-8 border border-gray-400 bg-[#1A9082] text-gray-200 duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
