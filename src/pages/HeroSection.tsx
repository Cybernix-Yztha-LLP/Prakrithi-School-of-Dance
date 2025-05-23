import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[599px] flex items-center justify-end px-4 md:px-8">
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
          <h1 className="font-['Labrada',Helvetica] font-extrabold text-[#fbf8ff] text-4xl md:text-6xl leading-tight text-right md:text-left">
            Prakrithi School of Dance
          </h1>
          <h2 className="font-['Labrada',Helvetica] font-extrabold text-[#f3f1f5] text-3xl md:text-6xl leading-tight text-right">
            Find the Grace in you
          </h2>
        </div>
      </div>

      {/* Action buttons container */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 md:p-8">
        <Button className="h-10 md:h-12 bg-[#fcfcfc] rounded-[21px] shadow-[0px_2px_16px_#0e1e2552,0px_2px_4px_#0e1e251f] text-[#372f2f] [font-family:'Labrada',Helvetica] font-medium text-sm md:text-2xl">
          Book a workshop
          <div className="ml-2 w-8 md:w-[39px] h-8 md:h-9 bg-[#2c282a] rounded-[18px] shadow-[0px_10px_10px_#00000038,0px_14px_28px_#00000040] flex items-center justify-center">
            <img
              className="w-4 md:w-6 h-4 md:h-6"
              alt="Arrow right"
              src="/si-arrow-right-fill.svg"
            />
          </div>
        </Button>
        <Button className="h-10 md:h-12 bg-[#fcfcfc] rounded-[21px] shadow-[0px_2px_16px_#0e1e2552,0px_2px_4px_#0e1e251f] text-[#372f2f] [font-family:'Labrada',Helvetica] font-medium text-sm md:text-2xl">
          Sign up
          <div className="ml-2 w-8 md:w-[39px] h-8 md:h-9 bg-[#858182] rounded-[18px] shadow-[0px_10px_10px_#00000038,0px_14px_28px_#00000040] flex items-center justify-center">
            <img
              className="w-4 md:w-6 h-4 md:h-6"
              alt="Arrow right"
              src="/si-arrow-right-fill.svg"
            />
          </div>
        </Button>
      </div>
    </section>
  );
};