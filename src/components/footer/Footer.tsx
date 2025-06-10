const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-row justify-center mb-4 mt-4">
        <div className="text-secondary text-center opacity-70 text-sm mr-2">
          Designed and developed by Thomas Rainford
        </div>
        <div className="flex flex-col justify-center items-center">
          <a href={"https://github.com/ThomasRainford"} target="_blank">
            <i className="devicon-github-original text-xl text-secondary opacity-70"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <button
          className="btn btn-soft btn-secondary px-2 py-1"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Scroll To Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
