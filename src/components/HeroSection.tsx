import React from 'react';
import { Button } from './button'; // Assuming you have a Button component
import { ArrowRight } from 'lucide-react'; // Example icon, replace if needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/hero.svg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center sm:items-end justify-center sm:justify-start pt-[80px] sm:pt-[100px] md:pt-[120px] text-center sm:text-right">
        <div className="p-4 sm:p-8 md:p-12 lg:p-16 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl sm:ml-auto">
          <h1 className="font-labrada text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Prakrithi School of Dance
          </h1>
          <p className="font-labrada text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 sm:mt-4 mb-6 sm:mb-8">
            Find the Grace in you
          </p>
        </div>
      </div>

      <div className="absolute z-10 bottom-4 sm:bottom-8 left-4 right-4 sm:left-8 sm:right-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-4">
        <Button
          variant="outline"
          className="bg-white/80 hover:bg-white text-black font-labrada font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out group text-sm sm:text-base w-full sm:w-auto"
          onClick={() => navigate("/contact")} // Link to contact page
        >
          Book a workshop
          <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
        <Button
          variant="outline"
          className="bg-white/80 hover:bg-white text-black font-labrada font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out group text-sm sm:text-base w-full sm:w-auto"
          onClick={() => navigate("/signup")} // Link to signup page
        >
          Sign up
          <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
