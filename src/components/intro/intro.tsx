const Intro = () => {
  return (
    <div className="flex flex-col mt-15 h-screen">
      <div className="mb-12">
        <div className="mb-3">
          <h6 className="text-md md:text-lg text-accent">Hi, my name is</h6>
        </div>
        <div className="mb-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary">
            Thomas Rainford
          </h1>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
            A software developer for the web
          </h1>
        </div>
      </div>
      <div>
        <p className="text-accent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure.
        </p>
      </div>
    </div>
  );
};

export default Intro;
