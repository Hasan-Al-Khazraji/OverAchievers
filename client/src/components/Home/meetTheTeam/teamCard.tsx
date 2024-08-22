interface TeamCardProps {
    name: string;
    socialLink?: string;
    title: string;
    qualifications: string[];
    imageSource: string;
}

export default function TeamCard({name, socialLink, title, qualifications, imageSource} : TeamCardProps) {
  return (
    <div className="flex flex-row md:flex-col max-md:px-8 items-center">
      {name.toLowerCase() == "skyboi" ? (
        <>
          <img
            src="/squiggle_3.png"
            alt="star"
            className="absolute w-0 md:w-12 md:ml-60"
          />
          <img
            src="/squiggle_3.png"
            alt="star"
            className="absolute w-0 md:w-6 md:ml-72 md:mt-10"
          />
        </>
      ) : (
        <img
          src="/squiggle_3.png"
          alt="star"
          className="absolute w-0 md:w-8 md:ml-64 md:mt-52"
        />
      )}
      <a href={socialLink} target="_blank">
            <img
            src={imageSource}
            className={"rounded-full w-32 md:w-64 drop-shadow-2xl ".concat(socialLink ? 'hover:cursor-pointer' : '')}
            />
      </a>
      <div className="Text block">
        <h2 className="font-Retro text-[#284c3c] max-md:text-2xl md:text-4xl text-center my-4">{name.toUpperCase()}</h2>
        <h3 className="font-Retro text-[#284c3c] text-lg md:text-xl text-center font-extralight">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
        {qualifications.map((qual) => {
            return (
                <h3 className="font-Retro text-[#284c3c] text-md md:text-xl text-center font-extralight max-md:pl-1">{qual}</h3>
            );
        })}
      </div>
    </div>
  );
}
