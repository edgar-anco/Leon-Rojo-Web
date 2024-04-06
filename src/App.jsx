import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Principal from "./components/Principal";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Shows from "./components/Shows";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Principal />
        <Shows />
        <Bio />
        <Contact />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
