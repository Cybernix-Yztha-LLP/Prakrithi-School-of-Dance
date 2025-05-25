import React from "react";

import { useNavigate } from "react-router-dom";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import HeroSection from "../components/HeroSection"; // Assuming HeroSection is moved to components
import PerformancesSection from "../components/PerformancesSection"; // Assuming PerformancesSection is moved/created
import ContactSectionHome from "../components/ContactSectionHome"; // Assuming ContactSectionHome is moved/created
import AboutTrainerSection from "../components/AboutTrainerSection"; // Import new component
import HomePagePerformances from "../components/HomePagePerformances"; // Import new component
import Navbar from "../components/Navbar"; // Import the Navbar component

// Dance class cards data
const danceClasses = [
  {
    id: 1,
    title: "Bharathanatyam",
    image: "/dance1.png", // Ensure these paths are correct relative to public folder
    description:
      "Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture. Join us now and immerse yourself in the magic.",
  },
  {
    id: 2,
    title: "Mohiniyattam",
    image: "/Tperform1.png",
  },
  {
    id: 3,
    title: "Kuchipudi",
    image: "/perfImage.png",
  },
  {
    id: 4,
    title: "Keralanadanam",
    image: "/dance2.png",
  },
  {
    id: 5,
    title: "nangiyarkoothu",
    image: "/perfImage.png", // Duplicate image, consider unique images
  },
];

export const Home = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fcfcfc] flex flex-col items-center w-full min-h-screen">
      {/* Navigation */}
      <Navbar /> {/* Use the Navbar component */}

      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[1728px]">
        {/* Classes section */}
        <section id="classes" className="py-12 md:py-16">
          <h2 className="font-labrada font-medium text-[#544c4c] text-3xl sm:text-4xl md:text-[54px] lg:text-[64px] text-center mb-6 md:mb-8 animate-fadeInUp">
            Classes
          </h2>
          <p className="font-labrada font-medium text-[#695e5e] text-base sm:text-lg md:text-xl text-center max-w-prose lg:max-w-[977px] mx-auto mb-10 md:mb-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Experience our latest class additions featuring mesmerizing dance
            compositions and standalone performances that beautifully represent
            the richness of Indian art and culture. Join us now and immerse
            yourself in the magic.
          </p>

          {/* Updated Card Layout */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12 md:mb-16">
            {/* Large Card (First Item) */}
            {danceClasses.length > 0 && (
              <Card
                key={danceClasses[0].id}
                className="relative overflow-hidden border-none rounded-xl lg:w-1/2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[591px] flex flex-col justify-end animate-fadeInUp"
                style={{
                  backgroundImage: `url(${danceClasses[0].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <CardContent
                  className="p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col sm:flex-row justify-between items-start sm:items-end w-full"
                >
                  <div>
                    <Badge className="bg-black/40 backdrop-blur-sm rounded-lg font-labrada font-semibold text-white text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1.5">
                      {danceClasses[0].title}
                    </Badge>
                  </div>
                  {danceClasses[0].description && (
                    <p className="text-white text-xs sm:text-sm font-labrada font-medium max-w-full sm:max-w-[60%] md:max-w-[50%] mt-2 sm:mt-0 sm:ml-4 text-left sm:text-right">
                      {danceClasses[0].description}
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Grid for Smaller Cards (Remaining Items) */}
            {danceClasses.length > 1 && (
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {danceClasses.slice(1).map((danceClass, index) => (
                  <Card
                    key={danceClass.id}
                    className="relative overflow-hidden border-none rounded-xl min-h-[200px] sm:min-h-[240px] md:min-h-[285px] flex flex-col justify-end animate-fadeInUp"
                    style={{
                      backgroundImage: `url(${danceClass.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      animationDelay: `${0.2 + index * 0.1}s`
                    }}
                  >
                    <CardContent
                      className="p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent w-full"
                    >
                      <Badge className="bg-black/40 backdrop-blur-sm rounded-lg font-labrada font-semibold text-white text-xs sm:text-sm md:text-base px-2 py-1 sm:px-2.5 sm:py-1">
                        {danceClass.title}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Imported Sections */}
        <AboutTrainerSection />
        <HomePagePerformances />
        <PerformancesSection /> {/* This is the original generic PerformancesSection, consider if still needed or if HomePagePerformances replaces its role on Home */}
        <ContactSectionHome /> {/* Renamed to avoid conflict with a potential Contact Page */}
      </div>
    </div>
  );
};