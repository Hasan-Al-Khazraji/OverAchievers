interface MiniTeamCardProps {
    name: string;
    socialLink?: string;
    title: string;
    qualifications: string[];
    imageSource: string;
}

export default function MiniTeamCard({name, socialLink, title, qualifications, imageSource} : MiniTeamCardProps) {
  return (
    <div className="flex flex-col max-md:px-8 items-center">
      <a href={socialLink} target="_blank">
            <img
            src={imageSource}
            className={"rounded-full w-16 md:w-40 drop-shadow-2xl ".concat(socialLink ? 'hover:cursor-pointer' : '')}
            />
      </a>
        <h2 className="font-Retro text-[#284c3c] text-md md:text-2xl text-center my-1">{name.toUpperCase()}</h2>
        <h3 className="font-Retro text-[#284c3c] text-xs md:text-sm text-center font-extralight">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
        {qualifications.map((qual) => {
            return (
                <h3 className="font-Retro text-[#284c3c] text-xs md:text-sm text-center font-extralight max-md:pl-1">{qual}</h3>
            );
        })}
    </div>
  );
}
