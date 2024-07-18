// components/Typography.tsx
import React from 'react';
import classNames from 'classnames';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'p';
  children: React.ReactNode;
  className?: string;
}

const Typographys: React.FC<TypographyProps> = ({ variant, children, className }) => {
  return (
    <div className={classNames(variant, className)}>
      {children}
    </div>
  );
};

export default Typographys;
