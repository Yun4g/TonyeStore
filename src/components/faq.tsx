import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What products do we offer?",
    answer:
      "We offer a wide range of quality products including  Earings, Necklace etc.",
  },
  {
    question: "Do you offer shipping?",
    answer: "Yes shipping is available on orders within  Rivers State",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Products must be in original condition.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-[#050b41]">
        Frequently Asked Questions
      </h2>



      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
       
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl inline-block"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ originY: 0 }}
                    className="px-6 pb-4 text-gray-700"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
