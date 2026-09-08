import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  BookCheck,
  Brain,
  Monitor,
  Home,
  FileText,
  Clock,
  Sparkles,
  MapPin,
  PenTool,
  Users,
  Check,
} from 'lucide-react';
import { DeliveryMode } from '../types';

interface TutorBioProps {
  onSelectDeliveryMode: (mode: DeliveryMode) => void;
}

export const TutorBio: React.FC<TutorBioProps> = ({ onSelectDeliveryMode }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'in-person' | 'online'>('both');

  return (
    <section id="tutor-bio-section" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 bg-[#48b76f]/15 text-[#26663f] text-xs font-bold rounded-full uppercase tracking-wider">
                Solo Practitioner
              </span>
              <span className="px-3 py-0.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-full uppercase tracking-wider">
                8+ Years Experience
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Meet Your Dedicated Math Coach
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg">
            No revolving student tutors or franchise turnover. Work 1-on-1 with an experienced Ontario curriculum specialist every week.
          </p>
        </div>

        {/* Bento Profile & Method Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Bento Profile Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs h-full flex flex-col justify-between">
              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-5 border-b border-slate-100 pb-4">
                  <div className="w-14 h-14 bg-[#48b76f] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-xs shrink-0">
                    JM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">Joseph Mathew</h3>
                    <p className="text-xs text-slate-500">Head Instructor & Ontario Math Specialist</p>
                    <span className="inline-block mt-1 text-[10px] bg-[#48b76f]/15 text-[#26663f] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      Ontario Math Specialist • 8+ Years
                    </span>
                  </div>
                </div>

                {/* Delivery Availability Bento Module */}
                <div className="space-y-2.5 mb-5">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4 text-[#48b76f]" />
                      <span className="text-xs font-semibold text-slate-800">In-Person (Courtice Studio)</span>
                    </div>
                    <span className="text-[11px] bg-[#48b76f]/15 text-[#26663f] px-2 py-0.5 rounded-md font-bold">
                      Available
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-[#48b76f]" />
                      <span className="text-xs font-semibold text-slate-800">Online (Interactive Whiteboard)</span>
                    </div>
                    <span className="text-[11px] bg-[#48b76f]/15 text-[#26663f] px-2 py-0.5 rounded-md font-bold">
                      Available
                    </span>
                  </div>
                </div>

                {/* Quick Credential Highlights */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#48b76f]/5 text-slate-700 border border-[#48b76f]/20">
                    <BookCheck className="h-4 w-4 text-[#48b76f] shrink-0" />
                    <span><strong>100% Ontario Aligned:</strong> Up to date with MTH1W de-streamed & senior calculus.</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#48b76f]/5 text-slate-700 border border-[#48b76f]/20">
                    <Users className="h-4 w-4 text-[#48b76f] shrink-0" />
                    <span><strong>150+ Courtice Students:</strong> Average +18% grade improvement in one semester.</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-[#48b76f]" />
                  Courtice, ON
                </span>
                <span className="font-semibold text-[#26663f]">Grades 5–12 Focus</span>
              </div>
            </div>
          </div>

          {/* Philosophy & Approach Bento Box */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
                  Diagnostic Problem-Solving & Anxiety Elimination
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Math anxiety rarely stems from a lack of intelligence. It usually begins with a small prerequisite gap missed in a previous grade. We find and fix the root misunderstanding before tackling homework.
                </p>

                {/* 4 Pillars in Bento 2x2 Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <div className="flex items-center gap-2 text-[#3ca361] font-bold text-xs mb-1">
                      <Brain className="h-4 w-4" />
                      <span>Diagnostic Root-Cause Fix</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Pinpoint exact elementary or algebraic gaps using intuitive mental models before applying formulas.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <div className="flex items-center gap-2 text-[#3ca361] font-bold text-xs mb-1">
                      <Clock className="h-4 w-4" />
                      <span>Zero-Pressure Pacing</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Socratic coaching that normalizes mistakes as essential neuroplastic learning milestones.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <div className="flex items-center gap-2 text-[#3ca361] font-bold text-xs mb-1">
                      <PenTool className="h-4 w-4" />
                      <span>Syllabus Synchronization</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Lessons aligned directly with your child’s classroom teacher tests, quizzes, and homework in Durham.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                    <div className="flex items-center gap-2 text-[#3ca361] font-bold text-xs mb-1">
                      <Sparkles className="h-4 w-4" />
                      <span>Exam & Rubric Mastery</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Timed drill practice that teaches Ontario written communication steps to secure top marks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Toggle Bar */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-700">
                  Compare In-Person vs. Online Formats:
                </span>
                <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveTab('both')}
                    className={`rounded-md px-3 py-1 text-xs font-bold transition ${
                      activeTab === 'both' ? 'bg-white text-[#26663f] shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Both
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('in-person')}
                    className={`rounded-md px-3 py-1 text-xs font-bold transition ${
                      activeTab === 'in-person' ? 'bg-white text-[#26663f] shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    In-Person
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('online')}
                    className={`rounded-md px-3 py-1 text-xs font-bold transition ${
                      activeTab === 'online' ? 'bg-white text-[#26663f] shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Online
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Cards in Bento Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Option A: In-Person (Courtice) */}
          {(activeTab === 'both' || activeTab === 'in-person') && (
            <div
              id="delivery-card-inperson"
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-[#48b76f]/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#48b76f]/10 text-[#3ca361]">
                      <Home className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">In-Person Tutoring</h4>
                      <span className="text-xs font-semibold text-[#3ca361] flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Courtice Studio
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-700">
                    High Engagement
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Ideal for students who get easily fatigued by screens or thrive with tactile pen-and-paper instruction.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#48b76f] shrink-0 mt-0.5" />
                    <span><strong>Dedicated Courtice studio:</strong> Quiet environment near Hwy 2 & Townline.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#48b76f] shrink-0 mt-0.5" />
                    <span><strong>Physical textbook review:</strong> Analyze classroom quizzes and teacher rubrics directly.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#48b76f] shrink-0 mt-0.5" />
                    <span><strong>Parent debrief:</strong> Quick 2-minute verbal summary at pickup after every session.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectDeliveryMode('in-person')}
                  className="w-full rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800"
                >
                  Choose In-Person (Courtice) →
                </button>
              </div>
            </div>
          )}

          {/* Option B: Online (Live Whiteboard + Post-Lesson PDF Notes) */}
          {(activeTab === 'both' || activeTab === 'online') && (
            <div
              id="delivery-card-online"
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-[#48b76f]/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#48b76f]/10 text-[#3ca361]">
                      <Monitor className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Online Tutoring</h4>
                      <span className="text-xs font-semibold text-[#3ca361] flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        Live Whiteboard + PDF Notes
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#48b76f]/15 px-2.5 py-0.5 text-xs font-bold text-[#26663f]">
                    Zero Commute
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Interactive 1-on-1 digital sessions engineered for busy families across Courtice, Bowmanville, and Oshawa.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#48b76f] shrink-0 mt-0.5" />
                    <span><strong>Interactive stylus whiteboard:</strong> Student & tutor solve equations simultaneously.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#48b76f] shrink-0 mt-0.5" />
                    <span><strong>Post-Lesson PDF notes:</strong> Multi-page color document emailed immediately following class.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#48b76f] shrink-0 mt-0.5" />
                    <span><strong>Easy digital question uploads:</strong> Screenshot textbook questions right into the lesson.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectDeliveryMode('online')}
                  className="w-full rounded-xl bg-[#48b76f] py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#3ca361]"
                >
                  Choose Online (Live Whiteboard) →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
