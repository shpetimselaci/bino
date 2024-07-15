import React from 'react'
import './input.css'

export interface InputProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Input = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: InputProps) => {
  return (
    <input type='text' className={['storybook-input', `storybook-input--${size}`].join(' ')} {...props} />
  )
}