import React from 'react';
import { Button } from './button'; // Assuming button component exists
import { Card, CardContent } from './card'; // Assuming card components exist
import { ArrowRight } from 'lucide-react'; // Assuming lucide-react for icons

// Placeholder data for previous programmes
const previousProgrammesData = {
  stackedImage: "/DancestackedImage.png", // Replace with your actual image path
  workshopButtonText: "Book a workshop",
  smallImages: [
    { id: 1, src: "/perfImage.png", alt: "Previous programme 1" }, // Replace
    { id: 2, src: "/perfImage.png", alt: "Previous programme 2" }, // Replace
    { id: 3, src: "/perfImage.png", alt: "Previous programme 3" }, // Replace
  ],
  eventCards: [
    {
      id: 1,
      eventName: "Event Name One",
      image: "/prevperformance1.svg", // Replace
      description: "Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture. Join us now and immerse yourself in the magic.",
    },
    {
      id: 2,
      eventName: "Event Name Two",
      image: "/prevperformance2.svg", // Replace
      description: "Discover the vibrant traditions of Indian dance through captivating performances. Our events showcase a blend of classical artistry and contemporary expression, leaving audiences spellbound.",
    },
  ],
};

const PerformancesSection = () => {
  return (
    <>
      <section id="previous-programmes" className="py-12 md:py-16 bg-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-labrada font-medium text-[#544c4c] text-2xl sm:text-3xl md:text-[40px] text-center mb-10 md:mb-12 animate-fadeInUp">
            Previous Programes
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 px-0 sm:px-4 md:px-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80">
              {/* Simulate stacked images - you might need a more complex component or multiple image tags for actual stacking effect */}
              <img 
                src={previousProgrammesData.stackedImage} 
                alt="Previous programme highlight" 
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transform -rotate-6"
              />
              <img 
                src={previousProgrammesData.stackedImage} // Using same image for simplicity
                alt="Previous programme highlight" 
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transform rotate-3"
              />
               <img 
                src={previousProgrammesData.stackedImage} // Using same image for simplicity
                alt="Previous programme highlight" 
                className="relative w-full h-full object-cover rounded-xl shadow-2xl" // Top image
              />
            </div>
            <div className="flex-grow flex items-center justify-center md:justify-start mt-6 md:mt-0">
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-100 text-gray-800 font-labrada font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg shadow-md border border-gray-300 flex items-center gap-2 text-sm sm:text-base"
              >
                {previousProgrammesData.workshopButtonText}
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mb-12 md:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {previousProgrammesData.smallImages.map((image) => (
                <div key={image.id} className="aspect-video overflow-hidden rounded-lg">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {previousProgrammesData.eventCards.map((event) => (
              <Card key={event.id} className="relative overflow-hidden rounded-2xl shadow-xl group min-h-[350px] sm:min-h-[400px]">
                <img src={event.image} alt={event.eventName} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end">
                  <h3 className="font-labrada text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">{event.eventName}</h3>
                  <p className="font-labrada text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4 line-clamp-3">{event.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/50 backdrop-blur-sm font-labrada self-start px-3 py-1 sm:px-4 rounded-md text-xs"
                  >
                    more
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PerformancesSection;
