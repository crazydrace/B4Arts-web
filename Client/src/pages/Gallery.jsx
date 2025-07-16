import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import image1 from "/image/1.jpg";
import image2 from "/image/2.jpg";
import image3 from "/image/3.jpg";
import image5 from "/image/5.jpg";
import image7 from "/image/7.jpg";
import image8 from "/image/8.jpg";
import image9 from "/image/9.jpg";
import image10 from "/image/10.jpg";
import image11 from "/image/11.jpg";
import image12 from "/image/12.jpg";
import image13 from "/image/13.jpg";
import image14 from "/image/14.jpg";
import image15 from "/image/15.jpg";
import {
  FiSearch,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiFilter,
  FiDownload,
} from "react-icons/fi";
import { FaShare } from "react-icons/fa";

const categories = [
  "All",
  "Abstract",
  "Portraits",
  "Landscapes",
  "Digital",
  "Mixed Media",
];

const imagesData = [
  {
    src: image1,
    title: "Reflection",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: "120 × 90 cm",
    category: "Abstract",
  },
  {
    src: image2,
    year: 2023,
    title: "Contrast",
    medium: "Acrylic and Ink",
    dimensions: "90 × 60 cm",
    category: "Mixed Media",
  },
  {
    src: image3,
    title: "Emotion",
    year: 2023,
    medium: "Digital Art",
    dimensions: "Print on Demand",
    category: "Digital",
  },

  {
    src: image5,
    title: "Horizon",
    year: 2020,
    medium: "Oil on Canvas",
    dimensions: "100 × 150 cm",
    category: "Landscapes",
  },

  {
    src: image7,
    title: "Fragments",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "80 × 80 cm",
    category: "Abstract",
  },
  {
    src: image8,
    title: "Fragments",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "80 × 80 cm",
    category: "Abstract",
  },
  {
    src: image9,
    title: "Fragments",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "80 × 80 cm",
    category: "Abstract",
  },
  {
    src: image10,
    title: "Fragments",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "80 × 80 cm",
    category: "Abstract",
  },
  {
    src: image11,
    title: "Fragments",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "80 × 80 cm",
    category: "Abstract",
  },
  {
    src: image12,
    title: "Fragments",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "80 × 80 cm",
    category: "Abstract",
  },
  {
    src: image13,
    title: "Fragments",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "80 × 80 cm",
    category: "Abstract",
  },
  {
    src: image14,
    title: "Fragments",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "80 × 80 cm",
    category: "Abstract",
  },
  {
    src: image15,
    title: "Fragments",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "80 × 80 cm",
    category: "Abstract",
  },
];

const Gallery = () => {
  const [images, setImages] = useState(imagesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [sortBy, setSortBy] = useState("newest");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filteredImages = images
    .filter(
      (img) =>
        img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.medium.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (img) => selectedCategory === "All" || img.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "newest") return b.year - a.year;
      if (sortBy === "oldest") return a.year - b.year;

      return 0;
    });

  const openLightbox = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = "hidden";
  };
  const handleShare = (img) => {
    if (!img || !img.src) {
      toast.error("Image not found or still loading.");
      return;
    }

    const fullUrl = window.location.origin + img.src;

    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        toast.success("Image link copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy. Please try manually.");
      });
  };

  const handleDownload = (img) => {
    const link = document.createElement("a");
    link.href = img.src;
    link.download = img.title.replace(/\s+/g, "_") + ".jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentIndex + 1) % filteredImages.length;

    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a0a12] py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD2DC] to-[#CF0F47]">
            Bishr's Art Works
          </h1>
          <div className="w-24 h-1 bg-[#CF0F47] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A curated collection of works spanning different mediums and styles
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left mb-8 gap-4">
          {/* Search */}
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search artworks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1a0a12] border border-[#670D2F] rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#CF0F47]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <FiX />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="relative w-full md:w-auto">
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="flex items-center justify-center gap-2 bg-[#1a0a12] border border-[#670D2F] rounded-lg px-4 py-2 text-white hover:bg-[#670D2F]/30 transition-colors w-full md:w-auto"
            >
              <FiFilter />
              <span>Filters</span>
            </button>

            {isFiltersOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-64 bg-[#1a0a12] border border-[#670D2F] rounded-lg shadow-lg z-10 p-4"
              >
                <h3 className="font-medium text-[#FFD2DC] mb-2">Categories</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-sm py-1 px-2 rounded ${
                        selectedCategory === category
                          ? "bg-[#CF0F47] text-white"
                          : "bg-[#670D2F]/30 text-gray-300 hover:bg-[#670D2F]/50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <h3 className="font-medium text-[#FFD2DC] mb-2">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-[#670D2F]/30 border border-[#670D2F] rounded-lg px-3 py-1 text-white focus:outline-none focus:ring-1 focus:ring-[#CF0F47]"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </motion.div>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-xl bg-[#1a0a12] border border-[#670D2F]/50 hover:border-[#CF0F47]/30 transition-all w-full max-w-sm"
            >
              <div className="relative overflow-hidden h-60 sm:h-72 md:h-80">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                  onClick={() => openLightbox(img)}
                />
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-medium text-white">
                    {img.title}
                  </h3>
                  <span className="text-sm text-gray-400">{img.year}</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">{img.medium}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-xl text-[#FFD2DC] mb-2">No artworks found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-[#CF0F47] hover:text-[#FFD2DC] transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center p-4 overflow-y-auto"
              onClick={closeLightbox}
            >
              <div
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("prev");
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-[#670D2F] transition-colors z-10"
                >
                  <FiChevronLeft size={24} className="text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("next");
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-[#670D2F] transition-colors z-10"
                >
                  <FiChevronRight size={24} className="text-white" />
                </button>

                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-[#670D2F] transition-colors z-10"
                >
                  <FiX size={24} className="text-white" />
                </button>

                <div className="flex flex-col lg:flex-row gap-8 h-full">
                  <div className="lg:w-2/3 h-full">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="w-full h-full max-h-[70vh] object-contain"
                    />
                  </div>

                  <div className="lg:w-1/3 text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedImage.title}
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-sm text-gray-400">Year</h4>
                        <p>{selectedImage.year}</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400">Medium</h4>
                        <p>{selectedImage.medium}</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400">Dimensions</h4>
                        <p>{selectedImage.dimensions}</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400">Category</h4>
                        <p>{selectedImage.category}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => handleShare(selectedImage)}
                        className="flex items-center gap-2 bg-[#670D2F]/50 px-4 py-2 rounded-lg hover:bg-[#670D2F] transition-colors"
                      >
                        <FaShare />
                        <span>Share</span>
                      </button>

                      <button
                        onClick={() => handleDownload(selectedImage)}
                        className="flex items-center gap-2 bg-[#670D2F]/50 px-4 py-2 rounded-lg hover:bg-[#670D2F] transition-colors"
                      >
                        <FiDownload />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Gallery;
