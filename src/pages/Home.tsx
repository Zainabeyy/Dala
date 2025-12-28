import { Link } from "react-router-dom";
import SubsidiariesCard from "../components/SubsidiariesCard";
import VissionMission from "../components/VissionMission";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const subsidiariesData = [
    {
      id: 0,
      width: 69,
      img: "gulf-source-logo",
      title: "Gulf Source Company",
      description:
        "A Saudi energy services leader supporting innovation, efficiency, and sustainability in the oil and gas sector.",
    },
    {
      id: 1,
      width: 154,
      img: "burjeel-logo",
      title: "Burjeel Holdings",
      description:
        "A leading regional healthcare group advancing world-class medical infrastructure and specialized services.",
    },
    {
      id: 2,
      width: 110,
      img: "ligabue-logo",
      title: "Ligabue Group",
      description:
        "A global provider of catering and logistics solutions serving industrial and maritime operations worldwide.",
    },
    {
      id: 3,
      width: 128,
      img: "soundlines-logo",
      title: "Soundlines Group",
      description:
        "A trusted workforce and HR solutions partner delivering skilled manpower and training across key industries.",
    },
  ];
  return (
    <div>
      <section className="hero">
        <div className="hero-heading">
          <p>
            Strategic <span>Partnerships.</span>
          </p>
          <p>
            Sustainable <span>Growth.</span>
          </p>
        </div>
        <p className="text-sm min-[480px]:text-base min-[800px]:text-xl w-full max-w-[60ch] mt-8 xl:mt-10 mb-10 xl:mb-12 leading-[150%]">
          DALA Holding is a Saudi Arabian investment and holding company driving
          long-term value through strategic partnerships, joint ventures, and
          responsible investment across high-impact sectors.
        </p>
        <Link
          to="/contact"
          className="max-w-70 buttonStyle "
        >
          <img
            src="./icons/hand-stars-icon.svg"
            alt="an icon of hand with stars"
            className="size-5 sm:size-6"
          />
          <span>
            Partner With Us
          </span>
        </Link>
        <p className="font-bold italic text-xs sm:text-sm mt-4">
          Aligned with{" "}
          <a
            href="https://www.vision2030.gov.sa/en"
            className="text-blue-sharp underline decoration-1 underline-offset-2"
          >
            Saudi Vision 2030
          </a>
        </p>
      </section>

      <section className="py-20 cont-px ">
        <h2 className="subHeading">Subsidiaries & Business Partners</h2>
        <p className="contentPara max-w-[130ch] mt-8 mb-12">
          DALA Holding’s portfolio brings together strategic partnerships and
          subsidiaries that drive sustainable growth, innovation, and
          localization across high-impact sectors. Each collaboration reflects
          our commitment to combining global expertise with regional opportunity
          in support of Saudi Arabia’s Vision 2030.
        </p>
        <div className="flex flex-wrap rounded-2xl w-fit mx-auto gap-y-10 justify-center">
          {subsidiariesData.map((item) => (
            <SubsidiariesCard
              item={item}
              key={item.id}
              itemLength={subsidiariesData.length}
            />
          ))}
        </div>
      </section>

      <VissionMission />

      <section className="imgTextSec mb-8 xl:mb-20">
        <div className="lg:max-w-110 2xl:max-w-2xl w-full">
          <h2 className="subHeading mb-8">Contact Us</h2>
          <ContactForm />
        </div>
        <img
          src="building.webp"
          alt="Low angle view of a glass skyscraper converging toward the sky."
          className="w-full max-w-110 h-auto rounded-4xl overflow-hidden"
        />
      </section>
    </div>
  );
}
