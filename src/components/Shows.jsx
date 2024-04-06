import { shows } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { grid } from "../assets";

const Shows = () => (
  <Section className="overflow-hidden" crosses id="shows">
    <div className="container md:pb-10">
      <Heading tag="Se vienen cositas..." title="Nuestros próximos shows" />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {shows.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-1 md:mb-2">
                    <Tagline>{item.date}</Tagline>
                  </div>
                  <div
                    className="relative mb-2 -my-2 -mx-2"
                    style={{
                      maxWidth: "50%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <img
                      className="max-w-full"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-1">{item.title}</h4>
                  <p className="body-2 text-n-1">{item.text}</p>
                  <p className="body-2 text-n-4">
                    <a
                      href={item.facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </p>
                  <p className="body-2 text-n-4">
                    <a
                      href={item.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Section>
);

export default Shows;
