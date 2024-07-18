import React from "react";

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "p";
  children: React.ReactNode;
}

const Heading: React.FC<TypographyProps> = ({ variant, children }) => {
  const variantClasses = {
    h1: "font-extrabold text-h1 text-900",
    h2: "font-semibold text-h2 text-900",
    h3: "font-semibold text-h3 text-900",
    h4: "font-semibold text-h4 text-900",
    p: "font-normal text-p text-900",
  };

  return <div className={variantClasses[variant]}>{children}</div>;
};

export default Heading;
