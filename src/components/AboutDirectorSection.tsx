import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const directorInfo = {
  name: "Praveen S.S.",
  image: "/director.jpeg", // Replace with actual path to trainer image in /public
  bio:[
  "Praveen S.S. is the Director of the Prakrithi Group, comprising Prakrithi School of Dance, Prakrithi Dance Collections, and Prakrithi Auditorium. He is a multifaceted professional—an educator, administrator, and cultural promoter—whose leadership continues to drive the Prakrithi institutions toward excellence in classical arts and community service.",
  
  "With a solid educational foundation, Praveen holds Diplomas in Civil Engineering and Computer Engineering, a Master’s Degree in Malayalam (M.A.), a Bachelor of Education (B.Ed.), and is a qualified UGC-NET holder. His academic pursuits reflect a rare combination of technical precision and literary depth.",
  
  "Praveen began his professional journey as a teacher, bringing his passion for education into classrooms across various reputed institutions. His teaching career includes notable roles at Technical High School, Pongumoodu, Loyola School, SNGK Teacher Education College, and Dr. A.M.M.R. Memorial Residential Higher Secondary School. His experience in both secondary and teacher education sectors adds depth to his leadership style and his approach to holistic development.",
  
  "He also served as the Chairman of the Union at Sree Sankaracharya University of Sanskrit during the academic year 2001–2002, showcasing early leadership qualities and a strong commitment to cultural and student affairs.",
  
  "Today, as Director of the Prakrithi Group, Praveen S.S. plays a pivotal role in nurturing artistic talent, supporting traditional art forms, and managing the infrastructure and vision behind one of the region’s most respected cultural institutions."
]
,
  achievementsTitle: "Achievements",
  // Add achievements data if needed, e.g., achievements: ["Award 1", "Recognition 2"]
};

const AboutDirectorSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#333] mb-10 md:mb-12">
            {directorInfo.name}
          </h2>
        </AnimatedSection>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-center md:items-start">
          <AnimatedSection animation="fadeInLeft" delay={200} className="w-full md:w-1/3 flex flex-col items-center text-center md:text-left">
            <img
              src={directorInfo.image}
              alt={directorInfo.name}
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover mb-4 sm:mb-6 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            />
            <h3 className="font-labrada text-xl sm:text-2xl font-medium text-[#444] mb-2 sm:mb-3">
              {directorInfo.achievementsTitle}
            </h3>
            <ul className="list-disc list-inside text-gray-600 font-labrada text-sm sm:text-base text-center md:text-left">
              <li className="hover:text-gray-800 transition-colors duration-200">AHSSLC rank holder</li>
              <li className="hover:text-gray-800 transition-colors duration-200">Phd From Kerala Univeristy</li>
              <li className="hover:text-gray-800 transition-colors duration-200">MA First Rank</li>
            </ul>
          </AnimatedSection>

          <div className="w-full md:w-2/3">
            {directorInfo.bio.map((paragraph, index) => (
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

export default AboutDirectorSection;
