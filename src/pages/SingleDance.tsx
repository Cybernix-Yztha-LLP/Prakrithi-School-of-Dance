import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { useParams } from "react-router-dom";

const dances = [
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    images: [
        '/dance1.png'

    ]
  }
];

const SingleDance = () => {
  const { id } = useParams<{ id: string }>();
  const dance = dances.find((d) => d.id === id);

  if (!dance) {
    return <h1>Error</h1>;
  }

  return (
    <div className="min-h-screen py-12 md:py-16 pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <AnimatedSection animation="fadeInUp" duration={800}>
            <h1 className="font-labrada text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#636161] tracking-tight">
              {dance.name}
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
          <section className="mb-12 md:mb-20 bg-white rounded-xl shadow-2xl flex flex-col md:flex-row">
            <AnimatedSection animation="fadeInUp" delay={400} className="m-0 p-0">
              <img src={dance.images[0]} className="rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl"/>
            </AnimatedSection>
            <div className="space-y-4 text-gray-700 font-labrada leading-relaxed text-justify p-6">
              <AnimatedSection animation="fadeInUp" delay={500}>
                <p>
                  {dance.name} is not just movement—it's a beautiful expression of emotion, tradition, and spirit.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={600}>
                <p>
                  Our mission is to help students explore the depth and richness of {dance.name} through patient teaching and joyful expression.
                </p>
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>

        {/* Meet Our Mentor Section (using dance.name as placeholder) */}
        <AnimatedSection animation="fadeIn" delay={200}>
          <section className="mb-12 md:mb-20 p-6 sm:p-8 bg-white rounded-xl shadow-2xl">
            <AnimatedSection animation="fadeInUp" delay={300}>
              <h2 className="text-center font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-600 mb-8 sm:mb-10">
                Meet Our Mentor
              </h2>
            </AnimatedSection>
            <div className="text-center font-labrada text-base sm:text-lg text-gray-700 space-y-4 leading-relaxed">
              <AnimatedSection animation="fadeInUp" delay={400}>
                <p>{dance.name} is led by passionate teachers who bring years of experience to every class.</p>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={500}>
                <p>Under the guidance of the {dance.name} tradition, students develop discipline and creativity.</p>
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>

        {/* History & Legacy */}
        <AnimatedSection animation="fadeIn" delay={200}>
          <section className="p-6 sm:p-8 bg-white rounded-xl shadow-2xl">
            <AnimatedSection animation="fadeInUp" delay={300}>
              <h2 className="text-center font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-600 mb-6">
                History & Legacy
              </h2>
            </AnimatedSection>
            <div className="font-labrada text-gray-700 space-y-4 text-base sm:text-lg leading-relaxed text-justify">
              <AnimatedSection animation="fadeInUp" delay={400}>
                <p>
                  {dance.name} has inspired generations of artists with its deep cultural roots and timeless beauty.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={500}>
                <p>
                  From humble beginnings to global recognition, {dance.name} continues to thrive in the hearts of learners.
                </p>
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SingleDance;
