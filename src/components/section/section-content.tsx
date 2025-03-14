import About from "./about/about";

interface Props {
  section: string;
}

const SectionContent = ({ section }: Props) => {
  switch (section) {
    case "about":
      return <About />;
    case "experience":
      return <></>;
    case "projects":
      return <></>;
    case "contact":
      return <></>;
    default:
      break;
  }
};

export default SectionContent;
