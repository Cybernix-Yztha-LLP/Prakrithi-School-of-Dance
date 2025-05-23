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
    <section className="relative w-full py-16 flex flex-col items-center">
      <h2 className="text-[64px] text-[#544c4c] font-medium font-['Labrada',Helvetica] mb-16">
        Contact
      </h2>

      <div className="w-full flex flex-row justify-center gap-8">
        {/* Left side with images */}
        <div className="relative w-full max-w-[901px]">
          <div className="relative">
            <img
              className="w-full h-auto object-cover rounded-md"
              alt="Keralanadanam dancer"
              src="/rectangle-4445.png"
            />

            <div className="absolute top-[389px] left-[58px] text-[#1f1c1b] text-base font-['Labrada',Helvetica] font-extrabold">
              Keralanadanam
            </div>
          </div>

          <div className="flex mt-4 gap-6">
            <img
              className="w-1/2 h-auto object-cover rounded-md"
              alt="Dance performance"
              src="/rectangle-4447-1.png"
            />
            <img
              className="w-1/2 h-auto object-cover rounded-md"
              alt="Dance performance"
              src="/rectangle-4447-1.png"
            />
          </div>

          <div className="absolute bottom-0 right-[76px]">
            <img className="w-[25px] h-5" alt="Vector" src="/vector.svg" />
          </div>
        </div>

        {/* Right side with contact form */}
        <Card className="w-full max-w-[717px] rounded-[18px] shadow-[0px_7px_29px_#64646f33]">
          <CardContent className="p-14">
            {formFields.map((field, index) => (
              <div key={field.id} className="mb-8">
                <label
                  htmlFor={field.id}
                  className="block text-[32px] text-[#898282] font-medium font-['Labrada',Helvetica] mb-4"
                >
                  {field.label}
                </label>
                <Input
                  id={field.id}
                  className="border-none focus-visible:ring-0 px-0 py-2 text-lg"
                />
                {index < formFields.length - 1 && (
                  <Separator className="mt-4 bg-gray-300" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
