const handleClick = () => {
    window.open('https://discord.gg/gRJAavBV3x', '_blank')
}

const DiscordButton = () => {
  return (
    <button onClick={handleClick} className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#5865F2] px-4 py-1.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#5865F2] mb-8 max-md:m-6">
      <img
        src="Discord_logo.png"
        alt="Discord_logo"
        className="h-10 md:h-7 mr-4"
      />
      <span className="text-3xl font-Arcade">Join The Discord</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </button>
  );
};

export default DiscordButton;
