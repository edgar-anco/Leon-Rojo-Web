import { background, leonRojoSymbol, check } from "../assets";
import { bioText, bioContent } from "../constants";
import Section from "./Section";

const Bio = () => {
  return (
    <Section crosses id="bio">
      <div className="container lg:flex">
        <div className="max-w-[25rem] lg:mx-auto">
          <h2 className="h2 mb-4 md:mb-8">Nuestros integrantes</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {bioContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {bioText}
          </p>
          <img
            src={background}
            width={1000}
            height={1000}
            alt="León Rojo Logo"
          />
        </div>
      </div>
    </Section>
  );
};

export default Bio;
