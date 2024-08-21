import Card from "./card/card";
import { Tooltip } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useEffect, useState } from "react";

interface CategoryProps {
  title: string;
  toolTipText?: string;
  nominees?: object;
  onSelect: (selectedNom: string, category: string) => void;
}

function transformTitle(str: string) {
  const regex = /\*([\w\s]+)\*/g;
  return str.replace(regex, (match, p1) => {return `<a class='font-Arcade text-4xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.600),theme(colors.teal.200),theme(colors.green.600))] bg-[length:200%_auto] animate-gradient'>${p1.trim()}</a>`})
}

export default function Category({ title, toolTipText, onSelect }: CategoryProps) {
  const [selectedNom, setSelectedNom] = useState('');

  const handleSelect = (nomineeName: string) => {
    setSelectedNom(nomineeName);
  }

  useEffect(() => {
    onSelect(selectedNom, title)
  }, [selectedNom])

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center">
        <span className="bg-black bg-opacity-75 p-6">
          <h1 className="font-Arcade text-white text-4xl text-center" dangerouslySetInnerHTML={{ __html: transformTitle(title) }}></h1>
        </span>
        {toolTipText && (
          <Tooltip title={toolTipText} className="ml-2">
            <QuestionMarkIcon />
          </Tooltip>
        )}
      </div>
      <div className="flex max-md:flex-col max-md:items-center md:justify-center mt-6 mb-36 max-md:space-y-6 md:space-x-6">
        <Card channelName="Skyboi" imageSource="https://yt3.googleusercontent.com/-AyaGOqKCK1_hsrYLQV377R00c7gQmWDoQLfBnXN1QHKycAvrVraZ7GeF98F7ellaLZLRW0f0bY=s900-c-k-c0x00ffffff-no-rj" onSelect={handleSelect} selected={selectedNom}/>
        <Card channelName="JetStarfish" imageSource="https://yt3.googleusercontent.com/E2rr_H9gj1IDPtUNj_UskxxqtPAEPa_wWsu5_FEzDOHUFdCJoays552cZelK3UrH5kT9mSSfQw=s900-c-k-c0x00ffffff-no-rj" onSelect={handleSelect} selected={selectedNom}/>
        <Card channelName="Woocie" imageSource="https://yt3.googleusercontent.com/PANrvF24_UfcePZVRZ-F0JGUMVcl6A1zoNmqFiUMqOBachM95HDNKZshboy5b5jc9uF-dkAoVlU=s900-c-k-c0x00ffffff-no-rj" onSelect={handleSelect} selected={selectedNom}/>
      </div>
    </>
  );
}
