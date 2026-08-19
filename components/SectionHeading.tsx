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
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
          dark
            ? 'bg-[#0EA5E9]/20 text-[#7DD3FC] border-[#0EA5E9]/40'
            : 'bg-[#0EA5E9]/10 text-[#0284C7] border-[#0EA5E9]/30 shadow-xs'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-[#14B8A6]' : 'bg-[#0EA5E9]'} animate-ping`} />
          {badge}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-[#0F172A]'
      }`}>
        {title}{' '}
        {highlightedTitle && (
          <span className="bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#14B8A6] bg-clip-text text-transparent drop-shadow-xs">
            {highlightedTitle}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed font-medium ${
          dark ? 'text-slate-300' : 'text-[#64748B]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
