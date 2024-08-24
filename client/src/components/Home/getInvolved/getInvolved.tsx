import { TwitterTimelineEmbed } from "react-twitter-embed";
import DiscordButton from "./discordButton";

export default function GetInvolved() {
  return (
    <div className="bg-[#284c3c] drop-shadow-sm pb-24 flex flex-col items-center">
      <h1 className="text-white font-Arcade text-5xl md:text-8xl text-center py-24">
        Get Involved
      </h1>
      <DiscordButton />
      {window.innerWidth > 600 ? (
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="OverachieversMC"
          options={{ height: 600, width: 550 }}
        />
      ) : (
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="OverachieversMC"
          options={{ height: 600, width: window.innerWidth }}
        />
      )}
    </div>
  );
}
