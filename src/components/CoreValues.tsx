export default function CoreValues() {
  const data = [
    {
      img: "target",
      title: "Strategic Focus",
      description:
        "We invest in sectors that align with Saudi Arabia’s Vision 2030 — targeting industries that enhance economic diversification, industrial capability, and technological advancement.",
    },
    {
      img: "handshake",
      title: "Partnership-Driven Growth",
      description:
        "Our business model revolves around collaboration. By partnering with leading global enterprises, we combine international expertise with local insight to unlock long-term value.",
    },
    {
      img: "globe",
      title: "Sustainability & Responsibility",
      description:
        "We prioritize responsible investment and governance practices that ensure financial strength, environmental consciousness, and social impact.",
    },
    {
      img: "idea-icon",
      title: "Innovation & Localization",
      description:
        "DALA promotes knowledge transfer, local manufacturing, and the adoption of advanced technologies — empowering national talent and enhancing competitiveness.",
    },
    {
      img: "shield",
      title: "Long-Term Value Creation",
      description:
        "We focus on building resilient, future-ready ventures that deliver consistent returns and contribute to the Kingdom’s role as a global economic hub.",
    },
  ];
  return (
    <div className="flex flex-wrap gap-2 mt-10 rounded-2xl overflow-hidden w-fit 2xl:mt-16 2xl:mb-10">
      {data.map((item, index) => (
        <div key={index} className="bg-blue-light flex-1 p-6 min-w-72 sm:min-w-78.75">
          <div className="flex items-center gap-x-4">
            <img src={`./icons/${item.img}.svg`} alt={item.title} className="size-14"/>
            <h2 className="font-bold text-2xl mb-4">{item.title}</h2>
          </div>
          <p className="text-sm leading-[150%]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
