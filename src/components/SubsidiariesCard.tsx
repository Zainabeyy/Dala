type cardProp = {
  id: number;
  width: number;
  img: string;
  title: string;
  description: string;
};

export default function SubsidiariesCard({
  item,
  itemLength,
}: {
  item: cardProp;
  itemLength: number;
}) {
  const isFirstOrLast = item.id === 0 || item.id === itemLength;
  return (
    <div className="pt-29.25 2xl:pt-32 pb-10 px-7 2xl:px-9 bg-blue-light relative w-60 2xl:w-68 2xl:h-74 h-71.25">
      <div className={`overlayBox ${isFirstOrLast ? "hidden" : ""}`} />
      <div className="blueCard isolate">
        <img
          src={`./subsidiaries-logos/${item.img}.webp`}
          alt={item.title}
          width={item.width}
          className="h-auto relative z-10"
        />
        <div className="bg-blue-dark w-full h-full absolute top-0 left-0 rounded-bl-2xl rounded-br-2xl" />
      </div>
      <div className="isolate size-2.5 2xl:size-3 bg-black rotate-45 absolute right-5.75 -top-0.75 -z-100 2xl:right-7.5" />
      <p className="uppercase font-bold leading-[100%] pb-6">{item.title}</p>
      <p className="text-sm leading-[150%]">{item.description}</p>
    </div>
  );
}
