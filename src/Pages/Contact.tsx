import { useEffect, useState } from "react";
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
    }, []);

    return (
        <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {images.map((img, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${img})` }}
                        className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
            </div>

            <div className="relative z-10">
                <Navbar />
            </div>

            <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-4 py-16">
                <section className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        I'd love to hear from you. Below are the best ways to reach me.
                    </p>
                </section>

                <section className="bg-black/50 rounded-2xl p-6 sm:p-10 shadow-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                        <div className="flex flexcol md:flex-row items-center justify-between">
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
        </div>
    );
}

