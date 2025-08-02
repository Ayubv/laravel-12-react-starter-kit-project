import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {

    }
  }, []);

  return (
    <section className="bg-[#F0F4FF] py-20 px-6 mb-5" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1B1C57] pb-3 wow animate__animated animate__fadeInDown">
          <span className="inline-block border-b-4 border-yellow-300 pb-2">
            About Us
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {["Mission", "Vision"].map((title, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center wow animate__animated animate__fadeInUp"

            >
              <h3 className="text-2xl font-semibold text-[#1B1C57] mb-4">
                Our {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {title === "Mission"
                  ? "We strive to provide the highest quality services and ensure our customers have a seamless experience. Our mission is to empower people with technology and creativity."
                  : "We envision a world where innovation drives progress and everyone has access to the tools they need to succeed. Our team works tirelessly to make this vision a reality."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
