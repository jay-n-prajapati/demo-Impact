import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smooth scrolling
  });
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
