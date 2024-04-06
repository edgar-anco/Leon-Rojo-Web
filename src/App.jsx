import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Principal from "./components/Principal";
import Shows from "./components/Shows";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Principal />
        <Shows />
        <Bio />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
