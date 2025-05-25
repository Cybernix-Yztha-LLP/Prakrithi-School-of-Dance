import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";

// Founder's Information (can be expanded)
const founder = {
  name: "Dr. Kalamandalam Viswasree",
  image: "/trainer.png", // Replace with actual path to founder's image
  bio: [
    "Smt. Anjali Nair, the visionary founder of Prakrithi School of Dance, is a distinguished classical dancer with over two decades of profound experience in performing and teaching.",
    "Her dedication to the art form is evident in her meticulous approach to training, where she imparts not just techniques but also the cultural and spiritual essence of Indian classical dance.",
    "Having graced numerous prestigious stages and trained hundreds of aspiring dancers, Smt. Anjali Nair continues to inspire a deep appreciation for India's rich artistic heritage.",
  ],
  achievements: [
    "Recipient of [Name of Award/Recognition]",
    "Performed at [Notable Festival/Venue]",
    "Choreographed [Number] unique dance productions",
  ],
};

const About = () => (
  <div className="bg-gradient-to-b from-pink-50 via-rose-50 to-amber-50 min-h-screen py-12 md:py-16 pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-32">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <header className="text-center mb-12 md:mb-16">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <h1 className="font-labrada text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rose-700 tracking-tight">
            About Prakrithi School of Dance
          </h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <p className="mt-3 sm:mt-4 font-labrada text-lg sm:text-xl text-gray-600 max-w-prose lg:max-w-3xl mx-auto">
            Nurturing talent and preserving the rich heritage of Indian classical dance.
          </p>
        </AnimatedSection>
      </header>

      {/* Our Philosophy Section */}
      <AnimatedSection animation="fadeIn" delay={300}>
        <section id="philosophy" className="mb-12 md:mb-20 p-6 sm:p-8 bg-white rounded-xl shadow-2xl">
          <AnimatedSection animation="fadeInUp" delay={400}>
            <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-600 mb-4 sm:mb-6 text-center">
              Our Philosophy
            </h2>
          </AnimatedSection>
          <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 font-labrada leading-relaxed text-justify">
            <AnimatedSection animation="fadeInUp" delay={500}>
              <p>
                At Prakrithi School of Dance, we believe that dance is more than just movement; it's a profound expression of culture, emotion, and storytelling. Our mission is to provide authentic and comprehensive training in various forms of Indian classical dance, fostering a deep understanding and appreciation for these ancient art forms.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={600}>
              <p>
                We are committed to creating a nurturing and inspiring environment where students of all ages can explore their potential, develop discipline, and connect with the spiritual essence of dance. Our curriculum emphasizes not only technical proficiency but also the historical context and artistic nuances that make each dance form unique.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Meet Our Founder Section */}
      <AnimatedSection animation="fadeIn" delay={200}>
        <section id="founder" className="mb-12 md:mb-20 p-6 sm:p-8 bg-white rounded-xl shadow-2xl">
          <AnimatedSection animation="fadeInUp" delay={300}>
            <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-600 mb-8 sm:mb-10 text-center">
              Meet Our Founder
            </h2>
          </AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-10">
            <AnimatedSection animation="fadeInLeft" delay={400} className="flex-shrink-0 text-center lg:text-left">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover border-4 sm:border-8 border-rose-200 shadow-lg mx-auto lg:mx-0"
              />
              <h3 className="font-labrada text-xl sm:text-2xl font-bold text-gray-800 mt-4 sm:mt-6">{founder.name}</h3>
              <p className="font-labrada text-rose-500 text-sm sm:text-base">Founder & Principal Instructor</p>
            </AnimatedSection>
            <div className="font-labrada text-base sm:text-lg text-gray-700 space-y-3 sm:space-y-4 leading-relaxed flex-grow">
              {founder.bio.map((paragraph, index) => (
                <AnimatedSection key={index} animation="fadeInRight" delay={500 + index * 100}>
                  <p>{paragraph}</p>
                </AnimatedSection>
              ))}
              {founder.achievements && founder.achievements.length > 0 && (
                <AnimatedSection animation="fadeInUp" delay={800}>
                  <div className="mt-4 sm:mt-6">
                    <h4 className="font-semibold text-lg sm:text-xl text-gray-800 mb-1.5 sm:mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm sm:text-base">
                      {founder.achievements.map((achievement, index) => (
                        <AnimatedSection key={index} animation="fadeIn" delay={900 + index * 100}>
                          <li>{achievement}</li>
                        </AnimatedSection>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Journey / Previous Events Section */}
      <AnimatedSection animation="fadeIn" delay={200}>
        <section id="journey" className="p-6 sm:p-8 bg-white rounded-xl shadow-2xl">
          <AnimatedSection animation="fadeInUp" delay={300}>
            <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-600 mb-4 sm:mb-6 text-center">
              Our Journey
            </h2>
          </AnimatedSection>
          <div className="font-labrada text-base sm:text-lg text-gray-700 space-y-3 sm:space-y-4 leading-relaxed text-justify">
            <AnimatedSection animation="fadeInUp" delay={400}>
              <p>
                Prakrithi School of Dance has been a beacon of classical arts education for many years, marked by numerous successful student showcases, participation in cultural festivals, and workshops conducted by esteemed artists. We are proud of our students' achievements and the vibrant community we have built.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={500}>
              <p>
                We continuously strive to expand our offerings and provide enriching experiences that celebrate the diversity and beauty of Indian dance. Stay tuned for upcoming events and performances!
              </p>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

    </div>
  </div>
);

export default About;
