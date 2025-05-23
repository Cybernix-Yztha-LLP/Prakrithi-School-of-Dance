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
      {/* Previous Programmes Section */}
      <section id="previous-programmes" className="py-16 bg-pink-50/30"> {/* Light pinkish background */}
        <div className="container mx-auto px-4">
          <h2 className="font-labrada font-medium text-[#544c4c] text-3xl md:text-[40px] text-center mb-12">
            Previous Programes
          </h2>

          {/* Stacked Image and Workshop Button */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-16 mb-16 px-4 md:px-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
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
            <div className="flex-grow flex items-center justify-center md:justify-start mt-8 md:mt-0">
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-100 text-gray-800 font-labrada font-semibold py-3 px-8 rounded-lg shadow-md border border-gray-300 flex items-center gap-2"
              >
                {previousProgrammesData.workshopButtonText}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Row of Three Smaller Images */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {previousProgrammesData.smallImages.map((image) => (
                <div key={image.id} className="aspect-video overflow-hidden rounded-lg">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Event Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previousProgrammesData.eventCards.map((event) => (
              <Card key={event.id} className="relative overflow-hidden rounded-2xl shadow-xl group">
                <img src={event.image} alt={event.eventName} className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="font-labrada text-2xl font-bold text-white mb-2">{event.eventName}</h3>
                  <p className="font-labrada text-sm text-gray-200 mb-4 line-clamp-3">{event.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/50 backdrop-blur-sm font-labrada self-start px-4 py-1 rounded-md text-xs"
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
