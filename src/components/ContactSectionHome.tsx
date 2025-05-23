import React from 'react';
import { Button } from './button'; // Assuming button component exists
import { Link } from 'react-router-dom';

const ContactSectionHome = () => {
  return (
    <section id="contact-home" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="[font-family:'Labrada',Helvetica] font-medium text-[#544c4c] text-4xl md:text-[50px] mb-8">
          Get in Touch
        </h2>
        <p className="[font-family:'Labrada',Helvetica] text-lg mb-8 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions about our classes, performances, or anything else, feel free to reach out.
        </p>
        <Button asChild className="[font-family:'Labrada',Helvetica] font-medium bg-[#2c282a] text-white text-xl md:text-2xl px-8 py-3 rounded-full hover:bg-[#1a1818] transition-colors">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactSectionHome;
