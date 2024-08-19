import Card from "./card/card";
import { Tooltip } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useState } from "react";

interface CategoryProps {
  title: string;
  toolTipText?: string;
  nominees?: object;
}

export default function Category({ title, toolTipText }: CategoryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <span className="bg-black bg-opacity-75 p-6">
          <h1 className="font-Arcade text-white text-4xl">{title}</h1>
        </span>
        {toolTipText && (
          <Tooltip title={toolTipText} className="ml-2">
            <QuestionMarkIcon />
          </Tooltip>
        )}
      </div>
      <div className="flex justify-center mt-6 mb-36 space-x-6">
        <Card channelName="Sample" imageSource="Sample" />
      </div>
    </>
  );
}
