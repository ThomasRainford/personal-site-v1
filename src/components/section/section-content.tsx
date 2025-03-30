import About from "./about/about";
import Contact from "./contact/contact";
import Experience from "./experience/experience";
import Projects from "./projects/projects";

interface Props {
  section: string;
}

const SectionContent = ({ section }: Props) => {
  switch (section) {
    case "about":
      return <About />;
    case "experience":
      return <Experience />;
    case "projects":
      return <Projects />;
    case "contact":
      return <Contact />;
    default:
      break;
  }
};

export default SectionContent;
