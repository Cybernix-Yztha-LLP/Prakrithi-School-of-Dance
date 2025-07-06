import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { useParams } from "react-router-dom";
import { Card } from "../components/card";
import { Images } from "lucide-react";

const dances = [
  {
    id: "bharathanatyam",
    name: "Bharatanatyam",
    images:['bharatanatyam1.webp', 'bharathanatyam2.webp', 'bharathanatyam3.webp', 'bharathanatyam4.webp', 'bharathanatyam7.webp', 'bharathanatyam8.webp', 'bharathanatyam9.webp', 'bharathanatyam10.webp']

  },
  {
    id: 'mohiniyattom',
    name: 'Mohiniyattom',
    images:['mohiniyattom.webp', 'mohiniyattom2.webp', 'mohiniyattom3.webp', 'mohiniyattom4.webp']
  },
  {
    id: 'kuchupudi',
    name: 'Kuchupudi',
    images:['kuchupudi1.webp', 'kuchupudi2.webp']

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
        </header>
        {/* <AnimatedSection animation="fadeIn" delay={300}>
          <section className="mb-12 md:mb-20 bg-white rounded-xl shadow-2xl flex flex-col md:flex-row">
              <img src={dance.cover} className="rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:w-6/12 h-auto w-full"/>
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
        </AnimatedSection> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {dance.images.map((image, index) => (
              <AnimatedSection 
                key={dance.id}
                animation="slideInUp" 
                delay={700 + index * 200}
              >
                <Card className="relative overflow-hidden rounded-2xl shadow-xl group min-h-[350px] sm:min-h-[400px]">
                  <img src={`/${id}/${image}`} alt={dance.name} className="absolute inset-0 w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"/>
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                    <h3 className="font-labrada text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">{}</h3>
                    <p className="font-labrada text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4 line-clamp-3">{}</p>
                  </div>
                </Card>
              </AnimatedSection>
  ))}
  </div>
                    
      </div>
      
    </div>
    
  );
};

export default SingleDance;
