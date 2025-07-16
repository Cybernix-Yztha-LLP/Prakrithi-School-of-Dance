import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { useParams } from "react-router-dom";
import { Card } from "../components/card";
import { Image } from '@imagekit/react';
const dances = [
  {
    id: "bharathanatyam",
    name: "Bharatanatyam",
    images:['B1.webp', 'B2.webp', 'B3.webp', 'B4.webp', 'B5.webp', 'B6.webp', 'B9.webp.png', 'B11.webp', 'B12.webp', 'B13.webp', 'B14.webp', 'B15.webp', 'B16.webp', 'B17.webp', 'B18.webp']

  },
  {
    id: 'mohiniyattom',
    name: 'Mohiniyattom',
    images:['M1.webp', 'M2.webp', 'M3.webp', 'M4.webp']
  },
  {
    id: 'kuchupudi',
    name: 'Kuchupudi',
    images:['K1.webp', 'K2.webp','K3.webp','K4.webp']

  },
  {
    id: 'pooja',
    name: 'Prakrithi Fest',
    images:['P1.webp.png','P2.webp', 'P3.webp', 'P4.webp', 'P6.webp', 'P7.webp', 'P8.webp', 'P9.webp', 'P10.webp', 'P11.webp', 'P12.webp', 'P13.webp', 'P14.webp', 'P15.webp', 'P16.webp']
  },
  {
    id:'matrukam-kalavedi',
    name:'Matrukam Kalavedi',
    images:['MK1.webp','MK2.webp','MK3.webp']
  },
  {
    id:'nangiyarkoothu',
    name:'Nangiyarkoothu',
    images:['N1.jpg','N2.jpg','N3.jpg','N4.jpg']
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
          <section>
            <h1 className="font-labrada text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#636161] tracking-tight">
              {dance.name}
            </h1>
          </section>
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
              <section key={index}
              >
                <div className="max-h-full max-w-full relative rounded-2xl shadow-xl aspect-w-4 aspect-h-3">
                  <Image urlEndpoint='https://ik.imagekit.io/tlwmjfavy/' src={`/public/${id}/${image}`} alt={dance.name} className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105" loading="lazy" width='489' height='652'/>
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                    <h3 className="font-labrada text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">{}</h3>
                    <p className="font-labrada text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4 line-clamp-3">{}</p>
                  </div>
                </div>
              </section>
  ))}
  </div>
                    
      </div>
      
    </div>
    
  );
};

export default SingleDance;
