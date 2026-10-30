/**
 * Dr. Preethi's Dentistry — Appointment Request Service (Mock Adapter)
 *
 * This module encapsulates all validation and appointment submission logic for Phase 2.
 * In frontend scope, submissions are handled locally via simulated async network delay.
 * In future backend integration, swap the body of `submitAppointmentRequest()` to invoke
 * your production API endpoint (e.g., fetch('/api/appointments', { ... })) without
 * modifying the UI components.
 */

export interface AppointmentFormData {
  patientName: string;
  mobileNumber: string;
  emailAddress?: string;
  preferredTreatment: string;
  preferredDate: string;
  preferredTimeWindow: string;
  additionalMessage?: string;
  consentAcknowledged: boolean;
}

export interface AppointmentValidationErrors {
  patientName?: string;
  mobileNumber?: string;
  emailAddress?: string;
  preferredTreatment?: string;
  preferredDate?: string;
  preferredTimeWindow?: string;
  consentAcknowledged?: string;
  general?: string;
}

export interface AppointmentSubmissionResponse {
  success: boolean;
  referenceNumber: string;
  submissionTimestamp: string;
  data: AppointmentFormData;
  message: string;
  isMockSimulation: boolean;
}

// Indian 10-digit mobile number pattern (starts with 6, 7, 8, or 9)
const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

// Standard RFC-compliant email regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates the appointment request fields according to clinical reception requirements.
 */
export function validateAppointmentForm(
  data: AppointmentFormData
): AppointmentValidationErrors {
  const errors: AppointmentValidationErrors = {};

  // 1. Patient Name Validation
  const trimmedName = data.patientName?.trim() || "";
  if (!trimmedName) {
    errors.patientName = "Please enter your full name.";
  } else if (trimmedName.length < 2) {
    errors.patientName = "Name must be at least 2 characters.";
  } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
    errors.patientName = "Please enter a valid name using letters only.";
  }

  // 2. Indian Mobile Number Validation
  const cleanMobile = (data.mobileNumber || "").replace(/[\s\-\(\)\+]/g, "");
  // If user entered with 91 prefix, strip it for check
  const normalizedMobile =
    cleanMobile.startsWith("91") && cleanMobile.length === 12
      ? cleanMobile.slice(2)
      : cleanMobile;

  if (!data.mobileNumber || !data.mobileNumber.trim()) {
    errors.mobileNumber = "Mobile number is required for appointment confirmation.";
  } else if (!INDIAN_MOBILE_REGEX.test(normalizedMobile)) {
    errors.mobileNumber =
      "Please enter a valid 10-digit Indian mobile number (e.g. 98765 43210).";
  }

  // 3. Email Validation (Optional)
  if (data.emailAddress && data.emailAddress.trim()) {
    const trimmedEmail = data.emailAddress.trim();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      errors.emailAddress = "Please enter a valid email address.";
    }
  }

  // 4. Preferred Treatment
  if (!data.preferredTreatment || !data.preferredTreatment.trim()) {
    errors.preferredTreatment = "Please select a consultation type or treatment.";
  }

  // 5. Preferred Date (Past dates prohibited)
  if (!data.preferredDate) {
    errors.preferredDate = "Please choose a preferred appointment date.";
  } else {
    const selectedDate = new Date(data.preferredDate + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime())) {
      errors.preferredDate = "Please enter a valid calendar date.";
    } else if (selectedDate < today) {
      errors.preferredDate = "Please select today or a future date.";
    }
  }

  // 6. Preferred Time Window
  if (!data.preferredTimeWindow || !data.preferredTimeWindow.trim()) {
    errors.preferredTimeWindow = "Please select a preferred time slot.";
  }

  // 7. Consent Acknowledgment
  if (!data.consentAcknowledged) {
    errors.consentAcknowledged =
      "Please consent to clinical contact regarding your appointment request.";
  }

  return errors;
}

/**
 * Generates an appointment request tracking reference (e.g. DPD-2026-X8F2).
 */
export function generateReferenceNumber(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let randomCode = "";
  for (let i = 0; i < 4; i++) {
    randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `DPD-2026-${randomCode}`;
}

/**
 * Formats a date string (YYYY-MM-DD) into readable format.
 */
export function formatAppointmentDate(dateString: string): string {
  if (!dateString) return "";
  try {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

/**
 * Frontend Mock Adapter for Appointment Submission.
 * Simulates network latency and returns a structured response without connecting to an actual backend.
 */
export async function submitAppointmentRequest(
  formData: AppointmentFormData
): Promise<AppointmentSubmissionResponse> {
  // Validate upfront
  const validationErrors = validateAppointmentForm(formData);
  if (Object.keys(validationErrors).length > 0) {
    throw new Error(
      validationErrors.patientName ||
      validationErrors.mobileNumber ||
      validationErrors.preferredDate ||
      validationErrors.preferredTreatment ||
      "Please correct the errors in the form before submitting."
    );
  }

  // Realistic network delay simulation (1100ms)
  await new Promise((resolve) => setTimeout(resolve, 1100));

  const referenceNumber = generateReferenceNumber();
  const submissionTimestamp = new Date().toISOString();

  return {
    success: true,
    referenceNumber,
    submissionTimestamp,
    data: { ...formData },
    message:
      "Your appointment consultation enquiry has been recorded. Our clinical reception in Saibaba Colony will contact you shortly to confirm your consultation schedule.",
    isMockSimulation: true,
  };
}

