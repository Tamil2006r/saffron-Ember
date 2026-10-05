import React, { useState } from 'react';
import { Flame } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Culinary photography',
  fallbackTitle,
  fallbackSubtitle,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-gradient-to-br from-[#1C1B1F] via-[#242226] to-[#161518] border border-white/5 ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#C24B2C]/10 via-transparent to-transparent pointer-events-none" />
        <div className="w-10 h-10 rounded-full bg-[#C24B2C]/15 border border-[#C24B2C]/30 flex items-center justify-center text-[#D95D39] mb-2.5">
          <Flame className="w-5 h-5" />
        </div>
        {fallbackTitle && (
          <span className="font-serif text-sm text-[#F3EFEA] font-medium tracking-wide">
            {fallbackTitle}
          </span>
        )}
        {fallbackSubtitle && (
          <span className="text-[11px] text-zinc-400 mt-0.5 max-w-[200px] line-clamp-1">
            {fallbackSubtitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#1A191D] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#222026] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        {...props}
      />
    </div>
  );
};
