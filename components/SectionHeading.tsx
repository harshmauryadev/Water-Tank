import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedTitle,
  subtitle,
  align = 'center',
  className = '',
  dark = false,
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignment[align]} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border ${
          dark
            ? 'bg-blue-500/20 text-blue-200 border-blue-400/30'
            : 'bg-blue-50 text-blue-600 border-blue-200/80 shadow-sm'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-blue-300' : 'bg-blue-600'} animate-ping`} />
          {badge}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}{' '}
        {highlightedTitle && (
          <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-xs">
            {highlightedTitle}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
