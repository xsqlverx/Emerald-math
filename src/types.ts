export type DeliveryMode = 'in-person' | 'online' | 'either';

export type StudentGrade =
  | 'Grade 5'
  | 'Grade 6'
  | 'Grade 7'
  | 'Grade 8'
  | 'Grade 9 (MTH1W De-streamed)'
  | 'Grade 10 (MPM2D Principles of Math)'
  | 'Grade 11 (MCR3U Functions)'
  | 'Grade 12 (MHF4U Advanced Functions)'
  | 'Grade 12 (MCV4U Calculus & Vectors)'
  | 'Grade 12 (MDM4U Data Management)';

export interface IntakeFormData {
  parentName: string;
  phoneNumber: string;
  email?: string;
  studentGrade: string;
  preferredMode: DeliveryMode;
  notes?: string;
  requestAssessmentConsent?: boolean;
}

export interface CurriculumTrack {
  id: string;
  title: string;
  gradeSpan: string;
  badge: string;
  summary: string;
  courses: {
    code?: string;
    name: string;
    focus: string[];
  }[];
  keyTakeaway: string;
}
