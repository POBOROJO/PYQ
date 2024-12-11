"use client";
import React from "react";
import BackgroundBeams from "./components/sections/BackgroundBeams";
import HeroHighlight from "./components/sections/HeroHighlight";
import Highlight from "./components/sections/Highlight";
import TypewriterEffect from "./components/sections/TypewriterEffects";
import MacbookScroll from "./components/sections/MacbookScroll";
import FeaturesSection from "./components/sections/FeaturesSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import Footer from "./components/sections/Footer";
import {heroWords, features, workSteps} from "./data/index";


export default function Home() {

return (
  <div className="min-h-screen bg-black text-white overflow-x-hidden">
    {/* Futuristic Background */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
    </div>

    {/* Hero Section */}
    <section className="relative py-20 px-6 overflow-hidden">
      <BackgroundBeams className="absolute inset-0 opacity-50" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <HeroHighlight>
          <TypewriterEffect words={heroWords} />
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-white">
            <Highlight className="text-white">
              Padho chahe kahi se PYQ mile yahi se
            </Highlight>
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Your very own academic resource platform
          </p>
          <button className="mt-8 px-8 py-3 bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition shadow-lg">
            Explore Resources
          </button>
        </HeroHighlight>
      </div>
    </section>

    {/* Features Section */}
    <FeaturesSection features={features} />

    {/* How It Works Section */}
    <HowItWorksSection workSteps={workSteps} />

    {/* Macbook Showcase */}
    <section className="py-16 relative z-10">
      <MacbookScroll
        title="Get your notes on the go"
        badge="📚"
        src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
        showGradient={true}
      />
    </section>

    {/* Footer */}
    <Footer />
  </div>
);
}