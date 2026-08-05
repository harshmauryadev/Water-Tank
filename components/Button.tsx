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
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs gap-1.5',
    md: 'px-7 py-3.5 text-sm gap-2',
    lg: 'px-9 py-4 text-base gap-2.5 shadow-lg',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-700 hover:via-sky-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 hover:from-blue-100 hover:to-cyan-100 border border-blue-200/80 hover:border-blue-300 shadow-xs',
    outline: 'border-2 border-blue-500/80 bg-gradient-to-r from-blue-600/10 via-sky-500/10 to-cyan-500/10 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-sky-500 hover:to-cyan-500 hover:text-white shadow-xs transition-all',
    ghost: 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/60',
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
