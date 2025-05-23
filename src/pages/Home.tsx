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
    <div className="bg-[#fcfcfc] flex flex-col items-center w-full min-h-screen"> {/* Added min-h-screen to ensure footer can be at bottom */}
      {/* Navigation */}
      <Navbar /> {/* Use the Navbar component */}

      {/* Hero Section */}
      <div className="w-full"> {/* Removed pt-[120px] md:pt-[140px] */}
        <HeroSection />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-8 w-full max-w-[1728px]">
        {/* Classes section */}
        <section id="classes" className="py-16">
          <h2 className="font-labrada font-medium text-[#544c4c] text-4xl md:text-[64px] text-center mb-8">
            Classes
          </h2>
          <p className="font-labrada font-medium text-[#695e5e] text-lg md:text-xl text-center max-w-[977px] mx-auto mb-12">
            Experience our latest class additions featuring mesmerizing dance
            compositions and standalone performances that beautifully represent
            the richness of Indian art and culture. Join us now and immerse
            yourself in the magic.
          </p>

          {/* Updated Card Layout */}
          <div className="flex flex-col lg:flex-row gap-6 mb-16">
            {/* Large Card (First Item) */}
            {danceClasses.length > 0 && (
              <Card
                key={danceClasses[0].id}
                className="relative overflow-hidden border-none rounded-xl lg:w-1/2 h-[400px] md:h-[500px] lg:h-[591px]"
                style={{
                  backgroundImage: `url(${danceClasses[0].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <CardContent
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex justify-between items-end"
                >
                  <div>
                    <Badge className="bg-black/40 backdrop-blur-sm rounded-lg font-labrada font-semibold text-white text-sm md:text-base px-3 py-1.5">
                      {danceClasses[0].title}
                    </Badge>
                  </div>
                  {danceClasses[0].description && (
                    <p className="text-white text-xs md:text-sm font-labrada font-medium max-w-[60%] md:max-w-[50%] ml-4 text-right">
                      {danceClasses[0].description}
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Grid for Smaller Cards (Remaining Items) */}
            {danceClasses.length > 1 && (
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {danceClasses.slice(1).map((danceClass) => (
                  <Card
                    key={danceClass.id}
                    className="relative overflow-hidden border-none rounded-xl h-[280px] sm:h-[240px] md:h-[285px]" // Adjusted height for 2x2 grid
                    style={{
                      backgroundImage: `url(${danceClass.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <CardContent
                      className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                    >
                      <Badge className="bg-black/40 backdrop-blur-sm rounded-lg font-labrada font-semibold text-white text-xs md:text-sm px-2.5 py-1">
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