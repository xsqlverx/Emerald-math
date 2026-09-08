import React, { useState } from 'react';
import {
  CalendarCheck,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  ShieldCheck,
  User,
  GraduationCap,
  Sparkles,
  Send,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { DeliveryMode, IntakeFormData } from '../types';

interface IntakeFormProps {
  initialGrade?: string;
  initialMode?: DeliveryMode;
  phoneNumber?: string;
}

const GRADE_OPTIONS = [
  'Grade 5 (Foundations & Mental Math)',
  'Grade 6 (Decimals, Fractions, EQAO)',
  'Grade 7 (Pre-Algebra & Proportions)',
  'Grade 8 (High School Transition & Integers)',
  'Grade 9 (MTH1W De-streamed Math)',
  'Grade 10 (MPM2D Principles of Math)',
  'Grade 11 (MCR3U Functions)',
  'Grade 11 (MCF3M Functions & Applications)',
  'Grade 12 (MHF4U Advanced Functions)',
  'Grade 12 (MCV4U Calculus & Vectors)',
  'Grade 12 (MDM4U Data Management)',
];

export const IntakeForm: React.FC<IntakeFormProps> = ({
  initialGrade = 'Grade 9 (MTH1W De-streamed Math)',
  initialMode = 'in-person',
  phoneNumber = '(905) 431-7290',
}) => {
  const [formData, setFormData] = useState<IntakeFormData>({
    parentName: '',
    phoneNumber: '',
    email: '',
    studentGrade: initialGrade,
    preferredMode: initialMode,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initial props if changed externally (e.g., clicking a curriculum card)
  React.useEffect(() => {
    if (initialGrade) {
      setFormData((prev) => ({ ...prev, studentGrade: initialGrade }));
    }
  }, [initialGrade]);

  React.useEffect(() => {
    if (initialMode) {
      setFormData((prev) => ({ ...prev, preferredMode: initialMode }));
    }
  }, [initialMode]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Please enter parent or guardian name';
    }
    const cleanPhone = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.studentGrade) {
      newErrors.studentGrade = 'Please select your student’s grade';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift local processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <section
      id="assessment-intake"
      className="scroll-mt-20 py-8 sm:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 bg-[#48b76f]/15 text-[#26663f] text-xs font-bold rounded-full uppercase tracking-wider">
                Direct Scheduling
              </span>
              <span className="px-3 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                Zero Obligation
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Schedule Your Free 20-Minute Assessment
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Reserve a diagnostic call with Joseph to evaluate your student's Ontario curriculum readiness and upcoming unit targets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Bento Dark Emerald Intake Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#1b4e30] bg-[#123924] p-6 sm:p-8 text-white shadow-md relative overflow-hidden h-full flex flex-col justify-between">
              {/* Subtle Bento Background Glow */}
              <div
                className="pointer-events-none absolute top-0 right-0 h-48 w-48 -mr-12 -mt-12 rounded-full bg-[#48b76f]/20 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-[#1b4e30] pb-4 mb-5">
                  <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <CalendarCheck className="h-5 w-5 text-[#8de4a8]" />
                    <span>Free Assessment Form</span>
                  </h3>
                  <span className="text-[11px] font-bold text-[#dcf5e5] bg-[#1b4e30] px-2.5 py-1 rounded-full border border-[#26663f]">
                    20-Min Call
                  </span>
                </div>

                {submitted ? (
                  <div
                    id="intake-confirmation"
                    className="text-center py-6 space-y-4"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#48b76f]/20 text-[#8de4a8] ring-4 ring-[#48b76f]/15">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Assessment Request Received!
                    </h3>
                    <p className="text-sm text-[#dcf5e5] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.parentName}</strong>. Joseph will review the background for <strong>{formData.studentGrade}</strong> and call you at{' '}
                      <strong>{formData.phoneNumber}</strong> within 1 business day.
                    </p>

                    <div className="my-5 rounded-xl bg-[#1b4e30]/90 p-4 border border-[#26663f] text-left text-xs space-y-2 max-w-md mx-auto text-[#dcf5e5]">
                      <div className="flex justify-between">
                        <span className="text-[#8de4a8]">Student Grade:</span>
                        <span className="font-semibold text-white">{formData.studentGrade}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8de4a8]">Delivery Mode:</span>
                        <span className="font-semibold text-white capitalize">
                          {formData.preferredMode === 'in-person'
                            ? 'In-Person (Courtice Studio)'
                            : 'Online (Live Whiteboard)'}
                        </span>
                      </div>
                      {formData.notes && (
                        <div className="pt-2 border-t border-[#26663f]">
                          <span className="text-[#8de4a8] block mb-0.5">Notes:</span>
                          <span className="text-[#dcf5e5] italic">"{formData.notes}"</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                      <a
                        href={`tel:1${cleanPhone}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#48b76f] hover:bg-[#3ca361] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call Joseph Directly</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData((prev) => ({ ...prev, parentName: '', phoneNumber: '', notes: '' }));
                        }}
                        className="inline-flex items-center justify-center rounded-xl border border-[#26663f] bg-[#1b4e30]/80 px-4 py-2.5 text-sm font-semibold text-[#dcf5e5] hover:bg-[#1b4e30] transition"
                      >
                        Submit Another Student
                      </button>
                    </div>
                  </div>
                ) : (
                  <form id="math-assessment-form" onSubmit={handleSubmit} className="space-y-4">
                    {/* Parent Name */}
                    <div>
                      <label
                        htmlFor="parentName"
                        className="block text-xs font-semibold text-[#dcf5e5] uppercase mb-1"
                      >
                        Parent / Guardian Name <span className="text-[#8de4a8]">*</span>
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => {
                          setFormData({ ...formData, parentName: e.target.value });
                          if (errors.parentName) setErrors({ ...errors, parentName: '' });
                        }}
                        placeholder="Jane Doe"
                        className={`w-full rounded-lg bg-[#1a442c]/90 border px-3 py-2.5 text-sm text-white placeholder-[#8de4a8]/50 focus:outline-none focus:ring-2 focus:ring-[#48b76f] ${
                          errors.parentName ? 'border-rose-400 ring-1 ring-rose-400' : 'border-[#26663f]'
                        }`}
                      />
                      {errors.parentName && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-rose-300">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.parentName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-xs font-semibold text-[#dcf5e5] uppercase mb-1"
                      >
                        Phone Number <span className="text-[#8de4a8]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={(e) => {
                          setFormData({ ...formData, phoneNumber: e.target.value });
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                        }}
                        placeholder="(289) 555-0123"
                        className={`w-full rounded-lg bg-[#1a442c]/90 border px-3 py-2.5 text-sm text-white placeholder-[#8de4a8]/50 focus:outline-none focus:ring-2 focus:ring-[#48b76f] ${
                          errors.phoneNumber ? 'border-rose-400 ring-1 ring-rose-400' : 'border-[#26663f]'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-rose-300">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    {/* Student Grade Dropdown */}
                    <div>
                      <label
                        htmlFor="studentGrade"
                        className="block text-xs font-semibold text-[#dcf5e5] uppercase mb-1"
                      >
                        Student Grade <span className="text-[#8de4a8]">*</span>
                      </label>
                      <select
                        id="studentGrade"
                        value={formData.studentGrade}
                        onChange={(e) => {
                          setFormData({ ...formData, studentGrade: e.target.value });
                          if (errors.studentGrade) setErrors({ ...errors, studentGrade: '' });
                        }}
                        className={`w-full rounded-lg bg-[#1a442c]/90 border px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#48b76f] ${
                          errors.studentGrade ? 'border-rose-400 ring-1 ring-rose-400' : 'border-[#26663f]'
                        }`}
                      >
                        {GRADE_OPTIONS.map((g) => (
                          <option key={g} value={g} className="bg-slate-900 text-white">
                            {g}
                          </option>
                        ))}
                      </select>
                      {errors.studentGrade && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-rose-300">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.studentGrade}
                        </p>
                      )}
                    </div>

                    {/* Preferred Mode (Bento Style Buttons) */}
                    <div>
                      <label className="block text-xs font-semibold text-[#dcf5e5] uppercase mb-1">
                        Preferred Mode <span className="text-[#8de4a8]">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredMode: 'in-person' })}
                          className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                            formData.preferredMode === 'in-person'
                              ? 'bg-[#26663f] border-[#48b76f] text-white shadow-xs ring-1 ring-[#48b76f]'
                              : 'bg-[#1a442c]/70 border-[#26663f] text-[#dcf5e5] hover:bg-[#26663f]/60'
                          }`}
                        >
                          <MapPin className="h-3.5 w-3.5 text-[#8de4a8]" />
                          <span>In-Person (Courtice)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredMode: 'online' })}
                          className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                            formData.preferredMode === 'online'
                              ? 'bg-[#26663f] border-[#48b76f] text-white shadow-xs ring-1 ring-[#48b76f]'
                              : 'bg-[#1a442c]/70 border-[#26663f] text-[#dcf5e5] hover:bg-[#26663f]/60'
                          }`}
                        >
                          <Sparkles className="h-3.5 w-3.5 text-[#8de4a8]" />
                          <span>Online (Whiteboard)</span>
                        </button>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-xs font-semibold text-[#dcf5e5] uppercase mb-1"
                      >
                        Specific Math Topic or Challenge (Optional)
                      </label>
                      <textarea
                        id="notes"
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Preparing for Grade 10 quadratics or Grade 11 functions unit test..."
                        className="w-full rounded-lg bg-[#1a442c]/90 border border-[#26663f] p-2.5 text-sm text-white placeholder-[#8de4a8]/50 focus:outline-none focus:ring-2 focus:ring-[#48b76f]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-assessment-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#48b76f] hover:bg-[#3ca361] text-white font-bold py-3 rounded-xl transition-all shadow-md mt-2 active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <CalendarCheck className="h-5 w-5" />
                          <span>Claim Free 20-Min Call</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8de4a8] pt-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#48b76f]" />
                      <span>Confidential • Never shared • Quick 1-on-1 response</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Box Column (Clean White Bento Cell) */}
          <div className="lg:col-span-5">
            <div
              id="contact-box"
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    Courtice Studio & Hours
                  </h3>
                  <span className="text-[10px] bg-[#48b76f]/15 text-[#26663f] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Taking Students
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Courtice Location Placeholder */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#48b76f]/10 text-[#3ca361] shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Courtice Location Placeholder
                      </h4>
                      <p className="mt-0.5 text-sm font-semibold text-slate-900">
                        Central Courtice, Ontario
                      </p>
                      <p className="text-xs text-slate-500">
                        Near Highway 2 & Townline Rd. Serving Courtice, Bowmanville, and Oshawa.
                      </p>
                    </div>
                  </div>

                  {/* Direct Phone */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#48b76f]/10 text-[#3ca361] shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Direct Phone
                      </h4>
                      <a
                        href={`tel:1${cleanPhone}`}
                        className="mt-0.5 block text-base font-bold text-[#3ca361] hover:text-[#26663f] transition"
                      >
                        {phoneNumber}
                      </a>
                      <p className="text-xs text-slate-500">
                        Direct line to Joseph. Call or text anytime.
                      </p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Operating Hours
                      </span>
                      <span className="text-[11px] font-semibold text-slate-600">
                        EST
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex justify-between border-b border-slate-200/60 pb-1">
                        <span className="font-semibold text-slate-800">Monday – Thursday:</span>
                        <span>3:00 PM – 9:00 PM</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/60 pb-1">
                        <span className="font-semibold text-slate-800">Friday:</span>
                        <span>3:00 PM – 7:00 PM</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/60 pb-1">
                        <span className="font-semibold text-slate-800">Saturday:</span>
                        <span>9:00 AM – 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-slate-800">Sunday:</span>
                        <span>By Appointment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Direct 1-on-1 tutoring</span>
                <span className="font-semibold text-[#26663f]">Mon-Sat Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
