import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";

// Founder's Information (can be expanded)
const founder = {
  name: "Dr. Kalamandalam Viswasree",
  image: "/trainer.png", // Replace with actual path to founder's image
  bio: [
    "Dr. Kalamandalam Viswasree, the visionary founder of Prakrithi School of Dance, is a distinguished classical dancer with over two decades of profound experience in performing and teaching.",
    "Her dedication to the art form is evident in her meticulous approach to training, where she imparts not just techniques but also the cultural and spiritual essence of Indian classical dance.",
    "Having graced numerous prestigious stages and trained hundreds of aspiring dancers, Dr. Kalamandalam Viswasree continues to inspire a deep appreciation for India's rich artistic heritage.",
    "Dr Kalamandalam Viswasree is a rank holder from Kerala Kalamandalam as well as from Sri Sanakara Sanskrit  College and completed her Ph.D from Kerala University."
  ],
  achievements: [
    // "Recipient of [Name of Award/Recognition]",
    // "Performed at [Notable Festival/Venue]",
    // "Choreographed [Number] unique dance productions",
  ],
};
const directorInfo = {
  name: "Praveen S.S.",
  image: "/director.jpeg", // Replace with actual path to trainer image in /public
  bio:[
  "Praveen S.S. is the Director of the Prakrithi Group, comprising Prakrithi School of Dance, Prakrithi Dance Collections, and Prakrithi Auditorium. He is a multifaceted professional—an educator, administrator, and cultural promoter—whose leadership continues to drive the Prakrithi institutions toward excellence in classical arts and community service.",
  
  "With a solid educational foundation, Praveen holds Diplomas in Civil Engineering and Computer Engineering, a Master’s Degree in Malayalam (M.A.), a Bachelor of Education (B.Ed.), and is a qualified UGC-NET holder. His academic pursuits reflect a rare combination of technical precision and literary depth.",
  
  "Praveen began his professional journey as a teacher, bringing his passion for education into classrooms across various reputed institutions. His teaching career includes notable roles at Technical High School, Pongumoodu, Loyola School, SNGK Teacher Education College, and Dr. A.M.M.R. Higher Secondary School. His experience in both secondary and teacher education sectors adds depth to his leadership style and his approach to holistic development.",
  
  "He also served as the Chairman of the Union at Sree Sankaracharya University of Sanskrit during the academic year 2001–2002, showcasing early leadership qualities and a strong commitment to cultural and student affairs.",
  
  "Today, as Director of the Prakrithi Group, Praveen S.S. plays a pivotal role in nurturing artistic talent, supporting traditional art forms, and managing the infrastructure and vision behind one of the region’s most respected cultural institutions."
]
,
  achievementsTitle: "Achievements",
  // Add achievements data if needed, e.g., achievements: ["Award 1", "Recognition 2"]
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
              {/* {founder.achievements && founder.achievements.length > 0 && (
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
                </AnimatedSection> */}
              {/* )} */}
            </div>
          </div>
        </section>
      </AnimatedSection>

            {/* Meet Our Founder Section */}
      <AnimatedSection animation="fadeIn" delay={200}>
        <section id="founder" className="mb-12 md:mb-20 p-6 sm:p-8 bg-white rounded-xl shadow-2xl">
          <AnimatedSection animation="fadeInUp" delay={300}>
            <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-600 mb-8 sm:mb-10 text-center">
              Meet Our Director
            </h2>
          </AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-10">
            <AnimatedSection animation="fadeInLeft" delay={400} className="flex-shrink-0 text-center lg:text-left">
              <img
                src={directorInfo.image}
                alt={directorInfo.name}
                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover border-4 sm:border-8 border-rose-200 shadow-lg mx-auto lg:mx-0"
              />
              <h3 className="font-labrada text-xl sm:text-2xl font-bold text-gray-800 mt-4 sm:mt-6">{directorInfo.name}</h3>
              <p className="font-labrada text-rose-500 text-sm sm:text-base">Director</p>
            </AnimatedSection>
            <div className="font-labrada text-base sm:text-lg text-gray-700 space-y-3 sm:space-y-4 leading-relaxed flex-grow">
              {directorInfo.bio.map((paragraph, index) => (
                <AnimatedSection key={index} animation="fadeInRight" delay={500 + index * 100}>
                  <p>{paragraph}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Journey / Previous Events Section */}
      <AnimatedSection animation="fadeIn" delay={200}>
        <section id="journey" className="p-6 sm:p-8 bg-white rounded-xl shadow-2xl">
          <AnimatedSection animation="fadeInUp" delay={300}>
            <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-600 mb-4 sm:mb-6 text-center">
              Pooja Fest
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

            {/* History & Legacy */}
      <AnimatedSection animation="fadeIn" delay={200} className="mt-16">
        <section id="journey" className="p-6 sm:p-8 bg-white rounded-xl shadow-2xl">
          <AnimatedSection animation="fadeInUp" delay={300}>
            <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-600 mb-4 sm:mb-6 text-center">
              History & Legacy
            </h2>
          </AnimatedSection>
          <div className="font-labrada text-base sm:text-lg text-gray-700 space-y-3 sm:space-y-4 leading-relaxed text-justify">
            <AnimatedSection animation="fadeInUp" delay={400}>
              <p>
                Founded in 1996 at Vattapara, Prakrithi School of Dance began as a humble initiative rooted in a deep commitment to making classical dance accessible to all. Under the visionary guidance of Dr. Kalamandalam Viswasree, the school was born from the belief that art should not be a privilege, but a path open to everyone—regardless of age, background, or social status.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={500}>
              <p>
                As the student community grew, so did the need for a dedicated space. On April 23, 2003, Prakrithi School of Dance found its permanent home in Kattayikonam, where it continues to thrive amidst a serene, natural environment that embodies its name—Prakrithi, meaning nature.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={500}>
              <p>
                Over the years, the school has blossomed into a vibrant cultural center, offering training in a diverse range of classical dance forms including Bharatanatyam, Mohiniyattom, Kuchipudi, Koodiyattam, and Nangiyarkoothu. Each class is taught with depth, discipline, and reverence for the traditional roots of the art forms.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={500}>
              <p>
                A standout initiative is "Matrukam Kalavedi", a revitalizing program for senior women—providing a space for them to reconnect with their passion for dance, discover joy in movement, and experience the confidence that comes with creative expression, regardless of age or previous experience.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={500}>
              <p>
                What makes Prakrithi truly unique is its economical fee structure and low-cost performance model, reflecting the founders’ mission to make classical art affordable and inclusive. Here, art is not a luxury—it is a way of life, a means to grow, and a tool for empowerment.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={500}>
              <p>
                Set in close harmony with nature, Prakrithi is more than a dance school—it is a community where character is built, relationships are nurtured, culture is celebrated, and students are encouraged to grow in both creative and academic excellence.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>


                  {/* History & Legacy */}
      <AnimatedSection animation="fadeIn" delay={200} className="mt-16">
        <section id="journey" className="p-6 sm:p-8 bg-white rounded-xl shadow-2xl">
          <AnimatedSection animation="fadeInUp" delay={300}>
            <h2 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-600 mb-4 sm:mb-6 text-center">
              Why Prakrithi?
            </h2>
          </AnimatedSection>
          <div className="font-labrada text-base sm:text-lg text-gray-700 space-y-3 sm:space-y-4 leading-relaxed text-justify">
            <AnimatedSection animation="fadeInUp" delay={400}>
              <p>
              More than just a dance school, Prakrithi is a vibrant community that combines movement, creativity, and connection. Here's what you can expect:
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={500}>
              <ul className="list-disc px-10">
                <li>Groove to the rhythm and let loose</li>
                <li>Savor meaningful conversations over tea</li>
                <li>Build confidence and coordination</li>
                <li>Express yourself freely</li>
                <li>Develop leadership skills</li>
                <li>Stay socially active and engaged</li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={500}>
              <p>
                Join Prakrithi and discover a holistic experience that will transform your life!
              </p>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

    </div>
    
  </div>
);

export default About;
