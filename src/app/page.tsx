import { ScrollButton } from "@/components/scrollbutton";
import Image from "next/image";
import React from "react";
import ContactForm from "./contact-form";

const Home: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-gray-50 p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gray-300 rounded-lg flex-shrink-0">
            <Image
              src="/me.webp"
              alt="Nadeem's Profile Picture"
              className="w-full h-full object-cover rounded-lg"
              width={300}
              height={700}
            />
          </div>

          <div className="text-center md:text-left max-w-lg lg:max-w-md space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">Hi, I'm Nadeem</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              I'm a solution engineer with a talent for tackling complex
              challenges and developing impactful software solutions. I bring
              diverse skills and creative problem-solving to every project, with
              a mission to drive meaningful impact through innovation,
              collaboration, and community.
            </p>
            <div className="flex mt-4 space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/nadeemcite"
                target="_blank"
                className="text-blue-500 hover:underline text-lg"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nadeem-sajjad/"
                target="_blank"
                className="text-blue-500 hover:underline text-lg"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/nadym_sazad"
                target="_blank"
                className="text-blue-500 hover:underline text-lg"
              >
                X
              </a>
            </div>

            <div className="mt-8">
              <ScrollButton section={"portfolio"} />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card bg-gray-100 shadow p-4">
            <h3 className="text-xl font-semibold">Interpals Client</h3>
            <p className="text-sm mt-2">
              A Python client using OpenAI API for scheduling and automation.
            </p>
            <a
              href="https://github.com/nadeemcite"
              className="btn btn-sm btn-primary mt-4"
            >
              View on GitHub
            </a>
          </div>
          <div className="card bg-gray-100 shadow p-4">
            <h3 className="text-xl font-semibold">Automotive Scheduler</h3>
            <p className="text-sm mt-2">
              An automation tool built in Python with Google Apps Script
              integration.
            </p>
            <a
              href="https://github.com/nadeemcite"
              className="btn btn-sm btn-primary mt-4"
            >
              View on GitHub
            </a>
          </div>
          <div className="card bg-gray-100 shadow p-4">
            <h3 className="text-xl font-semibold">Easy Quran App</h3>
            <p className="text-sm mt-2">
              A front-end project using Ionic and open APIs for seamless data
              access.
            </p>
            <a
              href="https://github.com/nadeemcite"
              className="btn btn-sm btn-primary mt-4"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills & Tools</h2>
        <div className="flex flex-wrap justify-center space-x-4 max-w-3xl mx-auto">
          <div className="badge badge-primary m-2">Python</div>
          <div className="badge badge-primary m-2">JavaScript</div>
          <div className="badge badge-primary m-2">TypeScript</div>
          <div className="badge badge-primary m-2">Next.js</div>
          <div className="badge badge-primary m-2">FastAPI</div>
          <div className="badge badge-primary m-2">Docker</div>
          <div className="badge badge-primary m-2">Kubernetes</div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-gray-50 text-center">
        <ContactForm />
      </section>

      <footer className="py-8 bg-gray-800 text-gray-200 text-center">
        <p>
          Connect with me on{" "}
          <a
            href="https://github.com/nadeemcite"
            target="_blank"
            className="text-blue-400"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/nadeem-sajjad/"
            target="_blank"
            className="text-blue-400"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://x.com/nadym_sazad"
            target="_blank"
            className="text-blue-400"
          >
            X
          </a>
        </p>
        <p className="mt-4">&copy; 2024 Nadeem – devnadeem.com</p>
      </footer>
    </div>
  );
};

export default Home;
