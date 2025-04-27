interface Props {
  sm?: boolean; // Small button if true, otherwise default.
}

const CVButton = ({ sm = false }: Props) => {
  return (
    <a
      className={`btn btn-secondary ${sm ? "btn-sm" : ""}`}
      href="/src/assets/cv.pdf"
      target="__blank"
    >
      CV
    </a>
  );
};

export default CVButton;
