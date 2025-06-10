import CodeIcon from "../icons/CodeIcon";

const Intro = () => {
  return (
    <div className="flex flex-col mt-15 h-screen">
      <div className="mb-12">
        <div className="mb-3">
          <h6 className="text-lg md:text-xl text-secondary">Hi, my name is</h6>
        </div>
        <div className="mb-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary">
            Thomas Rainford
          </h1>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
            A software engineer for the web
          </h1>
        </div>
      </div>
      <div className="text-secondary w-[100%] sm:w-[75%] lg:w-[65%]">
        <p className="text-md sm:text-lg mb-2">
          I build scalable and maintainable soultions with great user
          experiences. Currently working at{" "}
          <a
            className="text-base-content underline hover:text-accent"
            target="_blank"
            href="https://hortplus.com"
          >
            <b>HortPlus</b>
          </a>
          .
        </p>
      </div>
      <div className="mt-5 pl-4">
        <CodeIcon />
      </div>
    </div>
  );
};

export default Intro;
