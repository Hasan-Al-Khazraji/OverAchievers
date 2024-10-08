import ImageSlideShow from "./imageSlideshow";

export default function WhatWeAre() {
    return(
        <div className="bg-[#284c3c] drop-shadow-sm max-md:pb-24">
            <h1 className="text-white font-Arcade text-5xl md:text-8xl text-center py-24">What We Are</h1>
            <div className="md:px-48 pb-24 flex flex-col md:flex-row max-md:space-y-48">
                <div className="bg-black bg-opacity-50 md:w-1/3 p-3 text-lg md:text-2xl md:ml-60">
                    <p className="text-white font-Retro">A live, in-game awards show dedicated to recognizing the best Minecraft creators on YouTube & Twitch, encouraging the community to make the best videos possible.</p>
                    <br />
                    <p className="text-white font-Retro">Nominations begin October 1st.</p>
                </div>
                <ImageSlideShow />
            </div>
        </div>
    );
}