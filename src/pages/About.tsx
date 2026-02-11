import VissionMission from "../components/VissionMission";
import { aboutUsInfoCards } from "../assets/data";
import InfoCard from "../components/InfoCard";

export default function About() {
  const listData = [
    "Chairman of the Saudi–Brazilian Business Council (2025)",
    "Chairman of the Saudi–Latin American Business Council (2022–2025)",
    "Executive Board Member of the Communication and Information Technology National Committee",
    "Founder of Bainia Co., a Saudi company partnered with a Public Investment Fund subsidiary to provide global e-services facilitating trade with the Kingdom",
    "Chairman of Gulf Source Company, specializing in the energy services sector",
  ];
  return (
    <div className="cont-px">
      {/* ---- hero ----- */}
      <section className="flex flex-col md:flex-row items-start mt-16 w-full justify-between gap-10">
        <div className="max-w-150 2xl:max-w-3xl w-full">
          <h1 className="heroHeading uppercase">Who we are</h1>
          <div className="lg:text-xl heroPara">
            <p className="mt-10 mb-6">
              DALA Holding is a Saudi Arabian investment and holding company
              established to drive sustainable value creation through strategic
              partnerships with leading international and regional enterprises.
              We focus on joint ventures, investments, and collaborations across
              diversified sectors that support economic development, industrial
              growth, and long-term competitiveness within Saudi Arabia and the
              GCC.
            </p>
            <p>
              Built on a partnership-driven business model, DALA serves as a
              trusted platform for global companies seeking to enter or expand
              in the Kingdom—combining international expertise with deep
              regional insight to unlock mutual value.
            </p>
          </div>
        </div>
        <img
          src="image-with-logo.webp"
          alt="who we are"
          className="rounded-3xl w-full max-w-[320px] h-auto overflow-hidden"
        />
      </section>

      {/* ----- Leadership ----- */}

      <section className="mt-20">
        <h2 className="gradHeading mb-10">Leadership</h2>
        <div className="bg-blue-light rounded-3xl overflow-hidden flex flex-col md:flex-row md:h-110.5 xl:h-85.5 ">
          <div className="mainPersonImg">
            <picture>
              <source
                srcSet="chairman-sm.webp"
                media="(max-width: 767px)"
                type="image/webp"
              />
              <img
                src="chairman.webp"
                alt="chairman"
                className="h-full object-cover object-center w-full"
              />
            </picture>
          </div>
          <div className="flex flex-col gap-y-3 px-8 py-6">
            <p className="font-bold text-2xl">Mishal Ibn Rakan Ibn Hithlain</p>
            <p className="font-bold">Chairman</p>
            <p className="text-xs leading-[175%]">
              Mishal Ibn Rakan Ibn Hithlain is a distinguished business leader
              and influential figure in Saudi Arabia’s private sector. He
              currently serves as:
            </p>
            <ul className="flex flex-col gap-y-2">
              {listData.map((item, index) => (
                <li key={index} className="flex items-start gap-x-2">
                  <img
                    src="./icons/bullet-arrow.svg"
                    alt="arrow right"
                    className="w-2.5 m-2"
                  />
                  <span className="font-semibold text-xs leading-[150%] uppercase">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-blue-light rounded-3xl overflow-hidden flex flex-col md:flex-row md:h-110.5 xl:h-85.5 ">
          <div className="mainPersonImg">
            <picture>
              <source
                srcSet="vice-chairman-sm.webp"
                media="(max-width: 767px)"
                type="image/webp"
              />
              <img
                src="vice-chairman.webp"
                alt="chairman"
                className="h-full object-cover object-center w-full"
              />
            </picture>
          </div>
          <div className="px-8 py-6">
            <p className="font-bold text-2xl">Abdullah Ibn Nasser Almudarra</p>
            <p className="font-bold mt-4">Co-Founder & Vice Chairman</p>
            <div className="text-xs leading-[175%] mt-6">
              <p>
                Abdullah Ibn Nasser Almudarra brings extensive experience in
                business development, investment strategy, and partnership
                formation.
              </p>
              <p>
                As Co-Founder and Vice Chairman, he plays a pivotal role in
                shaping DALA’s growth strategy, fostering strategic alliances,
                and driving operational excellence across its diverse portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VissionMission />

      <section>
        <h2 className="gradHeading">Core Values</h2>
        <InfoCard infoData={aboutUsInfoCards} />
      </section>
    </div>
  );
}
