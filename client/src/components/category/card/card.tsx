import { useEffect, useState } from "react";

interface CardProps {
  channelName: string;
  imageSource: string;
  selected?: string;
  onSelect: (categoryName: string) => void;
}

export default function Card({
  channelName,
  imageSource,
  selected,
  onSelect,
}: CardProps) {
  const [selectedCard, setSelectedCard] = useState(false);

  useEffect(() => {
    if (selected != channelName) {
      setSelectedCard(false);
    }
  }, [selected]);

  return (
    <div
      className={
        "w-64 hover:cursor-pointer transition-all bg-opacity-75 hover:-translate-x-2 hover:-translate-y-2 active:bg-green-800 " +
        (selectedCard ? "bg-green-500 drop-shadow-md -translate-x-2 -translate-y-2" : "bg-black")
      }
      onClick={() => {
        onSelect(channelName);
        setSelectedCard(true);
      }}
    >
      <img src={imageSource} alt={channelName} width="256px" className="p-4" />
      <h3 className="font-Retro text-white text-center text-3xl py-2 drop-shadow-lg">
        {channelName}
      </h3>
    </div>
  );
}
