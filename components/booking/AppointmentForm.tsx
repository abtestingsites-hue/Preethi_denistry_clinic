"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Calendar, Clock, Sparkles, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ConfirmationCard } from "./ConfirmationCard";
import {
  AppointmentFormData,
  AppointmentValidationErrors,
  AppointmentSubmissionResponse,
  validateAppointmentForm,
  submitAppointmentRequest,
} from "@/lib/appointmentService";
import { treatmentsData } from "@/data/treatmentsData";

interface AppointmentFormProps {
  initialTreatmentId?: string;
  onSuccess?: (response: AppointmentSubmissionResponse) => void;
  className?: string;
}

export function AppointmentForm({
  initialTreatmentId,
  onSuccess,
  className,
}: AppointmentFormProps) {
  const resolveTreatmentTitle = useCallback((idOrTitle?: string) => {
    if (!idOrTitle) return "";
    const match = treatmentsData.find(
      (t) =>
        t.id === idOrTitle ||
        t.slug === idOrTitle ||
        t.title.toLowerCase().includes(idOrTitle.toLowerCase())
    );
    return match ? match.title : idOrTitle;
  }, []);

  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: "",
    mobileNumber: "",
    emailAddress: "",
    preferredTreatment: resolveTreatmentTitle(initialTreatmentId),
    preferredDate: "",
    preferredTimeWindow: "Morning (09:30 AM – 01:00 PM)",
    additionalMessage: "",
    consentAcknowledged: true,
  });

  const [errors, setErrors] = useState<AppointmentValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResponse, setSubmissionResponse] =
    useState<AppointmentSubmissionResponse | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  useEffect(() => {
    if (initialTreatmentId) {
      setFormData((prev) => ({
        ...prev,
        preferredTreatment: resolveTreatmentTitle(initialTreatmentId),
      }));
    }
  }, [initialTreatmentId, resolveTreatmentTitle]);

  const todayString = new Date().toISOString().split("T")[0];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof AppointmentValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    const validationErrors = validateAppointmentForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      const element = document.getElementById(`field-${firstErrorKey}`);
      if (element) element.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitAppointmentRequest(formData);
      setSubmissionResponse(response);
      if (onSuccess) onSuccess(response);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while processing your request.";
      setGeneralError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmissionResponse(null);
    setFormData({
      patientName: "",
      mobileNumber: "",
      emailAddress: "",
      preferredTreatment: "",
      preferredDate: "",
      preferredTimeWindow: "Morning (09:30 AM – 01:00 PM)",
      additionalMessage: "",
      consentAcknowledged: true,
    });
    setErrors({});
  };

  if (submissionResponse) {
    return (
      <ConfirmationCard
        response={submissionResponse}
        onReset={handleResetForm}
      />
    );
  }

  const timeWindows = [
    "Morning (09:30 AM – 01:00 PM)",
    "Afternoon (02:00 PM – 05:00 PM)",
    "Evening (05:00 PM – 08:00 PM)",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-[#FAFAF7] rounded-clinic-2xl border border-[#E7E9E2] p-6 sm:p-8 space-y-6 shadow-card ${className || ""}`}
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#607C55]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Consultation</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#20231F]">
          Request an Appointment
        </h3>
        <p className="text-xs sm:text-sm text-[#777D75]">
          Please submit your contact details and preferred slot. Our reception team in Saibaba Colony will contact you to confirm timing.
        </p>
      </div>

      {generalError && (
        <div
          role="alert"
          className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{generalError}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Patient Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="field-patientName"
            className="block text-xs font-semibold uppercase tracking-wider text-[#20231F]"
          >
            Full Name <span className="text-[#607C55]">*</span>
          </label>
          <input
            id="field-patientName"
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            placeholder="e.g. Anandha Kumar"
            aria-required="true"
            aria-invalid={!!errors.patientName}
            aria-describedby={errors.patientName ? "err-patientName" : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#20231F] placeholder:text-[#777D75]/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55] ${
              errors.patientName
                ? "border-red-400 bg-red-50/20"
                : "border-[#E7E9E2] bg-[#F2F4EF] focus:bg-white focus:border-[#607C55]"
            }`}
          />
          {errors.patientName && (
            <p id="err-patientName" className="text-xs text-red-600 font-medium">
              {errors.patientName}
            </p>
          )}
        </div>

        {/* Mobile Number & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="field-mobileNumber"
              className="block text-xs font-semibold uppercase tracking-wider text-[#20231F]"
            >
              Mobile Number <span className="text-[#607C55]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-[#777D75]">
                +91
              </span>
              <input
                id="field-mobileNumber"
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="98765 43210"
                maxLength={12}
                aria-required="true"
                aria-invalid={!!errors.mobileNumber}
                aria-describedby={
                  errors.mobileNumber ? "err-mobileNumber" : undefined
                }
                className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm text-[#20231F] placeholder:text-[#777D75]/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55] ${
                  errors.mobileNumber
                    ? "border-red-400 bg-red-50/20"
                    : "border-[#E7E9E2] bg-[#F2F4EF] focus:bg-white focus:border-[#607C55]"
                }`}
              />
            </div>
            {errors.mobileNumber && (
              <p id="err-mobileNumber" className="text-xs text-red-600 font-medium">
                {errors.mobileNumber}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="field-emailAddress"
              className="block text-xs font-semibold uppercase tracking-wider text-[#20231F]"
            >
              Email Address <span className="text-xs font-normal text-[#777D75]">(Optional)</span>
            </label>
            <input
              id="field-emailAddress"
              type="email"
              name="emailAddress"
              value={formData.emailAddress || ""}
              onChange={handleInputChange}
              placeholder="name@example.com"
              aria-invalid={!!errors.emailAddress}
              aria-describedby={
                errors.emailAddress ? "err-emailAddress" : undefined
              }
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#20231F] placeholder:text-[#777D75]/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55] ${
                errors.emailAddress
                  ? "border-red-400 bg-red-50/20"
                  : "border-[#E7E9E2] bg-[#F2F4EF] focus:bg-white focus:border-[#607C55]"
              }`}
            />
            {errors.emailAddress && (
              <p id="err-emailAddress" className="text-xs text-red-600 font-medium">
                {errors.emailAddress}
              </p>
            )}
          </div>
        </div>

        {/* Treatment Preference */}
        <div className="space-y-1.5">
          <label
            htmlFor="field-preferredTreatment"
            className="block text-xs font-semibold uppercase tracking-wider text-[#20231F]"
          >
            Preferred Treatment or Consultation <span className="text-[#607C55]">*</span>
          </label>
          <select
            id="field-preferredTreatment"
            name="preferredTreatment"
            value={formData.preferredTreatment}
            onChange={handleInputChange}
            aria-required="true"
            aria-invalid={!!errors.preferredTreatment}
            aria-describedby={
              errors.preferredTreatment ? "err-preferredTreatment" : undefined
            }
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#20231F] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55] ${
              errors.preferredTreatment
                ? "border-red-400 bg-red-50/20"
                : "border-[#E7E9E2] bg-[#F2F4EF] focus:bg-white focus:border-[#607C55]"
            }`}
          >
            <option value="">Select a treatment consultation...</option>
            {treatmentsData.map((t) => (
              <option key={t.id} value={t.title}>
                {t.title}
              </option>
            ))}
            <option value="Invisalign® & Clear Aligners Consultation">
              Invisalign® & Clear Aligners Consultation
            </option>
            <option value="Initial Oral Examination & General Check-Up">
              Initial Oral Examination & General Check-Up
            </option>
            <option value="Cosmetic Smile Consultation">
              Cosmetic Smile Consultation
            </option>
          </select>
          {errors.preferredTreatment && (
            <p id="err-preferredTreatment" className="text-xs text-red-600 font-medium">
              {errors.preferredTreatment}
            </p>
          )}
        </div>

        {/* Date & Time Slot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="field-preferredDate"
              className="block text-xs font-semibold uppercase tracking-wider text-[#20231F]"
            >
              Preferred Date <span className="text-[#607C55]">*</span>
            </label>
            <div className="relative">
              <input
                id="field-preferredDate"
                type="date"
                name="preferredDate"
                min={todayString}
                value={formData.preferredDate}
                onChange={handleInputChange}
                aria-required="true"
                aria-invalid={!!errors.preferredDate}
                aria-describedby={
                  errors.preferredDate ? "err-preferredDate" : undefined
                }
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#20231F] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55] ${
                  errors.preferredDate
                    ? "border-red-400 bg-red-50/20"
                    : "border-[#E7E9E2] bg-[#F2F4EF] focus:bg-white focus:border-[#607C55]"
                }`}
              />
            </div>
            {errors.preferredDate && (
              <p id="err-preferredDate" className="text-xs text-red-600 font-medium">
                {errors.preferredDate}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="field-preferredTimeWindow"
              className="block text-xs font-semibold uppercase tracking-wider text-[#20231F]"
            >
              Preferred Window <span className="text-[#607C55]">*</span>
            </label>
            <select
              id="field-preferredTimeWindow"
              name="preferredTimeWindow"
              value={formData.preferredTimeWindow}
              onChange={handleInputChange}
              aria-required="true"
              className="w-full px-4 py-3 rounded-xl border border-[#E7E9E2] bg-[#F2F4EF] text-sm text-[#20231F] focus:bg-white focus:border-[#607C55] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55]"
            >
              {timeWindows.map((tw) => (
                <option key={tw} value={tw}>
                  {tw}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Clinical Notes */}
        <div className="space-y-1.5">
          <label
            htmlFor="field-additionalMessage"
            className="block text-xs font-semibold uppercase tracking-wider text-[#20231F]"
          >
            Clinical Notes or Questions <span className="text-xs font-normal text-[#777D75]">(Optional)</span>
          </label>
          <textarea
            id="field-additionalMessage"
            name="additionalMessage"
            rows={3}
            value={formData.additionalMessage || ""}
            onChange={handleInputChange}
            placeholder="Please mention any tooth sensitivity, aesthetic aspirations, or past treatments..."
            className="w-full px-4 py-3 rounded-xl border border-[#E7E9E2] bg-[#F2F4EF] text-sm text-[#20231F] placeholder:text-[#777D75]/60 focus:bg-white focus:border-[#607C55] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55] transition-all resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              name="consentAcknowledged"
              checked={formData.consentAcknowledged}
              onChange={handleInputChange}
              aria-required="true"
              className="mt-1 w-4 h-4 rounded border-[#E7E9E2] text-[#607C55] focus:ring-[#607C55] focus:ring-offset-0"
            />
            <span className="text-xs text-[#777D75] leading-relaxed">
              I authorize Dr. Preethi’s Dentistry reception to contact me via mobile/WhatsApp regarding this appointment enquiry. I agree to the{" "}
              <Link
                href="/privacy"
                target="_blank"
                className="text-[#20231F] underline underline-offset-2 hover:text-[#607C55]"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.consentAcknowledged && (
            <p className="text-xs text-red-600 font-medium mt-1">
              {errors.consentAcknowledged}
            </p>
          )}
        </div>
      </div>

      {/* Submit Action */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full py-4 text-base font-medium shadow-card"
          rightIcon={<Send className="w-4 h-4" />}
        >
          Request an Appointment
        </Button>
        <p className="text-center text-[11px] text-[#777D75] pt-2.5">
          Consultation requests are confirmed individually by reception. No online payment required.
        </p>
      </div>
    </form>
  );
}
