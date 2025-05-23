import React from 'react';

// Placeholder image paths - replace with your actual images in the /public folder
const mainImage = "/dance1.png"; // Example: /images/contact/main.jpg
const subImage1 = "/perfImage.png"; // Example: /images/contact/sub1.jpg
const subImage2 = "/perfImage.png"; // Example: /images/contact/sub2.jpg

const formFields = [
  { label: "Name", type: "text", name: "name", placeholder: "Your Full Name" },
  { label: "Email", type: "email", name: "email", placeholder: "your.email@example.com" },
  { label: "Phone", type: "tel", name: "phone", placeholder: "(123) 456-7890" },
  { label: "Address", type: "text", name: "address", placeholder: "123 Main St" },
  { label: "State", type: "text", name: "state", placeholder: "Your State" },
];

const Contact = () => {
  return (
    // Navbar is handled globally by App.tsx
    // The main div for page content starts here
    <div className="bg-[#fcfcfc] pt-[70px] md:pt-[90px]"> {/* Added top padding to account for fixed Navbar height */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-labrada text-3xl md:text-4xl font-semibold text-gray-700 mb-12 text-center">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
          {/* Left Column: Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="w-full overflow-hidden rounded-xl shadow-lg">
              <img src={mainImage} alt="Contact Main" className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full overflow-hidden rounded-xl shadow-lg">
                <img src={subImage1} alt="Contact Sub 1" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full overflow-hidden rounded-xl shadow-lg">
                <img src={subImage2} alt="Contact Sub 2" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-10 rounded-xl shadow-xl">
            <form>
              {formFields.map((field) => (
                <div className="mb-6" key={field.name}> {/* Adjusted margin */}
                  <label htmlFor={field.name} className="block font-labrada text-sm text-gray-600 mb-2">{field.label}</label> {/* Adjusted label style */}
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#2c282a] font-labrada text-gray-700 transition-colors" // Enhanced input style
                  />
                </div>
              ))}
              <div className="mb-6">
                <label htmlFor="message" className="block font-labrada text-sm text-gray-600 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4} // Increased rows
                  placeholder="Your message..."
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#2c282a] font-labrada text-gray-700 transition-colors" // Enhanced textarea style
                ></textarea>
              </div>
              <button
                type="submit"
                className="font-labrada font-medium bg-[#2c282a] text-white text-lg px-8 py-3 rounded-lg hover:bg-[#1a1818] transition-colors w-full mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
