import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Typed } from "./typeWrapper";
import { FaWhatsapp } from "react-icons/fa";

const images = [
  "/istockphoto-1338646661-612x612.jpg",
  "/hero2.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const mainLine = "Welcome to Tonye Store";

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.3, duration: 0.8, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <section className="relative w-full h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        
        <motion.h2
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl sm:text-6xl font-extrabold mb-6 text-white"
        >
          {mainLine}
        </motion.h2>

        <Typed
          strings={[
            "Discover amazing products and deals just for you!",
            "Quality you can trust, prices you’ll love",
            "Shop now and elevate your lifestyle",
          ]}
          typeSpeed={60}
          backSpeed={30}
          backDelay={2000}
          loop
          className="text-lg sm:text-2xl text-gray-200 font-medium"
        />
      </div>

     
      <motion.a
        href="https://wa.me/07026236555"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </section>
  );
}
