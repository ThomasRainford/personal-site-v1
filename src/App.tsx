import Intro from "./components/intro/intro";
import Layout from "./components/layout/layout";
import Navbar from "./components/navbar/navbar";
import SectionTitle from "./components/section/section-title";
import { getSiteData, getSiteSections } from "./data/data";

const App = () => {
  const siteData = getSiteData();
  const siteSections = getSiteSections();
  return (
    <main>
      <Layout>
        <Navbar />
        <div className="px-10 md:px-20 lg:px-30">
          <Intro />
          {siteSections.map((section) => {
            const sectionData = siteData[section];
            return (
              <section key={section} id={section}>
                <SectionTitle title={sectionData.title} />
              </section>
            );
          })}
        </div>
      </Layout>
    </main>
  );
};

export default App;
