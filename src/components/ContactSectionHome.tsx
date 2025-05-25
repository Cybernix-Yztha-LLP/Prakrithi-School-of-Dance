import React from 'react';
import { Button } from './button'; // Assuming button component exists
import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';

const ContactSectionHome = () => {
  return (
    <section id="contact-home" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection animation="scaleIn">
          <h2 className="[font-family:'Labrada',Helvetica] font-medium text-[#544c4c] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] mb-6 md:mb-8">
            Get in Touch
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeInUp" delay={200}>
          <p className="[font-family:'Labrada',Helvetica] text-base sm:text-lg mb-6 md:mb-8 max-w-prose lg:max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our classes, performances, or anything else, feel free to reach out.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeInUp" delay={400}>
          <Button asChild className="[font-family:'Labrada',Helvetica] font-medium bg-[#2c282a] text-white text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:bg-[#1a1818] transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden group">
            <Link to="/contact">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSectionHome;
