type infoCardProp = {
    img: string;
    title: string;
    description: string;
};

export default function InfoCard({infoData}:{infoData:infoCardProp[]}) {
  
  return (
    <div className="flex flex-wrap gap-2 mt-10 rounded-2xl overflow-hidden w-fit 2xl:mt-16 2xl:mb-10">
      {infoData.map((item, index) => (
        <div key={index} className="bg-blue-light flex-1 p-6 min-w-72 sm:min-w-78.75">
          <div className="flex items-center gap-x-4 mb-4">
            <img src={`./icons/${item.img}.svg`} alt={item.title} className="size-14"/>
            <h2 className="font-bold text-2xl">{item.title}</h2>
          </div>
          <p className="text-sm leading-[150%]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
