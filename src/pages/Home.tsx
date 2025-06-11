import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Intro from "./Intro";

import ennistymon from "../assets/ennistymon.jpg";
import pozzoleone from "../assets/pozzoleone.jpg";
import schimatari from "../assets/schimatari.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [introVisible, setIntroVisible] = useState(true);
  const [introFadingOut, setIntroFadingOut] = useState(false);

  useEffect(() => {
    if (introVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [introVisible]);

  const handleIntroFinish = () => {
    setIntroFadingOut(true);
    setTimeout(() => {
      setIntroVisible(false);
    }, 1000);
  };

  return (
    <div className="w-screen min-h-screen text-gray-900 bg-gray-100 relative overflow-x-hidden overflow-y-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Blurred Image Background Grid */}
        <div className="absolute top-0 left-0 flex h-full w-full z-0 overflow-hidden">
          {[ennistymon, pozzoleone, schimatari].map((img, i) => (
            <div
              key={i}
              className="w-1/3 h-full bg-cover bg-center filter blur-lg brightness-50 scale-110"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-md mb-4 text-gray-100">
            Irish Twin Towns
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed text-gray-100">
            Discover how towns across Ireland are connected with communities
            around the world through{" "}
            <span className="text-green-400 font-semibold">town twinning</span>{" "}
            partnerships.
          </p>

          {/* Start Exploring Button */}
          <button
            onClick={() => navigate("/map")}
            className="mt-4 px-8 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-full shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          >
            Start Exploring
          </button>

          {/* Animated checkmark icon */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("about-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-12 flex justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v14"
                  style={{
                    strokeDasharray: 20,
                    strokeDashoffset: 0,
                    animation: "drawLine 4s ease-in-out infinite",
                  }}
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 14l6 6 6-6"
                  style={{
                    strokeDasharray: 20,
                    strokeDashoffset: 0,
                    animation: "drawLine 4s ease-in-out infinite",
                  }}
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Additional content sections */}

      {/* About Section */}
      <section
        id="about-section"
        className="max-w-4xl mx-auto px-6 py-24 text-gray-900"
      >
        <h2 className="text-4xl font-extrabold mb-4 border-b-4 border-green-400 inline-block pb-2">
          What is Town Twinning?
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg max-w-prose space-y-6">
          Town twinning is a cultural and social partnership between towns or
          cities in different countries. These relationships are established to
          foster friendship, understanding, and cooperation across borders.
          Through town twinning, communities share experiences, promote cultural
          exchange, encourage tourism, and develop economic and educational
          ties. The connections often lead to joint events, student exchanges,
          business collaborations, and mutual visits that enrich local life and
          build lasting international bonds.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg max-w-prose space-y-6">
          This site explores the unique network of Irish towns and their twin
          towns around the world, showcasing how these partnerships strengthen
          global relationships and celebrate shared heritage.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 mb-24 bg-white rounded-3xl shadow-xl">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 border-b-4 border-green-600 inline-block pb-2">
          A Brief History of Town Twinning
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mb-8">
          Town twinning, also known as sister city partnerships, began in the
          aftermath of World War II as a grassroots movement to promote peace,
          understanding, and cooperation across borders. The idea was simple yet
          powerful: connect towns and cities from different countries to foster
          cultural exchange and mutual respect. These partnerships became
          symbols of reconciliation and hope during a time of rebuilding.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mb-8">
          In Europe, the movement gained momentum with the formation of
          institutions like the **Council of European Municipalities and Regions
          (CEMR)**, which helped formalise thousands of links between
          towns—particularly between France and Germany in the 1950s. Over time,
          town twinning expanded beyond Europe, creating global networks of
          friendship and cooperation. Today, there are more than **40,000
          twinning arrangements** worldwide.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
          In **Ireland**, the tradition took hold in the latter half of the 20th
          century, often driven by local councils, diaspora links, and shared
          heritage. Many Irish towns are now twinned with counterparts in
          **France, Italy, Germany, the United States**, and beyond. These
          partnerships have led to joint festivals, student exchanges, economic
          collaborations, and deep personal connections that endure across
          generations.
        </p>
      </section>

      {/* // Featured Twin Towns Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-gradient-to-r from-green-50 via-white to-green-50 rounded-3xl shadow-xl mb-24">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 border-b-4 border-green-600 inline-block pb-2">
          Featured Twin Towns
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg max-w-2xl mb-12">
          Ireland's twin towns stretch across Europe and beyond. Here are a few
          featured connections that showcase how cultural ties create
          long-lasting friendships, vibrant events, and new opportunities for
          collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
              src={ennistymon}
              alt="Ennistymon"
              className="w-full h-52 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Ennistymon, Ireland
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ennistymon is a vibrant town in County Clare, known for its
                stunning landscapes, rich history, and welcoming community. It
                serves as a hub for cultural exchange, hosting various events
                and festivals that celebrate local traditions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
              src={pozzoleone}
              alt="Pozzoleone"
              className="w-full h-52 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Pozzoleone, Italy
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pozzoleone is a charming town in the Veneto region of Italy,
                known for its picturesque landscapes and rich cultural heritage.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
              src={schimatari}
              alt="Schimatari"
              className="w-full h-52 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Schimatari, Greece
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Schimatari is a historic town in Greece, known for its
                archaeological sites and beautiful landscapes. It has a rich
                cultural heritage and is a popular destination for visitors
                interested in history and nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro overlay */}
      {introVisible && (
        <Intro isFadingOut={introFadingOut} onFinish={handleIntroFinish} />
      )}
    </div>
  );
}
