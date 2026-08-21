"use client";

import { useState } from "react";

import {
  submitModal,
  generateReport,
  createPaymentOrder,
} from "../../Service/api";

type FormState = {
  name: string;
  birthName: string;
  dob: string;
  birthTime: string;
  phone: string;
  email: string;
  birthPlace: string;
};

type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayFailureResponse = {
  error?: {
    description?: string;
  };
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  order_id: string;
  name: string;
  description: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  handler: (response: RazorpayResponse) => Promise<void>;
};

type RazorpayInstance = {
  on: (
    eventName: "payment.failed",
    callback: (response: RazorpayFailureResponse) => void
  ) => void;
  open: () => void;
};

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const initialForm: FormState = {
    name: "",
    birthName: "",
    dob: "",
    birthTime: "",
    phone: "",
    email: "",
    birthPlace: "",
  };

  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    if (loading) return;

    setForm(initialForm);
    setStatus(null);
    onClose();
  };

  const loadRazorpayScript = async (): Promise<boolean> => {
    if (window.Razorpay) return true;

    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const generateAndDownloadReport = async (
    response: RazorpayResponse
  ) => {
    try {
      setStatus({
        type: "success",
        message: "Payment successful. Generating report...",
      });

      await submitModal({
        fullName: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        dob: form.dob,
        birthPlace: form.birthPlace.trim(),
      });

      const pdfBlob = await generateReport({
        fullName: form.name.trim(),
        birthName: form.birthName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        dob: form.dob,
        birthTime: form.birthTime,
        birthPlace: form.birthPlace.trim(),
        ...response,
      });

      const url = URL.createObjectURL(pdfBlob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `Numerology_Report_${form.name.replace(
        /\s+/g,
        "_"
      )}.pdf`;

      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(url);

      setStatus({
        type: "success",
        message: "Report downloaded successfully!",
      });

      setTimeout(handleClose, 3000);
    } catch (error) {
      console.error("Report generation error:", error);

      setStatus({
        type: "error",
        message:
          "Payment completed but report generation failed.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRazorpayPayment = async () => {
    const loaded = await loadRazorpayScript();

    if (!loaded) {
      throw new Error(
        "Failed to load Razorpay. Check your internet connection."
      );
    }

    const { data } = await createPaymentOrder();

    if (!data?.orderId) {
      throw new Error("Payment initialization failed");
    }

    const options = {
      key:
        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ??
        "rzp_test_SfdcuN5bv09PMM",

      amount: data.amount,
      currency: data.currency,
      order_id: data.orderId,

      name: "Numerology Report",

      description:
        "Payment for Personalized Numerology Report",

      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },

      theme: {
        color: "#D4AF37",
      },

      handler: async (
        response: RazorpayResponse
      ) => {
        await generateAndDownloadReport(response);
      },
    };

    const Razorpay = window.Razorpay;

    if (!Razorpay) {
      throw new Error("Razorpay checkout is unavailable.");
    }

    const razorpay = new Razorpay(options);

    razorpay.on(
      "payment.failed",
      (response: RazorpayFailureResponse) => {
        setLoading(false);

        setStatus({
          type: "error",
          message:
            response?.error?.description ??
            "Payment failed",
        });
      }
    );

    razorpay.open();
  };

  const handleSubmit = async () => {
    if (loading) return;

    if (
      !form.name.trim() ||
      !form.birthName.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.dob ||
      !form.birthPlace.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill all required fields.",
      });

      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      await handleRazorpayPayment();
    } catch (error) {
      console.error("Payment error:", error);

      setLoading(false);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      });
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#D4AF37]/25 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-[#FFD700]/70 focus:bg-white/10 focus:ring-1 focus:ring-[#FFD700]/30 [color-scheme:dark]";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[#D4AF37]/30 bg-[linear-gradient(145deg,#020617_0%,#0F172A_55%,#134E4A_100%)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.7)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#FFD700]/10 blur-3xl" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          disabled={loading}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-400 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#FFD700]/10 hover:text-[#FFD700] disabled:cursor-not-allowed disabled:opacity-40"
        >
          ×
        </button>

        {/* Header */}
        <div className="relative mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#FFD700]/10 text-xl">
            ✨
          </div>

          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Get Your Personalized
            <span className="block text-[#FFD700]">
              Numerology Report
            </span>
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Enter your details below to generate your
            personalized report.
          </p>
        </div>

        {/* Form */}
        <div className="relative space-y-4">
          {/* Current Name */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Current Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              className={inputClass}
            />
          </div>

          {/* Birth Name */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Full Name at Birth
            </label>

            <input
              type="text"
              name="birthName"
              placeholder="Enter your birth name"
              value={form.birthName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* DOB + Birth Time */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Date of Birth */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Date of Birth
              </label>

              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Birth Time */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Birth Time
              </label>

              <input
                type="time"
                name="birthTime"
                value={form.birthTime}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Birth Place */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Birth Place
            </label>

            <input
              type="text"
              name="birthPlace"
              placeholder="Enter your birth place"
              value={form.birthPlace}
              onChange={handleChange}
              autoComplete="address-level2"
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className={inputClass}
            />
          </div>

          {/* Status */}
          {status && (
            <div
              className={`rounded-xl border px-4 py-3 text-center text-sm ${
                status.type === "success"
                  ? "border-green-500/20 bg-green-500/10 text-green-400"
                  : "border-red-500/20 bg-red-500/10 text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#B8860B] py-3.5 font-bold uppercase tracking-wide text-[#020617] shadow-[0_8px_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-[1.01] hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#020617]/30 border-t-[#020617]" />
                Processing...
              </span>
            ) : (
              "Get My Report"
            )}
          </button>

          {/* Secure Payment Text */}
          <p className="text-center text-[11px] text-slate-500">
            🔒 Secure payment powered by Razorpay
          </p>
        </div>
      </div>
    </div>
  );
}
