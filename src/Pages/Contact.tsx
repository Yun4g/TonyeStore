import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {
    const images = [
        "/istockphoto-1338646661-612x612.jpg",
        "/hero2.jpg",
    ];

    const [currentImage, setCurrentImage] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
            <div className="absolute inset-0 -z-20 pointer-events-none">
                {images.map((img, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${img})` }}
                        className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"} -z-20`}
                    />
                ))}

                <div aria-hidden="true" className="absolute inset-0 bg-black/50 -z-10 pointer-events-none" />
            </div>

            <div className="relative z-10">
                <Navbar />
            </div>

            <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-4 py-16">
    

                <section className="bg-black/50 rounded-2xl p-6 sm:p-10 shadow-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Email</h2>
                                <p className="text-gray-300">tonyeimama@gmail.com</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mt-4 mb-2">Phone</h2>
                                <p className="text-gray-300">+234 702 623 6555</p>
                            </div>

                        </div>


                    </div>
                </section>
            </main>

            <Footer />
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
        </div>
    );
}

