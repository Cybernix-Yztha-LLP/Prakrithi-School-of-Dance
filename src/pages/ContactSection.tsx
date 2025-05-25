import React from "react";
import { Card, CardContent } from "../components/card";
import { Input } from "../components/input";
import { Separator } from "../components/separator";

export const ContactSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
    { id: "address", label: "Address" },
    { id: "state", label: "State" },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 flex flex-col items-center px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#544c4c] font-medium font-['Labrada',Helvetica] mb-10 md:mb-16 text-center">
        Contact
      </h2>

      <div className="w-full flex flex-col lg:flex-row justify-center gap-8">
        {/* Left side with images */}
        <div className="relative w-full lg:max-w-[901px]">
          <div className="relative mb-4 sm:mb-6">
            <img
              className="w-full h-auto object-cover rounded-md"
              alt="Keralanadanam dancer"
              src="/rectangle-4445.png"
            />
            {/* Absolute positioning is hard to make responsive. Consider alternative layouts or media queries if essential. */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/30 text-white p-2 rounded text-xs sm:text-sm md:text-base font-['Labrada',Helvetica] font-extrabold">
              Keralanadanam
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-4 gap-4 sm:gap-6">
            <img
              className="w-full sm:w-1/2 h-auto object-cover rounded-md"
              alt="Dance performance"
              src="/rectangle-4447-1.png"
            />
            <img
              className="w-full sm:w-1/2 h-auto object-cover rounded-md"
              alt="Dance performance"
              src="/rectangle-4447-1.png"
            />
          </div>
          {/* Removing or rethinking absolute positioned decorative elements for responsiveness */}
          {/* <div className="absolute bottom-0 right-[76px]">
            <img className="w-[25px] h-5" alt="Vector" src="/vector.svg" />
          </div> */}
        </div>

        {/* Right side with contact form */}
        <Card className="w-full lg:max-w-[717px] rounded-[18px] shadow-[0px_7px_29px_#64646f33]">
          <CardContent className="p-6 sm:p-8 md:p-10 lg:p-14">
            {formFields.map((field, index) => (
              <div key={field.id} className="mb-6 sm:mb-8">
                <label
                  htmlFor={field.id}
                  className="block text-xl sm:text-2xl md:text-[32px] text-[#898282] font-medium font-['Labrada',Helvetica] mb-2 sm:mb-4"
                >
                  {field.label}
                </label>
                <Input
                  id={field.id}
                  className="border-none focus-visible:ring-0 px-0 py-2 text-base sm:text-lg"
                />
                {index < formFields.length - 1 && (
                  <Separator className="mt-2 sm:mt-4 bg-gray-300" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
