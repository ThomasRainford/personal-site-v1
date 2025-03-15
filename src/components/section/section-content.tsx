import About from "./about/about";
import Experience from "./experience/experience";

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
      return <></>;
    case "contact":
      return <></>;
    default:
      break;
  }
};

export default SectionContent;
