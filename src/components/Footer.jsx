import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 bg-card relative border-t border-border mt-12 pt-5 flex flex-wrap justify-center items-center">
      <div>
        {/* profiles */}
        <div className="flex gap-10">
          <a
            href="#hero"
            className="font-semibold capitalize text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            GfG
          </a>
          <a
            href="#about"
            className="font-semibold capitalize text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            LeetCode
          </a>
          <a
            href="#skills"
            className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            tUf+
          </a>
          <a
            href="#projects"
            className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="font-semibold capitalize text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
        
        {/* nav */}
        <div className="flex gap-10">
          <a
            href="#hero"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* copyright */}
      <p className="text-sm text-muted-foreground my-5">
        &copy; {new Date().getFullYear()} Arijit.co. All rights reserved.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
