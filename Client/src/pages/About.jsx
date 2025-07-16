import { motion } from "framer-motion";
import {
  FaPalette,
  FaAward,
  FaRegCalendarAlt,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
import bishr from "../assets/image/about.jpg"; // Ensure this path is correct

const About = () => {
  const [activeTab, setActiveTab] = useState("bio");

  const achievements = [
    {
      year: "2015",
      title: "Journey of Colors",
      description: "Recognized by lorem Art Foundation",
    },
    {
      year: "2021",
      title: "Contemporary Art Prize",
      description: "Kerala Art Exhibition",
    },
    {
      year: "2019",
      title: "First Solo Exhibition",
      description: "Emotions in Color at ArtHub Malappuram",
    },
  ];

  const education = [
    {
      year: "2019 - On going",
      institution: "Darul Huda University",
      degree: "Hudawi",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a0a12] py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD2DC] to-[#CF0F47]">
            About Bishr
          </h1>
          <div className="w-24 h-1 bg-[#CF0F47] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Visual storyteller bridging emotions and abstract expression
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Artist Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative order-last lg:order-first"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#CF0F47] to-[#670D2F] rounded-xl opacity-70 blur-xl -z-10"></div>
            <div className="relative overflow-hidden rounded-xl h-full min-h-[400px]">
              <img
                src={bishr}
                alt="Bishr in his studio"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#FFD2DC] transition-colors"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://x.com/MuhammadBi29996"
                    className="text-gray-300 hover:text-[#FFD2DC] transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tab Navigation */}
            <div className="flex border-b border-[#670D2F]">
              <button
                onClick={() => setActiveTab("bio")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "bio"
                    ? "text-[#FFD2DC] border-b-2 border-[#CF0F47]"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Biography
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "achievements"
                    ? "text-[#FFD2DC] border-b-2 border-[#CF0F47]"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Achievements
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "education"
                    ? "text-[#FFD2DC] border-b-2 border-[#CF0F47]"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Education
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === "bio" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 leading-relaxed mb-6">
                    My name is Bishr Muhammed, and I am a freelance portrait
                    artist born on September 29, 2007, in Manjeri, Malappuram,
                    Kerala. From a young age, I developed a strong passion for
                    art, particularly in capturing the emotions and expressions
                    of people through portraiture. I currently work
                    independently, creating detailed and expressive portraits
                    for a variety of clients. Through my artwork, I aim to
                    reveal the unique personality and story behind each face I
                    draw. I am constantly improving my skills and look forward
                    to expanding my reach and sharing my art with a broader
                    audience.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    From the quiet town of Manjeri, I turned scribbles into a
                    voice of my own. Freelancing gave me freedom — not just to
                    earn, but to evolve. Each portrait I create is part
                    reflection, part rebellion.
                  </p>
                  <div className="bg-[#1a0a12] p-6 rounded-xl border border-[#670D2F]/50">
                    <div className="flex items-start">
                      <FaPalette
                        className="text-[#CF0F47] mt-1 mr-4"
                        size={20}
                      />
                      <div>
                        <h3 className="text-lg font-medium text-[#FFD2DC] mb-2">
                          Artistic Philosophy
                        </h3>
                        <p className="text-gray-300">
                          "Art is a language that transcends words, a medium
                          through which I express the inexpressible. My work
                          seeks to evoke emotions and provoke thought, inviting
                          viewers to engage with the deeper layers of human
                          experience."
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "achievements" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20 }}
                      animate={{ x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="bg-[#CF0F47] rounded-full p-3 mr-4">
                        <FaAward className="text-white" size={16} />
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <FaRegCalendarAlt
                            className="text-gray-400 mr-2"
                            size={14}
                          />
                          <span className="text-sm text-gray-400">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-[#FFD2DC]">
                          {item.title}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20 }}
                      animate={{ x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#1a0a12] p-6 rounded-xl border border-[#670D2F]/50"
                    >
                      <div className="flex items-center mb-2">
                        <FaRegCalendarAlt
                          className="text-gray-400 mr-2"
                          size={14}
                        />
                        <span className="text-sm text-gray-400">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-[#FFD2DC]">
                        {item.institution}
                      </h3>
                      <p className="text-gray-300">{item.degree}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Artist Statement */}
            <motion.div
              className="bg-[#670D2F]/30 p-6 rounded-xl border border-[#CF0F47]/30 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-[#FFD2DC] mb-4">
                Artist Statement
              </h3>
              <p className="text-gray-300 italic leading-relaxed">
                "My work is an ongoing exploration of the human condition
                through the lens of abstract representation. I strive to create
                pieces that resonate on a visceral level, inviting viewers to
                project their own experiences and emotions onto the canvas. Each
                stroke is a deliberate act of communication, a visual language
                that transcends cultural boundaries."
              </p>
            </motion.div>
          </div>
        </div>

        {/* Current Projects */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 text-[#FFD2DC]">
            Current Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Example Art",
                description: "Mixed media series exploring cityscapes",
              },
              {
                title: "Example Portraits",
                description: "Portrait collection capturing unspoken emotions",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-[#1a0a12] p-6 rounded-xl border border-[#670D2F]/50 hover:border-[#CF0F47]/30 transition-all"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
                <a href="/gallery">
                  <button className="mt-4 text-sm text-[#CF0F47] hover:text-[#FFD2DC] transition-colors">
                    View Project Details →
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
