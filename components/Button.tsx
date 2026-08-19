'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs gap-1.5',
    md: 'px-7 py-3.5 text-sm gap-2',
    lg: 'px-9 py-4 text-base gap-2.5 shadow-lg',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] hover:from-[#0284C7] hover:to-[#14B8A6] text-white shadow-lg shadow-[#0EA5E9]/25 hover:shadow-[#0EA5E9]/40 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-gradient-to-r from-sky-50 to-teal-50 text-[#0284C7] hover:from-sky-100 hover:to-teal-100 border border-[#0EA5E9]/30 shadow-xs',
    outline: 'border-2 border-[#0EA5E9] bg-[#0EA5E9]/10 text-[#0284C7] hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#14B8A6] hover:text-white shadow-xs transition-all',
    ghost: 'text-[#0F172A] hover:text-[#0EA5E9] hover:bg-sky-50',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
};

export default Button;
