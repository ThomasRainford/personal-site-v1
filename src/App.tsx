import Layout from "./components/layout/layout";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <main>
      <Layout>
        <Navbar />
        <section id="about">About</section>
        <section id="experience">Experience</section>
        <section id="projects">Projects</section>
        <section id="contact">Contact</section>
      </Layout>
    </main>
  );
};

export default App;
