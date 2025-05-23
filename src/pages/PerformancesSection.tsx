import React from "react";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";

export const PerformancesSection = (): JSX.Element => {
  // Event data for reusability
  const eventData = [
    {
      id: 1,
      title: "eventname",
      description:
        "Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture. Join us now and immerse yourself in the magic.",
      backgroundImage: "/rectangle-4506.svg",
    },
    {
      id: 2,
      title: "eventname",
      description:
        "Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture. Join us now and immerse yourself in the magic.",
      backgroundImage: "/rectangle-4468.svg",
    },
  ];

  return (
    <section className="w-full py-16 relative">
      <div className="container mx-auto">
        <h2 className="text-[64px] font-medium text-[#544c4c] text-center mb-8 font-['Labrada',Helvetica]">
          previous programes
        </h2>

        {/* Top featured performance section */}
        <Card className="w-full mb-8 bg-[#fef8f8] rounded-[29px]">
          <CardContent className="p-6 flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-1/3">
              <img
                className="w-full h-auto rounded-lg"
                alt="Performance"
                src="/rectangle-4447-1.png"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <Button className="self-end bg-[#fcfcfc] text-[#372f2f] rounded-[21px] shadow-[0px_2px_16px_#0e1e2552,0px_2px_4px_#0e1e251f] h-[84px] px-8 relative">
                <span className="font-['Labrada',Helvetica] font-medium text-4xl">
                  Book a workshop
                </span>
                <div className="absolute right-4 w-[57px] h-[53px] bg-[#2c282a] rounded-[18px] shadow-[0px_10px_10px_#00000038,0px_14px_28px_#00000040] flex items-center justify-center">
                  <img
                    className="w-[35px] h-[35px]"
                    alt="Arrow right"
                    src="/si-arrow-right-fill.svg"
                  />
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Middle section with three images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative">
              <img
                className="w-full h-auto rounded-lg"
                alt="Performance thumbnail"
                src="/rectangle-4447-1.png"
              />
            </div>
          ))}
        </div>

        {/* Bottom section with event cards */}
        <Card className="w-full mb-8 bg-[#fef8f8] rounded-[29px] shadow-[0px_7px_29px_#64646f33]">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative">
                  <img
                    className="w-full h-auto rounded-lg"
                    alt="Performance"
                    src="/rectangle-4447-1.png"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Event cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventData.map((event) => (
            <div
              key={event.id}
              className="relative h-[523px] rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${event.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            >
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="mb-4">
                  <h3 className="font-['Labrada',Helvetica] font-medium text-[#f4f0f0] text-4xl mb-4">
                    {event.title}
                  </h3>
                  <p className="font-['Labrada',Helvetica] font-semibold text-[#f3f0f0] text-base">
                    {event.description}
                  </p>
                </div>
                <Button className="float-right bg-[#d8d8d854] text-[#f9f2f2] rounded-md border border-solid border-[#fefcfc] h-8 w-[133px]">
                  <span className="font-['Labrada',Helvetica] font-extrabold text-xl">
                    more
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
