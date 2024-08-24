import React, { useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

export default function TwitchEmbedPlayer() {
    const embed = useRef();

    const handleReady = (e: any) => {
        embed.current = e;
    };

    return (
        <TwitchEmbed channel="jetstarfishlive" autoplay withChat={false} darkMode={true} hideControls onVideoReady={handleReady} width={window.innerWidth} height={'80svh'}/>
    );
}