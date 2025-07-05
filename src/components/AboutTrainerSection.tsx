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

const directorInfo = {
  name: "Praveen S.S.",
  image: "/director.jpeg", // Replace with actual path to trainer image in /public

};

const AboutTrainerSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white px-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col md:justify-evenly">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-center md:space-evenly">
          <AnimatedSection animation="fadeInLeft" delay={200} className="w-full md:w-6/12 flex flex-col items-center text-center md:text-left">
            <img
              src={trainerInfo.image}
              alt={trainerInfo.name}
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover mb-4 sm:mb-6 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            />
                    <AnimatedSection animation="fadeInUp">
          <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#333] mb-10 md:mb-12">
            {trainerInfo.name}
          </h2>
        </AnimatedSection>
          </AnimatedSection>
        </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-center md:items-start">
          <AnimatedSection animation="fadeInLeft" delay={200} className="w-full md:w-12/12 flex flex-col items-center text-center md:text-left">
            <img
              src={directorInfo.image}
              alt={directorInfo.name}
              className="w-full sm:max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover mb-4 sm:mb-6 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            />
                    <AnimatedSection animation="fadeInUp">
          <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#333] mb-10 md:mb-12">
            {directorInfo.name}
          </h2>
        </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainerSection;
