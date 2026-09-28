import { ArrowRight, ExternalLink, Github, Smile } from "lucide-react";
import { SITE } from "@/config/site";

import VisionUgvImg from "@/assets/projects/vision_ugv.png";
import UniversalAiImg from "@/assets/projects/universal_ai.png";
import EwasteImg from "@/assets/projects/ewaste.png";
import ResumeAnalyzerImg from "@/assets/projects/resume_analyzer.png";

const projects = [
  {
    id: 1,
    title: "vision_ugv_autonomy",
    subtitle: "Smart India Hackathon 2026",
    description:
      "Engineered a vision-based autonomous navigation system for outdoor Unmanned Ground Vehicles (UGVs) operating in GPS-denied environments. Developed real-time path detection algorithms to distinguish traversable terrain from hazards (rocks, ditches) and implemented visual localization to estimate vehicle position and orientation without satellite data.",
    image: VisionUgvImg,
    tags: ["Python", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/Avis1229",
  },
  {
    id: 2,
    title: "Universal AI Media Pipeline",
    subtitle: "Cloudinary Hackathon • Team: Bareilly Innovator",
    description:
      "An API-first microservice that uses Cloudinary's AI transformations to process raw media and return optimized, lighter assets. Implements custom deskewing logic, RAM-based Multer storage for rapid processing, and CDN caching to reduce latency.",
    image: UniversalAiImg,
    tags: ["API", "Cloudinary AI", "Node.js", "Microservice"],
    githubUrl: "https://github.com/Avis1229",
  },
  {
    id: 3,
    title: "AI E-Waste Classification System",
    description:
      "Built a deep learning solution to automate the identification and categorization of 8 specific electronic waste types to aid responsible recycling. Optimized model training using a 50-epoch two-stage approach (transfer learning and fine-tuning) with a ResNet50 architecture. Deployed the interactive GUI via Streamlit on Hugging Face Spaces for real-time user image classification and confidence scoring.",
    image: EwasteImg,
    tags: ["PyTorch", "ResNet50", "Streamlit", "Hugging Face"],
    githubUrl: "https://github.com/Avis1229/E_Waste_Classification",
    huggingFaceUrl: "https://huggingface.co/spaces/Avis1229/E-Waste-Classifier16",
  },
  {
    id: 4,
    title: "AI Resume Analyzer",
    description:
      "Designed an automated pipeline for rich media processing, integrating various AI models to streamline data extraction and content generation. Developed a Resume Analyzer utilizing NLP to parse, evaluate, and score applicant data against specific job descriptions.",
    image: ResumeAnalyzerImg,
    tags: ["Python", "NLP", "Machine Learning"],
    githubUrl: "https://github.com/Avis1229/AI_Resume_Analyzer",
    huggingFaceUrl: "https://huggingface.co/spaces/Avis1229/AI-Resume-Analyzer",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-64 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-top"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                {project.subtitle && (
                  <p className="text-primary/80 text-sm font-medium mb-2">
                    {project.subtitle}
                  </p>
                )}
                <p className="text-muted-foreground text-sm mb-4 grow">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-4 items-center">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.huggingFaceUrl && (
                      <a
                        href={project.huggingFaceUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="Hugging Face Space"
                      >
                        <Smile size={20} />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer noopener"
            href={SITE.github}
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
