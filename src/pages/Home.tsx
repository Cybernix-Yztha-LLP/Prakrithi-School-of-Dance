import { Link, useNavigate } from "react-router-dom";
import { Badge } from "../components/badge";
import { Card, CardContent } from "../components/card";
import HeroSection from "../components/HeroSection"; // Assuming HeroSection is moved to components
import Navbar from "../components/Navbar"; // Import the Navbar component
import { AnimatedSection } from "../components/AnimatedSection";
import { lazy } from "react";


//lazy import the components

const AboutTrainerSection = lazy(() => import("../components/AboutTrainerSection"));
const HomePagePerformances = lazy(() => import("../components/HomePagePerformances"));
const PerformancesSection = lazy(() => import("../components/PerformancesSection"));
const ContactSectionHome = lazy(() => import("../components/ContactSectionHome"))

const danceClasses = [
  {
    id: 1,
    link:'/dance/bharathanatyam',
    title: "Bharathanatyam",
    image: "/bharata.webp", // Ensure these paths are correct relative to public folder
    description:
      "Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture. Join us now and immerse yourself in the magic.",
  },
  {
    id: 2,
    link:'/dance/mohiniyattom',
    title: "Mohiniyattam",
    image: "/mohiniyattom.webp",
  },
  {
    id: 3,
    link:'/dance/kuchupudi',
    title: "Kuchipudi",
    image: "/kuchupudi.webp",
  },
  {
    id: 4,
    link:'#',
    title: "Koodiyattam",
    image: "/face.jpg",
  },
  {
    id: 5,
    link:'#',
    title: "nangiyarkoothu",
    image: "/nangiar.JPG", // Duplicate image, consider unique images
  },
];

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fcfcfc] flex flex-col items-center w-full min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[1728px]">
        {/* Classes section */}
        <section id="classes" className="py-12 md:py-16">
          <AnimatedSection animation="fadeInUp" threshold={0.2}>
            <h2 className="font-labrada font-medium text-[#544c4c] text-3xl sm:text-4xl md:text-[54px] lg:text-[64px] text-center mb-6 md:mb-8">
              Classes
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={200} threshold={0.2}>
            <p className="font-labrada font-medium text-[#695e5e] text-base sm:text-lg md:text-xl text-center max-w-prose lg:max-w-[977px] mx-auto mb-10 md:mb-12">
              Experience our latest class additions featuring mesmerizing dance
              compositions and standalone performances that beautifully represent
              the richness of Indian art and culture. Join us now and immerse
              yourself in the magic.
            </p>
          </AnimatedSection>

          {/* Updated Card Layout */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12 md:mb-16">
            {/* Large Card (First Item) */}
            {danceClasses.length > 0 && (
              <AnimatedSection animation="scaleIn" delay={400} className="lg:w-1/2">
                <Link to={danceClasses[0].link}>
                <Card
                  key={danceClasses[0].id}
                  className="cursor-pointer relative overflow-hidden border-none rounded-xl min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[591px] flex flex-col justify-end group hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  style={{
                    backgroundImage: `url(${danceClasses[0].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  <CardContent className="cursor-pointer relative z-10 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col sm:flex-row justify-between items-start sm:items-end w-full">
                    <div>
                      <Badge className="bg-black/40 backdrop-blur-sm rounded-lg font-labrada font-semibold text-white text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1.5 transform group-hover:scale-105 transition-transform duration-300">
                        {danceClasses[0].title}
                      </Badge>
                    </div>
                    {danceClasses[0].description && (
                      <p className="text-white text-xs sm:text-sm font-labrada font-medium max-w-full sm:max-w-[60%] md:max-w-[50%] mt-2 sm:mt-0 sm:ml-4 text-left sm:text-right opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {danceClasses[0].description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Link>
              </AnimatedSection>
            )}

            {/* Grid for Smaller Cards (Remaining Items) */}
            {danceClasses.length > 1 && (
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {danceClasses.slice(1).map((danceClass, index) => (
                  <AnimatedSection 
                    key={danceClass.id}
                    animation="slideInUp" 
                    delay={600 + index * 150}
                  >
                    <Link to={danceClass.link}>
                    <Card
                      className="cursor-pointer relative overflow-hidden border-none rounded-xl min-h-[200px] sm:min-h-[240px] md:min-h-[285px] flex flex-col justify-end group hover:shadow-xl hover:scale-105 transition-all duration-300"
                      style={{
                        backgroundImage: `url(${danceClass.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                      <CardContent className="relative z-10 p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent w-full">
                        <Badge className="bg-black/40 backdrop-blur-sm rounded-lg font-labrada font-semibold text-white text-xs sm:text-sm md:text-base px-2 py-1 sm:px-2.5 sm:py-1 transform group-hover:scale-105 transition-transform duration-300">
                          {danceClass.title}
                        </Badge>
                      </CardContent>
                    </Card>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Imported Sections */}
        <AboutTrainerSection />
        <HomePagePerformances />
        <PerformancesSection />
        <ContactSectionHome />
      </div>
    </div>
  );
};

export default Home;