import React from 'react';
import { Phone, CalendarCheck, Compass, Sparkles } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
  phoneNumber?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookClick,
  phoneNumber = '(905) 431-7290',
}) => {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Title with Bento math badge */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#48b76f] text-white font-bold text-lg shadow-xs">
            <span className="leading-none">E</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-slate-900">
                Emerald Math
              </span>
              <span className="hidden items-center rounded-md bg-[#48b76f]/10 border border-[#48b76f]/25 px-2 py-0.5 text-[11px] font-bold text-[#26663f] sm:inline-flex uppercase tracking-wider">
                Grades 5–12
              </span>
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Direct Phone Link */}
          <a
            id="nav-phone-link"
            href={`tel:1${cleanPhone}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#3ca361]"
            aria-label={`Call directly at ${phoneNumber}`}
          >
            <Phone className="h-4 w-4 text-[#48b76f]" />
            <span className="tracking-tight">
              {phoneNumber}
            </span>
          </a>

          {/* Book Assessment CTA */}
          <button
            id="nav-book-assessment-btn"
            onClick={onBookClick}
            type="button"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#48b76f] px-5 py-2 text-sm font-semibold text-white shadow-xs transition hover:bg-[#3ca361] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#48b76f]"
          >
            <CalendarCheck className="h-4 w-4" />
            <span className="whitespace-nowrap">Book Assessment</span>
          </button>
        </div>
      </div>
    </header>
  );
};
