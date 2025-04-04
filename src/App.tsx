import Intro from "./components/intro/intro";
import Layout from "./components/layout/layout";
import Navbar from "./components/navbar/navbar";
import SectionContent from "./components/section/section-content";
import SectionTitle from "./components/section/section-title";
import { getSiteData, getSiteSections } from "./data/data";

const App = () => {
  const siteData = getSiteData();
  const siteSections = getSiteSections();

  return (
    <main>
      <Layout>
        <Navbar />
        <div className="px-6 sm:px-10 md:px-20 lg:px-30 mb-4">
          <div className="flex flex-col">
            <Intro />
          </div>
          <div>
            {siteSections.map((section) => {
              const sectionData = siteData[section];
              return (
                <section key={section} id={section}>
                  <div className="mb-8">
                    <SectionTitle title={sectionData.title as string} />
                  </div>
                  <div className="mb-10">
                    <SectionContent section={section} />
                  </div>
                </section>
              );
            })}
          </div>
          <div className="flex flex-row justify-center mb-4 mt-4">
            <div className="text-secondary opacity-70 text-sm  mr-2">
              Designed and developed by Thomas Rainford
            </div>
            <div className="mr-4">
              <a href={"https://github.com/ThomasRainford"} target="_blank">
                <i className="devicon-github-original text-lg text-secondary opacity-70"></i>
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
        </div>
      </Layout>
    </main>
  );
};

export default App;
