import React from 'react';
import { Button } from './button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';

const HeroSection = () => {
  const navigate = useNavigate();
  const videoId = 'JWhA3ldZcyY'; // YouTube Video ID

  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[100vh] text-white overflow-hidden" // Removed bg-cover, bg-center, added overflow-hidden
      // style={{ backgroundImage: "url('/hero.svg')" }} // Removed background image style
    >
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen={false} // allowFullScreen on iframe itself, not user control
          title="Background Video" // For accessibility
        ></iframe>
      </div>

      {/* Dimming Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center sm:items-end justify-center sm:justify-start pt-[80px] sm:pt-[100px] md:pt-[120px] text-center sm:text-right">
        <div className="p-4 sm:p-8 md:p-12 lg:p-16 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl sm:ml-auto">
          <AnimatedSection animation="fadeInDown" delay={500}>
            <h1 className="font-labrada text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Prakrithi School of Dance
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={800}>
            <p className="font-labrada text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 sm:mt-4 mb-6 sm:mb-8">
              Find the Grace in you
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute z-10 bottom-4 sm:bottom-8 left-4 right-4 sm:left-8 sm:right-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-4">
        <AnimatedSection animation="fadeInLeft" delay={1200}>
          <Button
            variant="outline"
            className="bg-white/90 hover:bg-white text-gray-800 hover:text-black font-labrada font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out group text-sm sm:text-base w-full sm:w-auto border-white/50"
            onClick={() => navigate("/contact")} // Link to contact page
          >
            Book a workshop
            <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 text-gray-700 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeInRight" delay={1400}>
          {/* <Button
            variant="outline"
            className="bg-white/90 hover:bg-white text-gray-800 hover:text-black font-labrada font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out group text-sm sm:text-base w-full sm:w-auto border-white/50"
            onClick={() => navigate("/signup")} // Link to signup page
          >
            Sign up
            <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 text-gray-700 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
          </Button> */}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
