"use client";

import React, { useState } from "react";
import { generateReport, ConsultationData } from "../../Service/api";

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
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-16 items-start">
        
        {/* LEFT SIDE */}
{/* LEFT SIDE */}
<div className="relative max-w-xl">

  {/* Timeline */}
  <div className="relative">

    {/* Vertical Line */}
    <div className="absolute left-[7px] top-2 bottom-[88px] w-[2px] bg-[#F4B400]" />

    {/* STEP 1 */}
    <div className="relative flex gap-8 min-h-[170px]">
      <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-[#FFD54F]" />

      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-white">
          Enter Your Details
        </h3>

        <p className="mt-3 max-w-md text-white/70 leading-8">
          Share your date of birth, name, and place of birth with us.
        </p>

        <div className="mt-8 h-px w-52 bg-white/10"></div>
      </div>
    </div>

    {/* STEP 2 */}
    <div className="relative flex gap-8 min-h-[170px]">
      <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-[#FFD54F]" />

      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-white">
          Numerology Analysis
        </h3>

        <p className="mt-3 max-w-md text-white/70 leading-8">
          Our experts carefully analyze your numbers to reveal your strengths,
          challenges, hidden talents, and future opportunities.
        </p>

        <div className="mt-8 h-px w-52 bg-white/10"></div>
      </div>
    </div>

    {/* STEP 3 */}
    <div className="relative flex gap-8 min-h-[170px]">
      <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-[#FFD54F]" />

      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-white">
          Personalized Report
        </h3>

        <p className="mt-3 max-w-md text-white/70 leading-8">
          Receive a premium report covering your Life Path, Destiny, Career,
          Relationships, Wealth, Health, and much more.
        </p>

        <div className="mt-8 h-px w-52 bg-white/10"></div>
      </div>
    </div>

    {/* STEP 4 */}
    <div className="relative flex gap-8 min-h-[170px]">
      <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-[#FFD54F]" />

      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-white">
          Personalized Remedies
        </h3>

        <p className="mt-3 max-w-md text-white/70 leading-8">
          Discover lucky numbers, gemstones, colors, and personalized remedies
          to bring greater balance, prosperity, and success into your life.
        </p>

        <div className="mt-8 h-px w-52 bg-white/10"></div>
      </div>
    </div>

    {/* STEP 5 */}
    <div className="relative flex gap-8 min-h-[170px]">
      <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-[#FFD54F]" />

      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-white">
          Download Your Report
        </h3>

        <p className="mt-3 max-w-md text-white/70 leading-8">
          Instantly download your beautifully designed Premium Numerology Report
          and begin your journey with clarity, confidence, and purpose.
        </p>
      </div>
    </div>

  </div>

</div>


        {/* RIGHT SIDE - FORM */}

        <div className="w-full max-w-lg lg:max-w-xl mx-auto lg:ml-auto mt-10 lg:mt-18">

           <div className="rounded-3xl border border-[#FFD54F]/30 bg-gradient-to-br from-white via-[#FFFDF7] to-[#FFF7E6] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            {status.message && (
              <div
                className={`mb-6 rounded-xl p-4 text-sm ${status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  }`}
              >
                {status.message}
              </div>
            )}

            <h2 className="text-xl   font-semibold text-[#0F172A] text-center">
              SUBMIT YOUR DETAILS TO:
            </h2>

            <p className="mb-10 text-golden font-medium text-center mt-2">
              Get Instant Access to A FREE Short Preview of Your Premium Life Path Report
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

                  className={inputClass}
                  placeholder="Full Name"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

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
                  <label className={labelClass}>Phone</label>

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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label className={labelClass}>Date of Birth</label>

                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Gender</label>

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
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
                  placeholder="Birth Place"
                />
              </div>

              {/* Submit */}
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