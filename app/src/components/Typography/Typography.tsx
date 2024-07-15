import React from 'react';
import classNames from 'classnames';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  className?: string;
  children: React.ReactNode;
};

const variantClasses = {
  h1: 'text-5xl font-extrabold leading-10 tracking-tight',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-medium',
  body: 'text-base',
  caption: 'text-sm text-gray-600',
};

const Typography: React.FC<TypographyProps> = ({ variant, className, children }) => {
  return (
    <span className={classNames(variantClasses[variant], className)}>
      {children}
    </span>
  );
};

export default Typography;
