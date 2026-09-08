import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Layers,
  TrendingUp,
  Binary,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

interface CurriculumSectionProps {
  onSelectGradeTrack: (gradeSuggestion: string) => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  onSelectGradeTrack,
}) => {
  const tracks = [
    {
      id: 'grades-5-8',
      gradeSpan: 'Grades 5–8',
      title: 'Elementary & Middle School Foundations',
      subtitle: 'Closing core arithmetic gaps before high school',
      badge: 'Core Foundations',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: Layers,
      highlight: 'Foundations, Fractions, Pre-Algebra',
      keyFocusAreas: [
        'Mastering fraction operations, decimals, & percentages',
        'Positive & negative integer arithmetic',
        'Step-by-step word problem translating & decoding',
        'EQAO Grade 6 math test preparation & confidence building',
        'Early algebraic thinking & equation balancing',
      ],
      defaultGradeSelection: 'Grade 7',
      targetOutcome: 'Transforms math fear into confident, independent homework completion.',
    },
    {
      id: 'grades-9-10',
      gradeSpan: 'Grades 9–10',
      title: 'De-streamed High School Transitions',
      subtitle: 'Critical prerequisite years for senior university math',
      badge: 'Ontario High School Core',
      badgeColor: 'bg-[#48b76f]/15 text-[#26663f] border-[#48b76f]/30',
      icon: TrendingUp,
      highlight: 'De-streamed Math (MTH1W) & Principles of Math (MPM2D)',
      keyFocusAreas: [
        'MTH1W (Grade 9 De-streamed Math): coding in math, linear relations, rates & ratios',
        'MPM2D (Grade 10 Principles of Math): quadratics, factoring, analytic geometry',
        'Mastering standard algebraic manipulation & graphing',
        'EQAO Grade 9 assessment practice & exam study systems',
        'Avoiding the common 15–20% high school grade drop',
      ],
      defaultGradeSelection: 'Grade 9 (MTH1W De-streamed)',
      targetOutcome: 'Builds strong algebraic intuition needed for Grade 11/12 math streams.',
    },
    {
      id: 'grades-11-12',
      gradeSpan: 'Grades 11–12',
      title: 'Senior STEM & University Preparation',
      subtitle: 'High-stakes marks for competitive Ontario university admissions',
      badge: 'University Preparation',
      badgeColor: 'bg-violet-50 text-violet-800 border-violet-200',
      icon: Binary,
      highlight: 'Functions (MCR3U), Advanced Functions (MHF4U), Calculus & Vectors (MCV4U)',
      keyFocusAreas: [
        'MCR3U: Polynomial functions, exponential relations, discrete math, & trigonometry',
        'MHF4U: Rational functions, logarithmic & trigonometric identities, rates of change',
        'MCV4U: Derivatives, curve sketching, optimization, 3D vectors & cross products',
        'MDM4U: Data management, probability distributions, counting techniques',
        'Timed test pacing, university admission grade targeting, and stress mastery',
      ],
      defaultGradeSelection: 'Grade 11 (MCR3U Functions)',
      targetOutcome: 'Secures high 80s and 90s required for engineering, business, & science programs.',
    },
  ];

  return (
    <section id="curriculum-section" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 bg-[#48b76f]/15 text-[#26663f] text-xs font-bold rounded-full uppercase tracking-wider">
                Ontario Curriculum Aligned
              </span>
              <span className="px-3 py-0.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-full uppercase tracking-wider">
                Grades 5–12
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Curriculum Tracks & Core Courses
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg">
            Structured instruction targeted directly at the Ontario Ministry of Education standards, from elementary arithmetic to university STEM calculus.
          </p>
        </div>

        {/* 3 Bento Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tracks.map((track) => {
            const Icon = track.icon;
            const iconBg =
              track.id === 'grades-5-8'
                ? 'bg-[#48b76f]/10 text-[#3ca361]'
                : track.id === 'grades-9-10'
                ? 'bg-[#48b76f]/15 text-[#26663f]'
                : 'bg-emerald-950/10 text-[#26663f]';
            const tagColor = 'text-[#26663f]';

            return (
              <div
                key={track.id}
                id={`curriculum-card-${track.id}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-[#48b76f]/60 hover:shadow-md"
              >
                <div>
                  {/* Top Icon and Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${tagColor}`}>
                      {track.gradeSpan}
                    </span>
                  </div>

                  {/* Card Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {track.title}
                  </h3>

                  {/* High-visibility Curriculum Highlight */}
                  <div className="mt-3 rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Targeted Courses:
                    </span>
                    <span className="text-xs font-semibold text-slate-900">
                      {track.highlight}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                    {track.subtitle}
                  </p>

                  {/* Key Areas List */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Competencies:
                    </span>
                    <ul className="space-y-2">
                      {track.keyFocusAreas.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle className="h-3.5 w-3.5 text-[#48b76f] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom / Outcome & Action */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="mb-3 rounded-md bg-slate-50 p-2 text-[11px] text-slate-600">
                    <strong className="text-slate-900">Outcome:</strong> {track.targetOutcome}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectGradeTrack(track.defaultGradeSelection)}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#48b76f]/30 bg-white py-2 px-3 text-xs font-bold text-[#26663f] transition hover:bg-[#48b76f]/10 hover:border-[#48b76f]/60 active:scale-[0.99]"
                  >
                    <span>Select {track.gradeSpan}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
