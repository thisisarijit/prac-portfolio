import { ArrowRight, ExternalLink } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Foodpark",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore illo nihil aperiam!",
    image: "/projects/foodpark.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "YumSecrets",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore illo nihil aperiam!",
    image: "/projects/yumsecrets.png",
    tags: ["React", "CSS", "REST API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Face Recognition Attendance System",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore illo nihil aperiam!",
    image: "/projects/faceRecognition.png",
    tags: ["Python", "OpenCV", "LBPH", "tkinter"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt="project.title"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground  ">
                      {tag}
                    </span>
                  ))}
                
              </div>
              <h3 className=" mx-2 capitalize text-left mb-1 font-semibold text-xl">
                {project.title}
              </h3>
              <p className="mx-2 text-left text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3 mb-1">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    Github
                  </a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div  target="_blank" className="text-center mt-12">
            <a href="#" className="flex cosmic-button w-fit mx-auto items-center ">Check My Github <ArrowRight /> </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
