import CoreValues from "../components/CoreValues";

export default function Subsidiaries() {
  // ---- subsidiaries card data ----

  const cardData = [
    {
      width: 120,
      img: "gulf-source-logo",
      title: "Gulf Source Company",
      description:
        "Gulf Source is a leading provider of industrial supplies and services, dedicated to delivering exceptional solutions to meet the diverse needs of our customers. With a strong foundation in industry expertise and a commitment to customer satisfaction, we have established ourselves as a trusted partner for businesses across various sectors.",
      link: "https://gulfsource.sa/",
    },
    {
      width: 154,
      img: "burjeel-logo",
      title: "Burjeel Holdings",
      description:
        "Burjeel Holdings looks forward to being the most trusted and respected healthcare service provider in the Middle East by treating every human life in our hands with utmost care and raising healthcare standards.",
      link: "https://burjeelholdings.com/",
    },
    {
      width: 137,
      img: "ligabue-logo",
      title: "Ligabue Group",
      description:
        "The Ligabue Group is a historical player in the Food Service sector and specialised in services for the maritime and energy industry markets.",
      link: "https://www.ligabue.it/",
    },
    {
      width: 144,
      img: "soundlines-logo",
      title: "Soundlines Group",
      description:
        "Soundlines Group offers comprehensive workforce solutions for all your international human resource requirement. With more than two decades in business, we have considerable experience and a knowledgeable team to assist you with all your overseas staffing needs.",
      link: "https://soundlinesgroup.com/",
    },
  ];

  // --------------------

  return (
    <div className="relative cont-px">
      {/* ---- hero ---- */}

      <img
        src="map.webp"
        alt="map background image"
        className="absolute -top-25 left-0 w-screen h-auto -z-100"
      />
      <section className="pt-16 flex flex-col items-center justify-center">
        <div className="max-w-214 2xl:max-w-270 text-center">
          <h1 className="heroHeading">Subsidiaries & Strategic Partners</h1>
          <p className="heroPara mt-8 mb-20 2xl:mb-24 2xl:mt-14">
            DALA Holding’s portfolio brings together subsidiaries and strategic
            partners that operate across high-impact sectors essential to Saudi
            Arabia’s economic development. Each entity reflects our
            partnership-driven approach—combining global expertise with regional
            insight to deliver sustainable growth, operational excellence, and
            long-term value in alignment with Vision 2030.
          </p>
        </div>
        <div className="h-1 w-full bg-blue-dark max-w-full" />
      </section>

      {/* ------- subsidiaries -------- */}

      <section className="flex flex-col gap-y-16 mt-16 mb-20">
        {
          // ---- subsidiaries cards ----
          cardData.map((card) => (
            <div className="flex flex-col justify-center items-center sm:items-start md:flex-row md:justify-start gap-x-12 gap-y-10">
              <div className="w-50 h-50 2xl:size-52 bg-blue-dark rounded-4xl flex items-center justify-center shrink-0">
                <img
                  src={`./subsidiaries-logos/${card.img}.webp`}
                  alt={card.title}
                  width={card.width}
                  className="h-auto"
                />
              </div>
              <div>
                <h2 className="font-bold text-2xl uppercase">{card.title}</h2>
                <p className="contentPara my-5">{card.description}</p>
                <a
                  href={card.link}
                  target="_blank"
                  className="block  blueGradient rounded-lg overflow-hidden max-w-40 group"
                >
                  <div className="bg-transparent group-hover:bg-blue-deep group-active:bg-blue-deep p-0.5 transition-all duration-200">
                    <div className="flex justify-center items-center gap-1 py-2 rounded-md w-full bg-white group-hover:bg-gray-light group-active:bg-gray-light transition-all duration-200">
                      <img
                        src="./icons/visit.svg"
                        alt="arrow right icon"
                        className="h-auto w-6"
                      />
                      <span
                        className="relative textGradient uppercase text-xs font-semibold transition-all duration-200 after:absolute after:left-0 after:-bottom-px after:h-px after:w-full after:bg-blue-sharp
                      group-hover:after:bg-blue-deep
                      group-active:after:bg-blue-deep
                      group-hover:text-blue-deep
                      group-active:text-blue-deep
                      after:transition-all
                      after:duration-300"
                      >
                        Visit their site
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))
        }
      </section>

      {/* ---- core values ---- */}

      <section>
        <h2 className="gradHeading">
          Investment Philosophy & Strategic Approach
        </h2>
        <CoreValues />
      </section>
    </div>
  );
}
