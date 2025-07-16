import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [activeTab, setActiveTab] = useState("form");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <FiMail size={24} className="text-[#CF0F47]" />,
      title: "Email",
      value: "bishrmuhammad564@gmail.com",
      action: "mailto:contact@bishr.art",
    },
    {
      icon: <FiPhone size={24} className="text-[#CF0F47]" />,
      title: "Phone",
      value: "+91 8891 845 261",
      action: "tel:+918891845261",
    },
    {
      icon: <FiMapPin size={24} className="text-[#CF0F47]" />,
      title: "Studio",
      value: "ART BY BISHR, Manjeri, Malappuram, Kerala, India",
      action: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram size={20} />,
      name: "Instagram",
      url: "https://www.instagram.com/bishhr_manjeri",
    },
    {
      icon: <FaBehance />,
      name: "Behance",
      url: "https://www.behance.net/bishrmuhammad",
    },
    {
      icon: <FaLinkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bishr-muhammad-4b2591374/",
    },
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(
        "https://b4arts-web.onrender.com/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send email");
      }

      setStatus("sent");
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Error sending message:", err.message);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (activeTab === "form") {
      setStatus("idle");
    }
  }, [activeTab]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a0a12] py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD2DC] to-[#CF0F47]">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-[#CF0F47] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a commission? Reach out
            through the form or contact me directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#1a0a12] border border-[#670D2F]/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#FFD2DC]">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-[#670D2F]/30 rounded-full">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{method.title}</h3>
                      <a
                        href={method.action}
                        className="text-gray-300 hover:text-[#FFD2DC] transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10">
                <h3 className="text-lg font-medium mb-4 text-[#FFD2DC]">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      aria-label={social.name}
                      className="w-12 h-12 rounded-full bg-[#1a0a12] border border-[#670D2F] flex items-center justify-center text-xl hover:bg-[#670D2F]/30 hover:text-[#FFD2DC] transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1a0a12] border border-[#670D2F]/50 rounded-xl p-8"
          >
            <div className="flex border-b border-[#670D2F] mb-6">
              <button
                onClick={() => setActiveTab("form")}
                className={`px-4 py-2 font-medium ${activeTab === "form" ? "text-[#FFD2DC] border-b-2 border-[#CF0F47]" : "text-gray-400 hover:text-gray-300"}`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`px-4 py-2 font-medium ${activeTab === "faq" ? "text-[#FFD2DC] border-b-2 border-[#CF0F47]" : "text-gray-400 hover:text-gray-300"}`}
              >
                FAQ
              </button>
            </div>

            {activeTab === "form" ? (
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-[#670D2F]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiCheck size={32} className="text-[#CF0F47]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#FFD2DC] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out. I'll get back to you within
                      24-48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#CF0F47] hover:text-[#FFD2DC] transition-colors font-medium"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {["name", "email", "subject", "message"].map((field) => (
                      <div key={field}>
                        <label
                          htmlFor={field}
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          {field === "email"
                            ? "Email Address *"
                            : field === "name"
                              ? "Full Name *"
                              : field === "subject"
                                ? "Subject *"
                                : "Message *"}
                        </label>
                        {field === "message" ? (
                          <textarea
                            id={field}
                            name={field}
                            rows="5"
                            value={formData[field]}
                            onChange={handleChange}
                            className={`w-full bg-[#0d0d0d] border ${
                              formErrors[field]
                                ? "border-red-500"
                                : "border-[#670D2F]"
                            } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#CF0F47]`}
                            placeholder="Tell me about your project or inquiry..."
                          />
                        ) : (
                          <input
                            type={field === "email" ? "email" : "text"}
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className={`w-full bg-[#0d0d0d] border ${
                              formErrors[field]
                                ? "border-red-500"
                                : "border-[#670D2F]"
                            } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#CF0F47]`}
                            placeholder={
                              field === "email"
                                ? "your@email.com"
                                : field === "subject"
                                  ? "What's this about?"
                                  : "Your name"
                            }
                          />
                        )}
                        {formErrors[field] && (
                          <p className="mt-1 text-sm text-red-500">
                            {formErrors[field]}
                          </p>
                        )}
                      </div>
                    ))}

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#CF0F47] to-[#670D2F] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2"
                    >
                      {status === "sending" ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 bg-red-900/30 border border-red-700 rounded-lg p-3 text-red-300"
                      >
                        <FiAlertCircle size={20} />
                        <p>Something went wrong. Please try again later.</p>
                      </motion.div>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            ) : (
              <motion.div
                key="faq"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-[#FFD2DC] mb-4">
                  Frequently Asked Questions
                </h3>
                {[
                  {
                    question: "How do I commission a custom artwork?",
                    answer:
                      "Please use the contact form to describe your vision, preferred medium, size, and timeline. I'll respond with availability and pricing details.",
                  },
                  {
                    question: "What is your pricing structure?",
                    answer:
                      "Pricing varies based on size, medium, and complexity. Small works start at Indian rupee  Symbol ₹500.",
                  },
                  {
                    question: "Do you ship nationally?",
                    answer:
                      "Yes, I ship nationwide with professional art handlers. Shipping costs are calculated based on destination and artwork size.",
                  },
                  {
                    question: "What is your turnaround time?",
                    answer:
                      "Turnaround time depends on my current commission queue and the complexity of the piece. Typically 2-3 weeks for most works.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-[#670D2F]/30 pb-4"
                  >
                    <h4 className="font-medium text-white mb-2">
                      {item.question}
                    </h4>
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
