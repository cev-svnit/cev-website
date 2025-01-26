// // "use client";
// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // interface GridItem {
// //   image: string;
// //   title: string;
// //   description: string;
// // }

// // export default function LandingPage() {
// //   const items: GridItem[] = [
// //     {
// //       image: "/images/image.jpeg",
// //       title: "The Perfect Sandwich, A Real NYC Classic",
// //       description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
// //     },
// //     {
// //       image: "/images/image.jpeg", 
// //       title: "Let Me Tell You About This Steak",
// //       description: "Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.",
// //     },
// //     {
// //       image: "/images/image.jpeg",
// //       title: "Cherries, interrupted",
// //       description: "Lorem ipsum text praesent tincidunt ipsum lipsum.",
// //     },
// //     {
// //       image: "/images/image.jpeg",
// //       title: "Wine and Pasta",
// //       description: "Lorem ipsum text praesent tincidunt ipsum lipsum.",
// //     },
// //     {
// //       image: "/images/image.jpeg",
// //       title: "Summer Popsicle",
// //       description: "Lorem ipsum text praesent tincidunt ipsum lipsum.",
// //     },
// //     {
// //       image: "/images/image.jpeg",
// //       title: "Fresh Salmon",
// //       description: "Lorem ipsum text praesent tincidunt ipsum lipsum.",
// //     },
// //   ];

// //   return (
// //     <div className="container mx-auto px-8 py-16 max-w-7xl">
// //         <h1 className="text-4xl font-vindey text-navy text-center mb-12">
// //         Events
// //       </h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //         {items.map((item, index) => (
// //           <motion.div
// //             key={index}
// //             className="bg-off-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
// //             whileHover={{ scale: 1.02 }}
// //             transition={{ duration: 0.2 }}
// //           >
// //             <div className="relative h-96 w-full">
// //               <Image
// //                 src={item.image}
// //                 alt={item.title}
// //                 fill
// //                 className="object-cover"
// //                 sizes="(max-width: 768px) 100vw, 50vw"
// //                 priority={index < 2}
// //               />
// //             </div>
// //             <div className="p-8 space-y-4">
// //               <h3 className="font-vindey text-navy text-2xl">
// //                 {item.title}
// //               </h3>
// //               <p className="font-foundrey text-blue text-lg">
// //                 {item.description}
// //               </p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// interface GridItem {
//   image: string;
//   title: string;
//   description: string;
// }

// export default function LandingPage() {
//   const eventItems: GridItem[] = [
//     {
//       image: "/images/Finfiesta.png",
//       title: "FinFiesta 2024: A Journey Through Financial Brilliance",
//       description: "From 14th to 16th September, FinFiesta 2024 brought together finance enthusiasts for three days of learning, competition, and strategic brilliance. The event featured insightful talks from industry leaders, dynamic stock market challenges, and engaging financial games like Auction and Monopoly. It was a celebration of financial expertise, fostering knowledge, collaboration, and innovation among participants.",
//     },
//     {
//       image: "/images/DalalStreet.png",
//       title: "Dalal Street-2024",
//       description: "Dalal Street-2024, organized by Mindbend 2024 in collaboration with CEV and StockGro, brings the excitement of stock trading to life. Set in the year 1992, this offline competition challenges participants to strategize, buy, and sell stocks to maximize their portfolio value. With INR 15,000 in prize money at stake, it’s the ultimate test of market expertise and decision-making.",
//     },
//     {
//       image: "/images/Escapify.png",
//       title: "Escapify: An Unforgettable Adventure for Freshmen",
//       description: "Escapify is an immersive journey designed to introduce freshmen to the thrill of adventure and the vibrant world of our club. Step into a realm of captivating challenges that test your wits, spark your curiosity, and reveal hidden wonders. Join us as we transcend reality and create unforgettable moments in this one-of-a-kind escapade!",
//     },
//     {
//       image: "/images/Strategix.png",
//       title: "Strategix 3.0: The Ultimate Case Study Challenge",
//       description: "Strategix 3.0 invites students nationwide to showcase their problem-solving skills and creativity in a dynamic three-round competition. Hosted on the online platform Unstop this event ensures accessibility to participants from across the country. Don’t miss your chance to push boundaries, think outside the box, and compete for the title of ultimate strategist",
//     }
//   ];

