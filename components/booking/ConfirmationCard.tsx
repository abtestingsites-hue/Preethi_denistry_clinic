import React from "react";
import { CheckCircle2, Calendar, Clock, Phone, Sparkles, RefreshCw } from "lucide-react";
import { AppointmentSubmissionResponse, formatAppointmentDate } from "@/lib/appointmentService";
import { clinicInfo } from "@/data/clinicInfo";

interface ConfirmationCardProps {
  response: AppointmentSubmissionResponse;
  onReset: () => void;
}

export function ConfirmationCard({ response, onReset }: ConfirmationCardProps) {
  const { referenceNumber, data } = response;

  return (
    <div className="bg-[#FAFAF7] rounded-clinic-2xl border border-[#E7E9E2] p-6 sm:p-8 space-y-6 shadow-card animate-in fade-in duration-300">
      {/* Success Badge & Headline */}
      <div className="text-center space-y-3">
        <div className="w-14 h-14 mx-auto rounded-full bg-[#DCE8CF]/60 border border-[#607C55]/30 flex items-center justify-center text-[#607C55]">
          <CheckCircle2 className="w-8 h-8 text-[#607C55]" />
        </div>
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#607C55]">
            Request Received · Pending Clinical Confirmation
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#20231F]">
            Thank You, {data.patientName.split(" ")[0]}
          </h3>
          <p className="text-sm text-[#777D75] max-w-md mx-auto">
            Your appointment consultation request has been recorded for Dr. Preethi’s clinical reception team.
          </p>
        </div>
      </div>

      {/* Reference Strip */}
      <div className="p-4 rounded-2xl bg-[#F2F4EF] border border-[#E7E9E2] flex items-center justify-between text-xs sm:text-sm">
        <span className="text-[#777D75]">Booking Reference</span>
        <span className="font-mono font-bold text-[#20231F] tracking-wider bg-white px-3 py-1 rounded-lg border border-[#E7E9E2]">
          {referenceNumber}
        </span>
      </div>

      {/* Request Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
        <div className="p-3.5 rounded-xl bg-[#F2F4EF] border border-[#E7E9E2]/60 space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#777D75] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#607C55]" />
            Requested Treatment
          </span>
          <p className="font-medium text-[#20231F]">{data.preferredTreatment}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#F2F4EF] border border-[#E7E9E2]/60 space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#777D75] flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-[#607C55]" />
            Preferred Date
          </span>
          <p className="font-medium text-[#20231F]">
            {formatAppointmentDate(data.preferredDate)}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#F2F4EF] border border-[#E7E9E2]/60 space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#777D75] flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-[#607C55]" />
            Preferred Window
          </span>
          <p className="font-medium text-[#20231F]">{data.preferredTimeWindow}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#F2F4EF] border border-[#E7E9E2]/60 space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#777D75] flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-[#607C55]" />
            Contact Number
          </span>
          <p className="font-medium text-[#20231F]">{data.mobileNumber}</p>
        </div>
      </div>

      {/* Reassurance Notice Box */}
      <div className="p-4 rounded-2xl bg-[#DCE8CF]/35 border border-[#607C55]/25 text-xs text-[#20231F] leading-relaxed space-y-1.5">
        <p className="font-semibold text-[#607C55] flex items-center gap-1.5">
          <span>Important Confirmation Notice:</span>
        </p>
        <p>
          This is an appointment consultation request. Our clinic reception team in Saibaba Colony will
          reach out to you by phone or WhatsApp to finalize your consultation timing and answer any preliminary questions.
        </p>
        <p className="text-[11px] text-[#777D75] pt-1">
          Need immediate assistance? Call reception directly at{" "}
          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="font-semibold text-[#607C55] underline underline-offset-2"
          >
            {clinicInfo.phoneDisplay}
          </a>
          .
        </p>
      </div>

      {/* Reset CTA */}
      <div className="text-center pt-2">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#607C55] hover:text-[#20231F] py-2 px-4 rounded-full hover:bg-[#F2F4EF] transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Submit Another Request</span>
        </button>
      </div>
    </div>
  );
}
