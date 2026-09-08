import React from 'react';
import { Compass, Phone, Mail, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  phoneNumber?: string;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  phoneNumber = '(905) 431-7290',
  onBookClick,
}) => {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 py-10 mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Brand Col */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-3 text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#48b76f] text-white font-bold text-lg shadow-xs">
                  E
                </div>
                <span className="text-lg font-bold tracking-tight">
                  Emerald Math
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Specialized 1-on-1 Ontario curriculum math coaching for students in Grades 5–12. Serving Courtice, Bowmanville, Oshawa, and students province-wide online.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <MapPin className="h-3 w-3 text-[#48b76f]" />
                <span>Courtice & Clarington, Durham Region, Ontario</span>
              </div>
            </div>

            {/* Quick Links Col */}
            <div className="md:col-span-3 space-y-2.5 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
                Ontario Curriculum
              </h4>
              <ul className="space-y-1.5 text-slate-400">
                <li>Grades 5–8 Foundations & EQAO</li>
                <li>Grade 9 MTH1W (De-streamed)</li>
                <li>Grade 10 MPM2D (Principles of Math)</li>
                <li>Grade 11 MCR3U (Functions)</li>
                <li>Grade 12 MHF4U & MCV4U Calculus</li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
                Get In Touch
              </h4>
              <div className="space-y-2 text-xs">
                <a
                  href={`tel:1${cleanPhone}`}
                  className="flex items-center gap-2 text-[#48b76f] hover:text-[#8de4a8] transition"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  <span className="font-semibold">{phoneNumber}</span>
                </a>
                <button
                  type="button"
                  onClick={onBookClick}
                  className="mt-1 block w-full rounded-xl bg-[#48b76f] py-2.5 px-3 text-center text-xs font-bold text-white shadow-xs hover:bg-[#3ca361] transition active:scale-[0.99]"
                >
                  Book 20-Min Free Assessment
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Disclaimer */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} Emerald Math. All rights reserved.
            </p>
            <p className="text-slate-500 text-center sm:text-right">
              Dedicated to eliminating math anxiety across Ontario.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
