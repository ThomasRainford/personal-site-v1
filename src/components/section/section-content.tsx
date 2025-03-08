import About from "./about/about";

interface Props {
  section: string;
}

const Section = ({ section }: Props) => {
  switch (section) {
    case "about":
      return <About />;

    default:
      break;
  }
};

export default Section;
