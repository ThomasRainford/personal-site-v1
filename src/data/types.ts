export const sections = ["about", "experience", "projects", "contact"] as const;

export type SectionKeys = (typeof sections)[number];

export type AboutSection = {
  title: string;
  skills: {
    highlights: string[];
    all: {
      frontend: string[];
      backend: string[];
      database: string[];
      "cloud-devops": string[];
      testing: string[];
      tools: string[];
    };
  };
};

export type ExperienceSection = {
  title: string;
  jobs: {
    link: string;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string[];
    skills: string[];
  }[];
};

export type ProjectsSection = {
  title: string;
  projects: {
    type: string;
    link: string;
    title: string;
    description: string;
    skills: string[];
    githubLink: string;
  }[];
};

export type ContactSection = {
  title: string;
  email: string;
  github: string;
  linkedin: string;
};

export type SiteData = {
  [K in SectionKeys]:
    | {
        title: string;
      }
    | AboutSection
    | ExperienceSection
    | ProjectsSection
    | ContactSection;
};
