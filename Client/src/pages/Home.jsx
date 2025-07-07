import { motion } from "framer-motion";
import bishr from "../assets/image/bishr.jpg";

const Home = () => {
  return (
    <main className="bg-[#0d0d0d] min-h-screen overflow-hidden relative">
      {/* Animated Background Circles */}
      <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: i * 0.3, duration: 2 }}
            className="absolute border border-[#670D2F] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-6 md:px-16 py-20 min-h-screen z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl">
          {/* Text Section */}
          <div className="space-y-8 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FFD2DC] to-[#CF0F47]"
            >
              Hey, I am Bishr
            </motion.h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-2 text-gray-300">
              Where <span className="text-[#FFD2DC]">Emotion</span> Meets Canvas
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed"
            >
              Each piece is a journey through color, texture, and raw human
              experience. Discover the stories behind the strokes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#gallery"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(207, 15, 71, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#CF0F47] hover:bg-[#a50c39] text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg"
              >
                Explore Gallery
              </motion.a>

              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block border-2 border-[#CF0F47] text-[#CF0F47] px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg"
              >
                Artist's Story
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center md:justify-start pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {["Instagram", "Behance", "Artsy"].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-[#FFD2DC] transition-colors duration-300 text-sm tracking-wide"
                >
                  {platform}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative flex justify-center"
          >
            {/* Floating shapes */}
            <motion.div
              className="absolute -left-10 -top-10 w-32 h-32 bg-[#670D2F] opacity-70 rounded-lg -rotate-12"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute -right-10 -bottom-10 w-28 h-28 bg-[#CF0F47] opacity-70 rounded-lg rotate-6"
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Artist Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#CF0F47] rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <motion.img
                src={""}
                alt="Bishr - Artist"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl relative z-10 border-4 border-white/20 group-hover:border-[#FFD2DC]/30 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              />
              <motion.div
                className="absolute -bottom-6 right-10 bg-black/80 px-4 py-2 rounded-full text-[#FFD2DC] font-serif italic text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Bishr
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
