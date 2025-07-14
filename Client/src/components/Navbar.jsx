import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];
  const handleNavClick = (path) => {
    onNavigate(path); // triggers transition
    setMenuOpen(false); // close mobile menu if open
  };

  return (
    <motion.nav
      className="w-full bg-black/80 backdrop-blur-md text-white fixed top-0 z-50 border-b border-[#670D2F]/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo with hover effect */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/"
            className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#FFD2DC] to-[#CF0F47]"
          >
            ART BY BISHR
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item.path}
                className="relative px-3 py-2 text-sm font-medium group"
              >
                <span
                  className="relative z-10"
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CF0F47] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.div className="md:hidden z-50" whileTap={{ scale: 0.9 }}>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CF0F47]/50"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX size={24} className="text-[#FFD2DC]" />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-sm pt-20 px-6 space-y-6"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={toggleMenu}
                    className="block text-xl py-4 border-b border-[#670D2F]/30 hover:text-[#FFD2DC] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
