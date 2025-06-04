import cv from "../assets/cv.pdf";

interface Props {
  sm?: boolean; // Small button if true, otherwise default.
}

const CVButton = ({ sm = false }: Props) => {
  return (
    <a
      className={`btn btn-secondary ${sm ? "btn-sm" : ""}`}
      href={cv}
      target="__blank"
    >
      CV
    </a>
  );
};

export default CVButton;
