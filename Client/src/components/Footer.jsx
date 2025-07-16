import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaDribbble,
  FaBehance,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/bishhr_manjeri",
    },
    {
      icon: <FaLinkedin />,
      name: "Twitter",
      url: "https://www.linkedin.com/in/bishr-muhammad-4b2591374/",
    },
    {
      icon: <FaDribbble />,
      name: "Dribbble",
      url: "https://dribbble.com/bishr-muhammad",
    },
    {
      icon: <FaBehance />,
      name: "Behance",
      url: "https://www.behance.net/bishrmuhammad",
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Gallery", url: "/gallery" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <motion.footer
      className="bg-gradient-to-b from-[#1a0a12] to-[#3C0D25] text-white pt-16 pb-8 px-6 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#FFD2DC] to-[#CF0F47]">
              BISHR
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              "Art is not what you see, but what you make others see."
            </p>
            <p className="text-xs text-gray-400 mt-4">
              Contemporary visual artist exploring the intersection of emotion
              and form.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#FFD2DC] uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.url}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#CF0F47] rounded-full mr-3"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#FFD2DC] uppercase tracking-wider">
              Contact
            </h3>
            <address className="not-italic text-sm text-gray-300 space-y-3">
              <p>ART BY BISHR</p>
              <p>Malappuram, Kerala, India</p>
              <p>
                <a
                  href="mailto:contact@bishr.art"
                  className="hover:text-white transition-colors"
                >
                  bishrmuhammad564@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+971501234567"
                  className="hover:text-white transition-colors"
                >
                  +91 8891 845 261
                </a>
              </p>
            </address>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#FFD2DC] uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-[#3C0D25] flex items-center justify-center text-lg hover:bg-[#CF0F47] transition-colors duration-300 border border-[#670D2F]"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="pt-6 border-t border-[#670D2F]/40 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Bishr Art Studio. All rights
              reserved.
            </p>

            <p className="mt-2 md:mt-0 flex items-center justify-center">
              Developed by{" "}
              <Link
                to="https://dev-scp.vercel.app"
                className="text-cyan-400 hover:text-cyan-500 transition-colors ml-1"
              >
                {" "}
                SCP
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
