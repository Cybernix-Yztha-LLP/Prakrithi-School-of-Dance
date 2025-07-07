import React from 'react';
import { Button } from './button'; // Assuming button component exists
import { Card, CardContent } from './card'; // Assuming card components exist
import { ArrowRight } from 'lucide-react'; // Assuming lucide-react for icons
import { AnimatedSection } from './AnimatedSection';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Placeholder data for previous programmes
const previousProgrammesData = {
  stackedImage: "/dancestacked.JPG", // Replace with your actual image path
  workshopButtonText: "Book a workshop",
  smallImages: [
    { id: 1, src: "/dance4.jpg", alt: "Previous programme 1" }, // Replace
    { id: 2, src: "/dance001.jpg", alt: "Previous programme 2" }, // Replace
    { id: 3, src: "/dance002.jpg", alt: "Previous programme 3" }, // Replace
  ],
  eventCards: [
    {
      id: 1,
      eventName: "Pooja Fest",
      image: "/dancedance.jpg", // Replace
      description: "",
      url:'dance/pooja'
    },
        {
      id: 2,
      eventName: "Matrukam Kalavedi",
      image: "/perfMohini.jpg", // Replace
      description: "",
      url: 'dance/matrukam-kalavedi'
    }
  ],
};

const PerformancesSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="previous-programmes" className="py-12 md:py-16 bg-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-labrada font-medium text-[#544c4c] text-2xl sm:text-3xl md:text-[40px] text-center mb-10 md:mb-12 animate-fadeInUp">
            Previous Programes
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 px-0 sm:px-4 md:px-0">
            <AnimatedSection animation="slideInLeft" delay={200} className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 group">
              {/* Stacked Images with Individual Animations */}
              <AnimatedSection 
                animation="rotateIn" 
                delay={400}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={previousProgrammesData.stackedImage} 
                  alt="Previous programme highlight" 
                  className="w-full h-full rounded-xl shadow-2xl transform -rotate-6 transition-all duration-700 ease-out group-hover:-rotate-12 group-hover:scale-105 group-hover:shadow-3xl object-top overflow-hidden"
                />
              </AnimatedSection>
              
              <AnimatedSection 
                animation="rotateIn" 
                delay={600}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={previousProgrammesData.stackedImage}
                  alt="Previous programme highlight" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl transform rotate-3 transition-all duration-700 ease-out group-hover:rotate-6 group-hover:scale-105 group-hover:shadow-3xl"
                />
              </AnimatedSection>
              
              <AnimatedSection 
                animation="scaleIn" 
                delay={800}
                className="relative w-full h-full"
              >
                <img 
                  src={previousProgrammesData.stackedImage}
                  alt="Previous programme highlight" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-3xl group-hover:z-10"
                />
              </AnimatedSection>
            </AnimatedSection>
            
            <div className="flex-grow flex items-center justify-center md:justify-start mt-6 md:mt-0">
              <AnimatedSection animation="fadeInRight" delay={1000}>
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-labrada font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg shadow-md border border-gray-300 flex items-center gap-2 text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  {previousProgrammesData.workshopButtonText}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection animation="fadeInUp" delay={300}>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mb-12 md:mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {previousProgrammesData.smallImages.map((image, index) => (
                  <AnimatedSection key={image.id} animation="zoomIn" delay={500 + index * 150}>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading='lazy'/>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {previousProgrammesData.eventCards.map((event, index) => (
              <AnimatedSection 
                key={event.id}
                animation="slideInUp" 
                delay={700 + index * 200}
              >
                <Link to={event.url}>
                <Card className="relative overflow-hidden rounded-2xl shadow-xl group min-h-[350px] sm:min-h-[400px]">
                  <img src={event.image} alt={event.eventName} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading='lazy' />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end">
                    <h3 className="font-labrada text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">{event.eventName}</h3>
                    <p className="font-labrada text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4 line-clamp-3">{event.description}</p>
                  </div>
                </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PerformancesSection;
