"use client";

export const ScrollButton = ({ section }: { section: string }) => {
  const scrollToSection = () => {
    const portfolioSection = document.getElementById(section);
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={scrollToSection}
      className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
    >
      View My Work
    </button>
  );
};
