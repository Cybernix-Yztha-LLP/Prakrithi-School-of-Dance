import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const trainerInfo = {
  name: "Dr. Kalamandalam Viswasree",
  image: "/trainer.png", // Replace with actual path to trainer image in /public
  bio: [
    "Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture.",
    "Join us now and immerse yourself in the magic. Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture.",
    "Join us now and immerse yourself in the magic. Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture. Join us now and immerse yourself in the magic."
  ],
  achievementsTitle: "Achievements",
  // Add achievements data if needed, e.g., achievements: ["Award 1", "Recognition 2"]
};

const AboutTrainerSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#333] mb-10 md:mb-12">
            {trainerInfo.name}
          </h2>
        </AnimatedSection>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-center md:items-start">
          <AnimatedSection animation="fadeInLeft" delay={200} className="w-full md:w-1/3 flex flex-col items-center text-center md:text-left">
            <img
              src={trainerInfo.image}
              alt={trainerInfo.name}
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover mb-4 sm:mb-6 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            />
            <h3 className="font-labrada text-xl sm:text-2xl font-medium text-[#444] mb-2 sm:mb-3">
              {trainerInfo.achievementsTitle}
            </h3>
            <ul className="list-disc list-inside text-gray-600 font-labrada text-sm sm:text-base text-center md:text-left">
              <li className="hover:text-gray-800 transition-colors duration-200">Achievement 1 placeholder...</li>
              <li className="hover:text-gray-800 transition-colors duration-200">Achievement 2 placeholder...</li>
              <li className="hover:text-gray-800 transition-colors duration-200">Achievement 3 placeholder...</li>
            </ul>
          </AnimatedSection>

          <div className="w-full md:w-2/3">
            {trainerInfo.bio.map((paragraph, index) => (
              <AnimatedSection 
                key={index}
                animation="fadeInRight" 
                delay={400 + index * 200}
              >
                <p className="font-labrada text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed text-justify md:text-left hover:text-gray-900 transition-colors duration-300">
                  {paragraph}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainerSection;
