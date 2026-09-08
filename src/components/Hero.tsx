import React from 'react';
import {
  CalendarCheck,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  MapPin,
  Clock,
  Sparkles,
  Award,
} from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  phoneNumber?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onBookClick,
  phoneNumber = '(905) 431-7290',
}) => {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <section id="hero-section" className="relative">
      <div className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 overflow-hidden shadow-xs">
        {/* Bento Decorative Ambient Radial Circle */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-64 w-64 -mr-16 -mt-16 rounded-full bg-[#48b76f]/10 opacity-60"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Main Hero Bento Content */}
          <div className="lg:col-span-7">
            {/* Bento Trust Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#48b76f]/15 text-[#26663f] text-xs font-bold rounded-full uppercase tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5" />
                Ontario Curriculum Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full uppercase tracking-wider">
                <Award className="h-3.5 w-3.5 text-[#48b76f]" />
                1-on-1 Focus
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5 text-[#48b76f]" />
                In-Person & Online
              </span>
            </div>

            {/* Exact Headline Required */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
              Grades 5–12 Math Tutoring in{' '}
              <span className="text-[#3ca361]">Courtice & Online</span>
            </h1>

            {/* Exact Subheadline Required */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-6 leading-relaxed">
              Custom 1-on-1 coaching aligned with the Ontario curriculum to eliminate math anxiety.
            </p>

            {/* Dual CTAs in Bento Style */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-book-assessment-btn"
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 bg-[#48b76f] text-white px-7 py-3 rounded-xl font-bold text-base shadow-lg shadow-[#48b76f]/25 transition-all hover:bg-[#3ca361] active:scale-[0.98]"
              >
                <CalendarCheck className="h-5 w-5" />
                <span>Book Free Assessment</span>
              </button>

              <a
                id="hero-call-now-btn"
                href={`tel:1${cleanPhone}`}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-7 py-3 rounded-xl font-bold text-base transition-all hover:border-[#48b76f] hover:text-[#3ca361] active:scale-[0.98]"
              >
                <PhoneCall className="h-5 w-5 text-[#48b76f]" />
                <span>Call Now: {phoneNumber}</span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="h-2 w-2 rounded-full bg-[#48b76f] animate-pulse" />
              <span>Courtice & Durham Region • Taking New Students for 2026 Term</span>
            </div>
          </div>

          {/* Right Snapshot Bento Mini-Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#48b76f] text-white font-bold text-xs">
                    20m
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Diagnostic Assessment Call</h3>
                    <p className="text-[11px] text-slate-500">Zero obligation • 1-on-1 with Joseph</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#48b76f]/15 px-2 py-0.5 text-[11px] font-bold text-[#26663f] uppercase tracking-wider">
                  $0 Fee
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#48b76f] shrink-0 mt-0.5" />
                  <span><strong>Identify Gaps:</strong> Pinpoint exact Grade 5–12 curriculum bottlenecks.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#48b76f] shrink-0 mt-0.5" />
                  <span><strong>Custom Roadmap:</strong> Aligned with school syllabus & unit tests.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#48b76f] shrink-0 mt-0.5" />
                  <span><strong>Anxiety Plan:</strong> Actionable strategies for calm exam performance.</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
                <span className="flex items-center gap-1 font-semibold">
                  <MapPin className="h-3.5 w-3.5 text-[#48b76f]" />
                  Courtice (Hwy 2 & Townline)
                </span>
                <span className="text-[#26663f] font-bold">
                  In-Person or Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
