import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050b41] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Tracy Luxe Jewels</h1>
          <p className="text-gray-300">
            Bringing you quality products and amazing deals. Shop with confidence.
          </p>
          <div className="flex space-x-4 mt-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.2, color: "#FFD700" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-300 hover:text-yellow-400"
                >
                  <Icon size={20} />
                </motion.a>
              )
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
    
          </ul>
        </div>

        {/* Newsletter
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h2>
          <p className="text-gray-300 mb-3">
            Get the latest deals and offers straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold transition-colors">
              Subscribe
            </button>
          </form>
        </div> */}
      </div>


      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Tracy Luxe Jewels. All rights reserved.
      </div>
    </footer>
  );
}
