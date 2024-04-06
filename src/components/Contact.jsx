import Section from "./Section";
import { contact, check } from "../assets";
import { leonRojoContacto } from "../constants";

const Contact = () => {
  return (
    <Section crosses id="contacto">
      <div className="container lg:flex">
        <div className="lg:mx-auto xl:w-[38rem] mt-4">
          <img
            src={contact}
            width={1000}
            height={1000}
            alt="León Rojo Contacto"
          />
        </div>
        <div className="max-w-[25rem] lg:mx-auto mt-4">
          <h2 className="h2 mb-4 md:mb-8">Contacto</h2>
          <p className="body-2 mb-[3rem] text-n-3">
            Para contratos y maltratos...
          </p>
          <ul className="body-2">
            {leonRojoContacto.map((item, index) => (
              <li
                key={index}
                className="flex items-start py-4 border-t border-n-6"
              >
                <img width={24} height={24} src={check} />
                <p className="ml-4">{item}</p>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/51937655579">+51 937 655 579</a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
