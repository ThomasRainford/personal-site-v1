const Intro = () => {
  return (
    <div className="flex flex-col h-screen mt-15">
      <div className="mb-3">
        <h6 className="text-md md:text-lg text-accent">Hi, my name is</h6>
      </div>
      <div className="mb-2">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary">
          Thomas Rainford
        </h1>
      </div>
      <div>
        <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-secondary">
          A software developer for the web
        </h1>
      </div>
    </div>
  );
};

export default Intro;
