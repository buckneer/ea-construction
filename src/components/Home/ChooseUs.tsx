import React from "react";
import { FaMedal, FaCheckCircle, FaHardHat } from 'react-icons/fa';

const reasons = [
  {
    id: 1,
    icon: FaMedal,
    title: 'Experience & Expertise',
    description: 'With years of industry experience, our team brings expertise to every project, ensuring high-quality results.',
  },
  {
    id: 2,
    icon: FaCheckCircle,
    title: 'Quality & Precision',
    description: 'We maintain the highest standards of quality with meticulous attention to detail in every aspect of construction.',
  },
  {
    id: 3,
    icon: FaHardHat,
    title: 'Safety & Reliability',
    description: 'Safety is our priority. We adhere to strict protocols and deliver reliable, timely service you can count on.',
  },
];

export default function ChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            EAstronghold is committed to delivering exceptional quality and value in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="bg-gray-50 rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-malachite-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon className="text-3xl text-malachite-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {title}
              </h3>
              <p className="text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}