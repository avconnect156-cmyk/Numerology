"use client";

import React, { useState } from "react";
import { generateReport, ConsultationData } from "../../Service/api";
import ConsultationSteps from "../ConsultationSteps";

const ConsultationBanner: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationData>({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    birthPlace: "",
    concern: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.gender) {
      setStatus({
        type: "error",
        message: "Please select a gender.",
      });
      return;
    }

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const pdfBlob = await generateReport(formData);

      const url = window.URL.createObjectURL(pdfBlob);

      const a = document.createElement("a");

      a.href = url;

      a.download = `Numerology_Report_${formData.fullName.replace(
        /\s+/g,
        "_"
      )}.pdf`;

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);

      setStatus({
        type: "success",
        message: "Report generated successfully! Download started.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        birthPlace: "",
        concern: "",
      });
    } catch (error: unknown) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to generate report.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-[54px] px-4 rounded-xl bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#FFD54F]/40 focus:border-[#FFD54F] transition";

  const labelClass =
    "block mb-2 text-sm font-medium text-black/80";

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,_#07111F_0%,_#0F172A_35%,_#134E4A_75%,_#14532D_100%)] py-24">

      {/* Main Layout */}
     {/* Section Heading */}
<div className="relative z-10 mx-auto mb-16 max-w-3xl px-6 text-center">

  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD54F]">
    Begin Your Journey
  </p>

  <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
    Unlock the Wisdom Hidden Within
    <span className="block bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#F4B400] bg-clip-text text-transparent">
      Your Birth Numbers
    </span>
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
    Share your details and receive a personalized numerology report designed
    to help you understand your path, potential, and future journey.
  </p>

</div>

{/* Main Layout */}
<main className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-16 px-6 md:px-12 lg:grid-cols-[1fr_520px]">

        {/* ================= LEFT SIDE ================= */}
        <ConsultationSteps />

        {/* ================= RIGHT SIDE - FORM ================= */}
        <div className="mx-auto mt-10 w-full max-w-lg lg:ml-auto lg:mt-18 lg:max-w-xl">

          <div className="rounded-3xl border border-[#FFD54F]/30 bg-gradient-to-br from-white via-[#FFFDF7] to-[#FFF7E6] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">

            {/* Status Message */}
            {status.message && (
              <div
                className={`mb-6 rounded-xl p-4 text-sm ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Heading */}
            <h2 className="text-center text-xl font-semibold text-[#0F172A]">
              SUBMIT YOUR DETAILS TO:
            </h2>

            <p className="mt-2 mb-10 text-center font-medium text-golden">
              Get Instant Access to A FREE Short Preview of Your Premium Life
              Path Report
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name */}
              <div>
                <label className={labelClass}>
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Full Name"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* Email */}
                <div>
                  <label className={labelClass}>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Email Address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClass}>
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Phone Number"
                  />
                </div>

              </div>

              {/* DOB + Gender */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* Date of Birth */}
                <div>
                  <label className={labelClass}>
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className={labelClass}>
                    Gender
                  </label>

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">
                      Select
                    </option>

                    <option value="male">
                      Male
                    </option>

                    <option value="female">
                      Female
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

              </div>

              {/* Birth Place */}
              <div>
                <label className={labelClass}>
                  Birth Place
                </label>

                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Birth Place"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] py-4 text-lg font-bold text-[#0F172A] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(255,213,79,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading
                  ? "Generating Report..."
                  : "Get Free Report"}
              </button>

            </form>

          </div>

        </div>

      </main>

    </div>
  );
};

export default ConsultationBanner;