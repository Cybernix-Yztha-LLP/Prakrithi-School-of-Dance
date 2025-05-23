import React from 'react';

const trainerInfo = {
  name: "Dr. Kalamandalam Viswasree",
  image: "/trainer.png", // Replace with actual path to trainer image in /public
  bio: [
    "Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture.",
    "Join us now and immerse yourself in the magic. Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture.",
    "Join us now and immerse yourself in the magic. Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture. Join us now and immerse yourself in the magic."
  ],
  achievementsTitle: "Achievements",
  // Add achievements data if needed, e.g., achievements: ["Award 1", "Recognition 2"]
};

const AboutTrainerSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-labrada text-3xl md:text-4xl font-semibold text-center text-[#333] mb-12">
          {trainerInfo.name}
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Left Column: Image and Achievements */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <img
              src={trainerInfo.image}
              alt={trainerInfo.name}
              className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover mb-6"
            />
            <h3 className="font-labrada text-2xl font-medium text-[#444] mb-3">
              {trainerInfo.achievementsTitle}
            </h3>
            {/* Placeholder for achievements list */}
            <ul className="list-disc list-inside text-gray-600 font-labrada">
              <li>Achievement 1 placeholder...</li>
              <li>Achievement 2 placeholder...</li>
              <li>Achievement 3 placeholder...</li>
            </ul>
          </div>

          {/* Right Column: Bio */}
          <div className="w-full md:w-2/3">
            {trainerInfo.bio.map((paragraph, index) => (
              <p key={index} className="font-labrada text-base text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainerSection;
