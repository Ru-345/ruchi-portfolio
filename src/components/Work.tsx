import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Veer Real Estate",
    category: "Real Estate",
    tools: "TypeScript, Next.js, NestJS, PostgreSQL",
    image: "/images/veer.png",
  },
  {
    title: "College Management System",
    category: "College Management System",
    tools: "TypeScript, React.js, Next.js, NestJS, MongoDB",
    image: "/images/college-placement.png",
  },
  {
    title: "Scancode",
    category: "QR Code Generator",
    tools: "TypeScript, Next.js, NestJS",
    image: "/images/scancode.png",
  },
  {
    title: "Govarthan Thal",
    category: "Restaurant ",
    tools: "Serverless, Next.js, MongoDB",
    image: "/images/govarthan.png",
  },
  {
    title: "Gym Management System",
    category: "Gym Management System",
    tools: "TypeScript, Next.js, NestJS, PostgreSQL",
    image: "/images/gym-management.png",
  },
  {
    title: "Avishkar Reality",
    category: "Real Estate",
    tools: "TypeScript, Next.js, PostgreSQL",
    image: "/images/avishkar.png",
  },
  {
    title: "The Crystal Engagement",
    category: "company website",
    tools: "TypeScript, Next.js",
    image: "/images/crystal.png",
  },
  {
    title: "Soni Cosmetics",
    category: "jewellery website",
    tools: "TypeScript, Next.js",
    image: "/images/soni-cosmetics.png",
  },
  {
    title: "SFW Gym",
    category: "Gym website",
    tools: "TypeScript, Next.js",
    image: "/images/sfw-gym.png",
  },
  {
    title: "EverWorld",
    category: "Visa & Immigration",
    tools: "HTML, Tailwind CSS, JavaScript",
    image: "/images/everworld.png",
  },
  {
    title: "LFP Gym",
    category: "Gym website",
    tools: "HTML, Tailwind CSS, JavaScript",
    image: "/images/lfp.png",
  },
  // {
  //   title: "EverWorld",
  //   category: "Visa & Immigration",
  //   tools: "TypeScript, Next.js",
  //   image: "/images/everworld.png",
  // },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        className="carousel-project-image"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
