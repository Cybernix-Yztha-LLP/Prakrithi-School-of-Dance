import React from "react";
import { Badge } from "../components/badge";
import { Card, CardContent } from "../components/card";

// Dance class data based on the image
const danceClassesData = [
	{
		id: 1,
		title: "Bharathanatyam",
		image: "/path/to/bharathanatyam-large.jpg", // Replace with actual image path
		description:
			"Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture. Join us now and immerse yourself in the magic.",
		isLarge: true,
	},
	{
		id: 2,
		title: "Mohiniyattam",
		image: "/path/to/mohiniyattam.jpg", // Replace with actual image path
		isLarge: false,
	},
	{
		id: 3,
		title: "Kuchipudi",
		image: "/path/to/kuchipudi.jpg", // Replace with actual image path
		isLarge: false,
	},
	{
		id: 4,
		title: "Keralanadanam",
		image: "/path/to/keralanadanam.jpg", // Replace with actual image path
		isLarge: false,
	},
	{
		id: 5,
		title: "Nangiyarkoothu",
		image: "/path/to/nangiyarkoothu.jpg", // Replace with actual image path
		isLarge: false,
	},
];

export const ClassesSection = (): JSX.Element => {
	const largeCard = danceClassesData.find((cls) => cls.isLarge);
	const smallCards = danceClassesData.filter((cls) => !cls.isLarge);

	return (
		<section className="w-full bg-[#F8F5F2] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#544c4c] text-center mb-6 font-['Labrada',Helvetica]">
					classes
				</h2>
				<p className="text-base sm:text-lg text-[#695e5e] font-medium text-center max-w-prose lg:max-w-3xl mx-auto mb-10 md:mb-12 font-['Labrada',Helvetica]">
					Experience our latest class additions featuring mesmerizing dance
					compositions and standalone performances that beautifully represent
					the richness of Indian art and culture. Join us now and immerse
					yourself in the magic.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{largeCard && (
						<Card
							key={largeCard.id}
							className="md:col-span-2 rounded-xl shadow-lg overflow-hidden relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
						>
							<img
								src={largeCard.image}
								alt={largeCard.title}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 sm:p-6 flex flex-col justify-end">
								<div>
									<Badge className="bg-white/30 backdrop-blur-sm text-white font-['Labrada',Helvetica] font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md mb-2 text-xs sm:text-sm">
										{largeCard.title}
									</Badge>
									<p className="text-white text-xs sm:text-sm font-['Labrada',Helvetica] font-light leading-relaxed line-clamp-3 sm:line-clamp-4">
										{largeCard.description}
									</p>
								</div>
							</div>
						</Card>
					)}

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-1 md:grid-cols-1">
						{smallCards.map((danceClass) => (
							<Card
								key={danceClass.id}
								className="rounded-xl shadow-lg overflow-hidden relative min-h-[200px] sm:min-h-[240px] md:h-[242px]"
							>
								<img
									src={danceClass.image}
									alt={danceClass.title}
									className="w-full h-full object-cover"
								/>
								<div className="absolute bottom-0 left-0 p-3 sm:p-4">
									<Badge className="bg-black/50 backdrop-blur-sm text-white font-['Labrada',Helvetica] font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm">
										{danceClass.title}
									</Badge>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
