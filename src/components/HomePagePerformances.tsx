import React from 'react';
import { Card } from './card'; // Assuming Card component is available

const performanceImages = [
    { id: 1, src: "/Tperform1.png", alt: "Performance 1" }, // Replace with actual paths in /public
    { id: 2, src: "/Tperform2.png", alt: "Performance 2" }, // Replace with actual paths in /public
];

const HomePagePerformances = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="font-labrada text-3xl md:text-4xl font-semibold text-center text-[#333] mb-12">
                    Performances
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {performanceImages.map((image) => (
                        <Card key={image.id} className="overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-72 md:h-96 object-cover transform hover:scale-105 transition-transform duration-300 rounded-xl"
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomePagePerformances;
