// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sections = ["about", "experience", "projects", "contact"] as const;

export type SectionKeys = (typeof sections)[number];

export type AboutSection = {
  title: string;
  skills: {
    highlights: string[];
    all: {
      [K in string]: string;
    };
  };
};

export type SiteData = {
  [K in SectionKeys]:
    | {
        title: string;
      }
    | AboutSection;
};
