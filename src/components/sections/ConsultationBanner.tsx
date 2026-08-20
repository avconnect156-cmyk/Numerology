"use client";

import React, { useState } from "react";
import { generateReport } from "../../Service/api";
import ConsultationSteps from "../ConsultationSteps";

const ConsultationBanner: React.FC = () => {
  const [formData, setFormData] = useState({
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
    const { name, value } = e.target;

    let newValue = value;

    // Allow only digits for phone number
    if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your full name.",
      });
      return;
    }

    if (!formData.gender) {
      setStatus({
        type: "error",
        message: "Please select a gender.",
      });
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setStatus({
        type: "error",
        message: "Please enter a valid 10-digit phone number.",
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
  "w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white text-[#0F172A] text-lg shadow-sm transition-all duration-300 outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 hover:border-[#D4AF37]";

  const labelClass =
    "block mb-2 text-sm font-medium text-black/80";

  return (
    <div className="w-full bg-gradient-to-b from-[#0B1020] to-[#111827] py-16">
  <main className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-2">

    {/* Left Side */}
    <ConsultationSteps />

    {/* Right Side */}
    <div className="mx-auto w-full max-w-xl">

      <div className="rounded-3xl border border-[#FFD54F]/30 bg-gradient-to-br from-white via-[#FFFDF7] to-[#FFF7E6] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

        {/* Status */}
        {status.message && (
          <div
            className={`mb-6 rounded-xl p-4 text-sm ${
              status.type === "success"
                ? "border border-green-300 bg-green-100 text-green-700"
                : "border border-red-300 bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <h2 className="text-center text-2xl font-bold text-[#0F172A]">
          SUBMIT YOUR DETAILS TO:
        </h2>

        <p className="mt-3 mb-8 text-center text-[#C69214] font-medium">
          Get Instant Access to A FREE Short Preview of Your Premium Life Path
          Report
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className={labelClass}>Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="Enter your full name"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label className={labelClass}>Email</label>

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

            <div>
              <label className={labelClass}>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength={10}
                inputMode="numeric"
                pattern="[0-9]{10}"
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
      className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-lg text-[#0F172A] shadow-sm transition-all duration-300 outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 hover:border-[#D4AF37]"
    />
  </div>

  {/* Gender */}
  <div className="relative">
    <label className={labelClass}>
      Gender
    </label>

    <select
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      required
      className="w-full h-14 appearance-none rounded-2xl border border-gray-200 bg-white px-5 pr-12 text-lg text-[#0F172A] shadow-sm transition-all duration-300 outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 hover:border-[#D4AF37]"
    >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>

    {/* Custom Dropdown Arrow */}
    <svg
      className="pointer-events-none absolute right-4 top-[52px] h-5 w-5 -translate-y-1/2 text-[#D4AF37]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>

</div>
          {/* Birth Place */}
          <div>
            <label className={labelClass}>Birth Place</label>

            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter Birth Place"
            />
          </div>

          {/* Concern */}
          <div>
            <label className={labelClass}>
              Concern (Optional)
            </label>

            <input
              type="text"
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className={inputClass}
              placeholder="Career, Marriage, Health, Finance..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] py-4 text-lg font-bold text-[#0F172A] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(255,213,79,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Generating Report..." : "Get Free Report"}
          </button>

        </form>

      </div>

    </div>

  </main>
  </div>
  );
};

export default ConsultationBanner;