import React from "react";
import { Button } from "../components/button"; // Assuming Button component is correctly imported
import { ArrowRight } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[599px] flex items-center justify-center md:justify-end px-4 md:px-8 text-center md:text-left">
      {/* Background image layers */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Background layer 1"
          src="/rectangle-4441.svg"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Overlay for better text contrast */}
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="font-['Labrada',Helvetica] font-extrabold text-[#fbf8ff] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight animate-fadeInUp">
            Prakrithi School of Dance
          </h1>
          <h2 className="font-['Labrada',Helvetica] font-extrabold text-[#f3f1f5] text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight md:text-right animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Find the Grace in you
          </h2>
        </div>
      </div>

      {/* Action buttons container */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 flex flex-col sm:flex-row justify-center sm:justify-between md:justify-end items-center gap-3 sm:gap-4">
        <Button className="h-10 sm:h-12 bg-[#fcfcfc] rounded-[21px] shadow-[0px_2px_16px_#0e1e2552,0px_2px_4px_#0e1e251f] text-[#372f2f] [font-family:'Labrada',Helvetica] font-medium text-xs sm:text-sm md:text-base lg:text-2xl px-4 sm:px-5 flex items-center justify-center w-full sm:w-auto animate-pulseSlightly">
          Book a workshop
          <div className="ml-2 w-7 h-7 sm:w-8 sm:h-8 md:w-[39px] md:h-9 bg-[#2c282a] rounded-[14px] sm:rounded-[18px] shadow-[0px_10px_10px_#00000038,0px_14px_28px_#00000040] flex items-center justify-center">
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
          </div>
        </Button>
        <Button className="h-10 sm:h-12 bg-[#fcfcfc] rounded-[21px] shadow-[0px_2px_16px_#0e1e2552,0px_2px_4px_#0e1e251f] text-[#372f2f] [font-family:'Labrada',Helvetica] font-medium text-xs sm:text-sm md:text-base lg:text-2xl px-4 sm:px-5 flex items-center justify-center w-full sm:w-auto animate-pulseSlightly" style={{ animationDelay: '0.2s' }}>
          Sign up
          <div className="ml-2 w-7 h-7 sm:w-8 sm:h-8 md:w-[39px] md:h-9 bg-[#858182] rounded-[14px] sm:rounded-[18px] shadow-[0px_10px_10px_#00000038,0px_14px_28px_#00000040] flex items-center justify-center">
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
          </div>
        </Button>
      </div>
    </section>
  );
};