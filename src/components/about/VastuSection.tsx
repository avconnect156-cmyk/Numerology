"use client";

import React from "react";

const VastuSection = () => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* ================= MAIN HEADING ================= */}

        <div className="text-center mb-10 sm:mb-14 lg:mb-16">

          <span className="inline-flex items-center px-4 py-2 sm:px-5 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-[10px] sm:text-xs md:text-sm font-semibold">
            Ancient Science
          </span>


          <h2 className="mt-5 sm:mt-6 lg:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">

            What is

            <span className="inline bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              {" "}Vastu Shastra?
            </span>

          </h2>


          <div className="w-20 sm:w-24 lg:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-5 sm:mt-6 lg:mt-8" />

        </div>



        {/* ================= INTRO CARD ================= */}


        <div className="group relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">


          {/* Glow */}

          <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[80px] sm:blur-[100px] lg:blur-[120px]" />


          <div className="relative z-10">


            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFD54F] mb-5 sm:mb-6 lg:mb-8">
              The Science of Architecture & Energy
            </h3>



            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">

              <span className="font-semibold text-white">
                Vastu Shastra
              </span>

              {" "}
              is an ancient Indian science of architecture and design that
              guides how buildings, homes, temples, and cities should be
              constructed in harmony with nature, directions, energy flow, and
              cosmic forces.


              <br />
              <br />


              The word


              <span className="text-[#FFD54F] font-semibold">
                {" "}Vastu
              </span>


              means


              <span className="font-semibold text-white">
                {" "}“dwelling”
              </span>


              and


              <span className="text-[#FFD54F] font-semibold">
                {" "}Shastra
              </span>


              means


              <span className="font-semibold text-white">
                {" "}“science or knowledge.”
              </span>


              <br />
              <br />


              It is based on balancing the


              <span className="text-[#FFD54F] font-semibold">
                {" "}five elements (Pancha Tatva)
              </span>


            </p>



            {/* Panch Tatva */}

            <div className="mt-6 space-y-3 ml-2">

              {[
                "Earth (Prithvi)",
                "Water (Jal)",
                "Fire (Agni)",
                "Air (Vayu)",
                "Space (Aakash)",
              ].map((item,index)=>(

                <div key={index} className="flex items-center gap-3">

                  <span className="text-[#FFD54F] font-bold">
                    •
                  </span>

                  <span className="text-[#FFD54F] font-semibold">
                    {item}
                  </span>

                </div>

              ))}

            </div>



            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/85">

              The goal of


              <span className="text-[#FFD54F] font-semibold">
                {" "}Vastu
              </span>


              is to create spaces that promote


              <span className="text-[#FFD54F] font-semibold">
                {" "}health
              </span>


              ,


              <span className="text-[#FFD54F] font-semibold">
                {" "}prosperity
              </span>


              ,


              <span className="text-[#FFD54F] font-semibold">
                {" "}peace
              </span>


              and


              <span className="text-[#FFD54F] font-semibold">
                {" "}positive energy.
              </span>


            </p>



            <div className="mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-32" />
            
            

          </div>


        </div>


      </div>

      {/* ================= Mythological Origins ================= */}

<div className="mt-10 sm:mt-12 lg:mt-16 text-center">

  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
    Mythological{" "}
    <span className="inline bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
      Origins of Vastu
    </span>
  </h2>


  <div className="w-20 sm:w-24 lg:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-5 sm:mt-6 lg:mt-8" />

</div>



{/* ================= Vastu Purusha Story ================= */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-10">


  {/* LEFT CARD */}

  <div className="group relative p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#D4AF37]/30 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-[#FFD54F]/70 transition-all duration-500">


    <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#FFD54F]/20 rounded-full blur-3xl group-hover:bg-[#FFD54F]/30 transition-all duration-500" />


    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-5">

      The Legend of{" "}

      <span className="bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
        Vastu Purusha
      </span>

    </h3>



    <p className="text-white/90 text-base sm:text-lg leading-relaxed">

      According to ancient Vedic traditions,{" "}

      <span className="text-[#FFD54F] font-semibold">
        Vastu Purusha
      </span>

      {" "}is the divine cosmic being who represents the energy of space and the
      foundation of all structures.


      <br />
      <br />


      It is believed that when Lord Shiva defeated a powerful demon, the energy
      of that being transformed into the{" "}

      <span className="text-[#FFD54F] font-semibold">
        Vastu Purusha
      </span>

      , whose body became the energetic blueprint of the universe.


      <br />
      <br />


      The Gods placed him facing the Earth and blessed him with the
      responsibility of protecting homes, temples, and sacred spaces.


    </p>



    <div className="mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-28" />


  </div>




  {/* RIGHT CARD */}


  <div className="group relative p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#0F172A]/80 to-[#020617]/90 backdrop-blur-xl hover:border-[#FFD54F]/70 transition-all duration-500">


    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-5">

      Cosmic{" "}

      <span className="bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
        Energy Balance
      </span>

    </h3>



    <p className="text-white/90 text-base sm:text-lg leading-relaxed">

      The Vastu Purusha Mandala represents the harmony between human life and
      cosmic forces.


      <br />
      <br />


      Every direction is governed by different energies and divine forces that
      influence various aspects of life.


    </p>




    <div className="mt-6 space-y-4">


      {[
        "North – Wealth & Opportunities",
        "East – Growth & Spiritual Energy",
        "South – Strength & Stability",
        "West – Knowledge & Completion",
      ].map((item,index)=>(


        <div key={index} className="flex items-center gap-3">


          <span className="text-[#FFD54F] font-bold text-xl">
            •
          </span>


          <span className="text-white text-base sm:text-lg">
            {item}
          </span>


        </div>


      ))}


    </div>




    <div className="mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-28" />


  </div>


</div>

    </section>
  );
};


export default VastuSection;