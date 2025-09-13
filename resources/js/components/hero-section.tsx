import React from "react";

interface HeroSectionProps {
  hero: {
    title?: string;
    typed_texts?: string[];
    description?: string;
    background_image?: string;
    profile_image?: string;
    button_text?: string;
    button_link?: string;
  };
  onScrollToProfile?: () => void;
}

const HeroSection = ({ hero, onScrollToProfile }: HeroSectionProps) => {
  if (!hero) return null;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: hero.background_image
          ? `url(/storage/${hero.background_image})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-6">
        {/* LEFT - Text Content */}
        <div className="space-y-6 text-center md:text-left">
          {/* Title */}
         

          {/* Typed Texts */}
          {hero.typed_texts && (
            <p className="text-lg sm:text-2xl font-medium opacity-90 animate-fade-in">
              {hero.typed_texts.join(" • ")}
            </p>
          )}

          {/* Description */}
          {hero.description && (
            <p className="text-base sm:text-lg opacity-80 leading-relaxed animate-fade-in max-w-xl">
              {hero.description}
            </p>
          )}

          {/* Action Button */}
          {hero.button_text && hero.button_link && (
            <a
              href={hero.button_link}
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition transform hover:scale-105 animate-bounce"
            >
              {hero.button_text}
            </a>
          )}

          {/* Scroll to Profile */}
          {onScrollToProfile && (
            <button
              onClick={onScrollToProfile}
              className="block mt-6 underline hover:text-blue-400 transition"
            >
              View Profile ↓
            </button>
          )}
        </div>

        {/* RIGHT - Profile Image */}
        {hero.profile_image && (
          <div className="flex justify-center md:justify-end">
            <img
              src={`/storage/${hero.profile_image}`}
              alt="Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-white shadow-xl animate-fade-in"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
