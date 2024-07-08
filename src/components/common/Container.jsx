import { cn } from "../../utils";

const Container = ({ children, className }) => {
  return (
    <div className={cn("container mx-auto px-4 sm:px-10 py-32", className)}>
      {children}
    </div>
  );
};

export default Container;
