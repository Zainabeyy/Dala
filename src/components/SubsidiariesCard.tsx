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
  return (
    <div className="pt-29.25 xl:pt-33 pb-10 xl:pb-12 px-7 xl:px-9 2xl:px-10 bg-blue-light relative max-w-65 w-full min-w-60">
      <div
        className={`overlayBox ${
          item.id === 0 || item.id === itemLength ? "hidden" : ""
        }`}
      />
      <div className="blueCard isolate">
        <div className="size-1.75 bg-black rotate-45 absolute -right-1 top-px -z-100" />
        <img
          src={`./subsidiaries-logos/${item.img}.webp`}
          alt={item.title}
          width={item.width}
          className="h-auto relative z-10"
        />
        <div className="bg-blue-dark w-full h-full absolute top-0 left-0 rounded-bl-2xl rounded-br-2xl" />
      </div>
        <p className="uppercase 2xl:text-lg font-bold">
          {item.title}
        </p>
        <p className="text-sm leading-[150%] max-w-[22ch] 2xl:max-w-[30ch]">
          {item.description}
        </p>
    </div>
  );
}
