const Intro = () => {
  return (
    <div className="flex flex-col mt-15 h-screen">
      <div className="mb-12">
        <div className="mb-3">
          <h6 className="text-lg md:text-xl text-accent">Hi, my name is</h6>
        </div>
        <div className="mb-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary">
            Thomas Rainford
          </h1>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
            A software engineer for the web
          </h1>
        </div>
      </div>
      <div className="text-accent">
        <p className="text-md sm:text-lg mb-2">
          I build scalable and maintainable soultions with great user
          experiences. Currenlty working at{" "}
          <a
            className="text-base-content"
            target="_blank"
            href="https://hortplus.com"
          >
            <b>HortPlus</b>
          </a>
        </p>
      </div>
      <div>
        <svg
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.9615 5.27473C15.1132 4.7437 14.8058 4.19021 14.2747 4.03849C13.7437 3.88677 13.1902 4.19426 13.0385 4.72529L9.03847 18.7253C8.88675 19.2563 9.19424 19.8098 9.72528 19.9615C10.2563 20.1133 10.8098 19.8058 10.9615 19.2747L14.9615 5.27473Z"
            className="fill-neutral"
          />
          <path
            d="M5.7991 7.39879C6.13114 7.84012 6.04255 8.46705 5.60123 8.7991L2.40894 11.2009C1.87724 11.601 1.87723 12.399 2.40894 12.7991L5.60123 15.2009C6.04255 15.533 6.13114 16.1599 5.7991 16.6012C5.46705 17.0426 4.84012 17.1311 4.39879 16.7991L1.20651 14.3973C-0.388615 13.1971 -0.388621 10.8029 1.2065 9.60276L4.39879 7.20093C4.84012 6.86889 5.46705 6.95747 5.7991 7.39879Z"
            className="fill-neutral"
          />
          <path
            d="M18.2009 16.6012C17.8689 16.1599 17.9575 15.533 18.3988 15.2009L21.5911 12.7991C22.1228 12.399 22.1228 11.601 21.5911 11.2009L18.3988 8.7991C17.9575 8.46705 17.8689 7.84012 18.2009 7.39879C18.533 6.95747 19.1599 6.86889 19.6012 7.20093L22.7935 9.60276C24.3886 10.8029 24.3886 13.1971 22.7935 14.3973L19.6012 16.7991C19.1599 17.1311 18.533 17.0426 18.2009 16.6012Z"
            className="fill-neutral"
          />
        </svg>
      </div>
    </div>
  );
};

export default Intro;
