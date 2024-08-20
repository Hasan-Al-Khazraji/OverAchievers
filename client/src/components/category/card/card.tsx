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
        "w-64 hover:cursor-pointer bg-opacity-75 " +
        (selectedCard ? "bg-green-500 drop-shadow-2xl" : "bg-black")
      }
      onClick={() => {
        onSelect(channelName);
        setSelectedCard(!selectedCard);
      }}
    >
      <img src={imageSource} alt={channelName} width="256px" className="p-4" />
      <h3 className="font-Retro text-white text-center text-3xl py-2 drop-shadow-lg">
        {channelName}
      </h3>
    </div>
  );
}
