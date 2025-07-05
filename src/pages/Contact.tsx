import React from 'react';
import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
// Placeholder image paths - replace with your actual images in the /public folder
const mainImage = "/dance1.png"; // Example: /images/contact/main.jpg
const subImage1 = "/perfImage.png"; // Example: /images/contact/sub1.jpg
const subImage2 = "/perfImage.png"; // Example: /images/contact/sub2.jpg

const formFields = [
  { label: "Name", type: "text", name: "name", placeholder: "Your Full Name" }
];




const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const phoneNumber = '+917907517186'; 
  const text = `Hello, my name is ${name}. ${message}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};
  return (
    <div className="bg-[#fcfcfc] pt-[80px] sm:pt-[100px] md:pt-[120px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <AnimatedSection animation="bounceIn" duration={1000}>
          <h1 className="font-labrada text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-10 md:mb-12 text-center">
            Contact Us
          </h1>
        </AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
          {/* Left Column: Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <AnimatedSection animation="slideInLeft" delay={200}>
              <div className="w-full overflow-hidden rounded-xl shadow-lg">
                <img src={mainImage} alt="Contact Main" className="w-full h-auto object-cover aspect-[4/3] sm:aspect-video" />
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatedSection animation="zoomIn" delay={400}>
                <div className="w-full overflow-hidden rounded-xl shadow-lg">
                  <img src={subImage1} alt="Contact Sub 1" className="w-full h-auto object-cover aspect-square sm:aspect-video" />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="rotateIn" delay={600}>
                <div className="w-full overflow-hidden rounded-xl shadow-lg">
                  <img src={subImage2} alt="Contact Sub 2" className="w-full h-auto object-cover aspect-square sm:aspect-video" />
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Column: Form */}
          <AnimatedSection animation="flipInY" delay={800} className="w-full lg:w-1/2 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl">
            <form onSubmit={handleSubmit}>
              {formFields.map((field, index) => (
                <AnimatedSection key={field.name} animation="slideInRight" delay={1000 + index * 100}>
                  <div className="mb-5 sm:mb-6">
                    <label htmlFor={field.name} className="block font-labrada text-sm sm:text-base text-gray-600 mb-1.5 sm:mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2.5 border-b-2 border-gray-300 focus:outline-none focus:border-[#2c282a] font-labrada text-gray-700 transition-colors text-sm sm:text-base"
                    value={name} onChange={(e) => setName(e.target.value)} required/>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection animation="lightSpeedIn" delay={1500}>
                <div className="mb-5 sm:mb-6">
                  <label htmlFor="message" className="block font-labrada text-sm sm:text-base text-gray-600 mb-1.5 sm:mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-3 py-2.5 border-b-2 border-gray-300 focus:outline-none focus:border-[#2c282a] font-labrada text-gray-700 transition-colors text-sm sm:text-base"
                  value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="heartBeat" delay={1700}>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 font-labrada font-medium bg-[#2c282a] text-white text-base sm:text-lg px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg hover:bg-[#1a1818] transition-colors w-full mt-4"
                >
                  <img src="/public/whatsapp.svg" alt="WhatsApp" className="w-7 h-7" />Send Message
                </button>
              </AnimatedSection>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
