import TwitchEmbedPlayer from "../components/Live/twitchEmbedPlayer";
import TheWinners from "../components/Live/theWinners";

export default function Live() {
    return (
      <div className="pt-14 md:pt-28">
        <div className="flex justify-center p-8 bg-gray-100">
          <TwitchEmbedPlayer />
        </div>
        <img src="/border1.png" alt="Border" className='bg-gray-100 w-svw'/>
        <div>
          <TheWinners />
        </div>
      </div>
    );
  }