//   const workshopItems: GridItem[] = [
//     {
//       image: "/images/image.jpeg",
//       title: "Horizon Magazine",
//       description: "Horizon, our annual magazine featuring finance and tech in a year-wrap theme.",
//     },
//     {
//       image: "/images/Gamedev.png",
//       title: "Game Development Workshop",
//       description: "An immersive Game Development Workshop, presented by MINDBEND in collaboration with CEV and Red & White Multimedia Education. This workshop is designed for gaming enthusiasts who want to learn how to create their own virtual worlds, equipping you with the skills to transform your gaming ideas into reality. Unlock your creativity and innovation in the exciting field of game development!",
//     },
//     {
//       image: "/images/image.jpeg",
//       title: "Data Science BootCamp",
//       description: "This 18-day Bootcamp offers an immersive experience in Data Science, exclusively for CEV members. Participants will explore key topics like building algorithmic trading bots, analyzing market trends, leveraging financial sentiment for predictions, and optimizing premium pricing for insurance policies. Gain hands-on experience and tackle real-world challenges in this comprehensive program!",
//     },
//     {
//       image: "/images/image.jpeg",
//       title: "Portfolio",
//       description: "Organized a portfolio making competition to leverage the Resumes of executives,showcasing their achievements and technical brilliance. ",
//     },
//     {
//       image: "/images/image.jpeg",
//       title: "Research Intern Sessions",
//       description: "Exclusively for Cutting Edge Visionaries Executives, this event is your gateway to unlocking top research internship opportunities. Dive into a comprehensive roadmap, strategic application techniques, and insights into IIT & IIM opportunities. Gain insider strategies, direct mentorship, and unfiltered institutional insights to elevate your research journey.",
//     },
    
//   ];

// //   const CardGrid = ({ items }: { items: GridItem[] }) => (
// //     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //       {items.map((item, index) => (
// //         <motion.div
// //           key={index}
// //           className="bg-off-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
// //           whileHover={{ scale: 1.02 }}
// //           transition={{ duration: 0.2 }}
// //         >
// //           <div className="relative h-96 w-full">
// //             <Image
// //               src={item.image}
// //               alt={item.title}
// //               fill
// //               className="object-cover"
// //               sizes="(max-width: 768px) 100vw, 50vw"
// //               priority={index < 2}
// //             />
// //           </div>
// //           <div className="p-8 space-y-4">
// //             <h3 className="font-vindey text-navy text-2xl">{item.title}</h3>
// //             <p className="font-foundrey text-blue text-lg">{item.description}</p>
// //           </div>
// //         </motion.div>
// //       ))}
// //     </div>
// //   );

// //   return (
// //     <div className="container mx-auto px-8 py-16 max-w-7xl">
// //       <section className="mb-20">
// //         <h1 className="text-4xl font-vindey text-navy text-center mb-12">
// //           Events
// //         </h1>
// //         <CardGrid items={eventItems} />
// //       </section>

// //       <section>
// //         <h1 className="text-4xl font-vindey text-navy text-center mb-12">
// //           Workshops + Projects
// //         </h1>
// //         <CardGrid items={workshopItems} />
// //       </section>
// //     </div>
// //   );
// // }
// const CardGrid = ({ items, isWorkshop = false }: { items: GridItem[], isWorkshop?: boolean }) => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//     {items.slice(0, isWorkshop ? 4 : items.length).map((item, index) => (
//       <motion.div
//         key={index}
//         className="bg-off-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.2 }}
//       >
//         <div className="relative h-96 w-full">
//           <Image
//             src={item.image}
//             alt={item.title}
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 50vw"
//             priority={index < 2}
//           />
//         </div>
//         <div className="p-8 space-y-4">
//           <h3 className="font-vindey text-navy text-2xl">{item.title}</h3>
//           <p className="font-foundrey text-blue text-lg">{item.description}</p>
//         </div>
//       </motion.div>
//     ))}
//     {isWorkshop && items[4] && (
//       <motion.div
//         className="bg-off-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 md:col-span-2 md:w-1/2 mx-auto"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.2 }}
//       >
// <div className="relative h-96 w-full">
//             <Image
//               src={items[4].image}
//               alt={items[4].title}
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, 50vw"
//             />
//           </div>
//           <div className="p-8 space-y-4">
//             <h3 className="font-vindey text-navy text-2xl">{items[4].title}</h3>
//             <p className="font-foundrey text-blue text-lg">{items[4].description}</p>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );

