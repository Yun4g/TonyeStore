import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";


export default function About() {
  return (
    <div className="bg-gray-50">
     <Navbar/>
   <section className="w-full min-h-screen  py-16 px-4">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
     
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/tonye.jpg"
            alt="Owner"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-lg border-4 border-yellow-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#050b41] mb-6">
            About Tonye Store
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mb-4">
            Welcome to Tonye Store! Founded by  TamunoTonye TamunoImama, we are committed to providing high-quality products and exceptional service. Our mission is to make shopping easy, fun, and rewarding for every customer.
          </p>
          <p className="text-gray-700 text-lg sm:text-xl mb-6">
            At Tonye Store, we believe in trust, quality, and customer satisfaction. We carefully select our products to ensure you get the best value and experience possible.
          </p>

        </motion.div>
      </div>
    </section>
    </div>
   
  );
}
