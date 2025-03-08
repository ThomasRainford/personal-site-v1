import Intro from "./components/intro/intro";
import Layout from "./components/layout/layout";
import Navbar from "./components/navbar/navbar";
import Section from "./components/section/section-content";
import SectionTitle from "./components/section/section-title";
import { getSiteData, getSiteSections } from "./data/data";

const App = () => {
  const siteData = getSiteData();
  const siteSections = getSiteSections();
  return (
    <main>
      <Layout>
        <Navbar />
        <div className="px-6 sm:px-10 md:px-20 lg:px-30">
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
                  <div className="mb-8">
                    <Section section={section} />
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default App;