//   return (
//     <div className="container mx-auto px-8 py-16 max-w-7xl">
//       <section className="mb-20">
//         <h1 className="text-4xl font-vindey text-navy text-center mb-12">
//           Events
//         </h1>
//         <CardGrid items={eventItems} />
//       </section>

//       <section>
//         <h1 className="text-4xl font-vindey text-navy text-center mb-12">
//           Workshops + Projects
//         </h1>
//         <CardGrid items={workshopItems} isWorkshop={true} />
//       </section>
//     </div>
//   );
// }
"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

interface GridItem {
  image: string;
  title: string;
  description: string;
  id: string;
}

export default function LandingPage() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const eventItems: GridItem[] = [
    {
      id: 'finfiesta',
      image: "/images/finfiesta.jpeg",
      title: "FinFiesta 2024: A Journey Through Financial Brilliance",
      description: "From 14th to 16th September, FinFiesta 2024 brought together finance enthusiasts for three days of learning, competition, and strategic brilliance. The event featured insightful talks from industry leaders, dynamic stock market challenges, and engaging financial games like Auction and Monopoly. It was a celebration of financial expertise, fostering knowledge, collaboration, and innovation among participants.",
    },
    {
      id:'strategix',
      image: "/images/Strategix.png",
       title: "Strategix 3.0: The Ultimate Case Study Challenge",
       description: "Strategix 3.0 invites students nationwide to showcase their problem-solving skills and creativity in a dynamic three-round competition. Hosted on the online platform Unstop this event ensures accessibility to participants from across the country. Don’t miss your chance to push boundaries, think outside the box, and compete for the title of ultimate strategist",
    },
    {
      id: 'dalalStreet',
      image: "/images/DalalStreet.png",
      title: "Dalal Street-2024: Relive 1992's Stock Market Thrills ",
      description: "Dalal Street-2024, organized by Mindbend 2024 in collaboration with CEV and StockGro, brings the excitement of stock trading to life. Set in the year 1992, this offline competition challenges participants to strategize, buy, and sell stocks to maximize their portfolio value. With INR 15,000 in prize money at stake, it’s the ultimate test of market expertise and decision-making.",
    },
    {
      id:'escapify',
      image: "/images/escapify.jpeg",
      title: "Escapify: An Unforgettable Adventure for Freshmen",
      description: "Escapify is an immersive journey designed to introduce freshmen to the thrill of adventure and the vibrant world of our club. Step into a realm of captivating challenges that test your wits, spark your curiosity, and reveal hidden wonders. Join us as we transcend reality and create unforgettable moments in this one-of-a-kind escapade!",
    }
  ];

  // const Carousel = () => (
  //   <div className="mb-16">
  //     <Slider {...carouselSettings}>
  //       {[...eventItems, ...workshopItems].map((item, index) => (
  //         <div key={index} className="px-4">
  //           <div className="bg-off-white rounded-xl overflow-hidden shadow-lg">
  //             <div className="relative h-64">
  //               <Image
  //                 src={item.image}
  //                 alt={item.title}
  //                 fill
  //                 className="object-cover"
  //               />
  //             </div>
  //             <div className="p-6">
  //               <h3 className="font-vindey text-navy text-xl mb-2">{item.title}</h3>
  //               <Link 
  //                 href={`/events/${item.id}`}
  //                 className="text-blue hover:text-navy transition-colors"
  //               >
  //                 Read More →
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </Slider>
  //   </div>
  // );
  const Carousel = (): JSX.Element => (
    <div className="mb-16">
      <Slider {...carouselSettings}>
        {[...eventItems, ...workshopItems].map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-off-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-vindey text-navy text-xl mb-2">{item.title}</h3>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="text-blue hover:text-navy transition-colors cursor-pointer"
                >
                  Read More →
                </button>
                </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

  const workshopItems: GridItem[] = [
        {
          id:'workshop1',
          image: "/images/horizon.jpeg",
          title: "Horizon Magazine: A Year of Breakthroughs and Innovation",
          description: "Step into the world of innovation with Horizon Magazine, a curated collection of major breakthroughs and events from each month of the year. Celebrate the milestones that shaped science, technology, and creativity, and discover the ideas that continue to inspire change.",
        },
        {
          id:'workshop2',
          image: "/images/gamedev.jpeg",
          title: "Game Development Workshop: Create Your Own Virtual Worlds!",
          description: "An immersive Game Development Workshop, presented by MINDBEND in collaboration with CEV and Red & White Multimedia Education. This workshop is designed for gaming enthusiasts who want to learn how to create their own virtual worlds, equipping you with the skills to transform your gaming ideas into reality. Unlock your creativity and innovation in the exciting field of game development!",
        },
        {
          id:'workshop3',
          image: "/images/bootcamp.jpeg",
          title: "Data Science Bootcamp: Master Real-World Financial Insights!",
          description: "This 18-day Bootcamp offers an immersive experience in Data Science, exclusively for CEV members. Participants will explore key topics like building algorithmic trading bots, analyzing market trends, leveraging financial sentiment for predictions, and optimizing premium pricing for insurance policies. Gain hands-on experience and tackle real-world challenges in this comprehensive program!",
        },
        {
          id:'workshop4',
          image: "/images/portfolio.webp",
          title: "Portfolio-Making: Showcasing Creativity and Personal Branding!",
          description: "The portfolio-making competition, exclusive to CEV executives, tasked individuals with designing unique portfolio websites. Participants showcased creativity, technical skills, and personal branding through visually appealing designs. The event emphasized originality, user experience, and the effective presentation of achievements and skills.",
        },
        {
          id:'workshop5',
          image: "/images/researchintern.jpeg",
          title: "Research Internship Workshop: Unlock Opportunities at IITs & IIMs!",
          description: "Exclusively for Cutting Edge Visionaries Executives, this event is your gateway to unlocking top research internship opportunities. Dive into a comprehensive roadmap, strategic application techniques, and insights into IIT & IIM opportunities. Gain insider strategies, direct mentorship, and unfiltered institutional insights to elevate your research journey.",
        },
        
 ];

  const CardGrid = ({ items, isWorkshop = false }: { items: GridItem[], isWorkshop?: boolean }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {items.slice(0, isWorkshop ? 4 : items.length).map((item, index) => (
        <motion.div
          id={item.id}
          key={index}
          className="bg-off-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative h-96 w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index < 2}
            />
          </div>
          <div className="p-8 space-y-4">
            <h3 className="font-vindey text-navy text-2xl">{item.title}</h3>
            <p className="font-foundrey text-blue text-lg">{item.description}</p>
          </div>
        </motion.div>
      ))}
      {isWorkshop && items[4] && (
        <motion.div
          className="bg-off-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 md:col-span-2 md:w-1/2 mx-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative h-96 w-full">
            <Image
              src={items[4].image}
              alt={items[4].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 space-y-4">
            <h3 className="font-vindey text-navy text-2xl">{items[4].title}</h3>
            <p className="font-foundrey text-blue text-lg">{items[4].description}</p>
          </div>
        </motion.div>
      )}
    </div>
  );

  return (
    <ParallaxProvider>
      <div className="container mx-auto px-8 py-16 max-w-7xl">
        <Carousel/>
        <section className="mb-20">
          <Parallax y={[-20, 20]}>
            <h1 className="text-4xl font-vindey text-navy text-center mb-12">
              Events
            </h1>
          </Parallax>
          <CardGrid items={eventItems} />
        </section>

        <section>
          <Parallax y={[-20, 20]}>
            <h1 className="text-4xl font-vindey text-navy text-center mb-12">
              Workshops + Projects
            </h1>
          </Parallax>
          <CardGrid items={workshopItems} isWorkshop={true} />
        </section>
      </div>
    </ParallaxProvider>
  );
}