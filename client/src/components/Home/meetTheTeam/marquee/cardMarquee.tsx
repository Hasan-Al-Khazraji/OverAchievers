import MiniTeamCard from "./miniTeamCard"

  const contributers = [
    {
        name: 'aeon/Hasan',
        title: 'Web Developer',
        qualifications: ['GDSC Hacks Winner'],
        socialLink: "https://github.com/Hasan-Al-Khazraji",
        imageSource: '/images/aeon.jpg'
    },
    {
        name: 'Chiffoi',
        title: 'Graphic Designer',
        qualifications: ['Co-owner of Women We Watch'],
        socialLink: "https://www.youtube.com/@ChiffoiMC",
        imageSource: '/images/chiffoi.jpg'
    },
    {
        name: 'GianLuca',
        title: 'Server Developer',
        qualifications: ['Enterprise Server Developer'],
        socialLink: "https://github.com/GiansCode",
        imageSource: '/images/GianLuca.png'
    },
    {
        name: 'Maker',
        title: 'Physical Award Creator',
        qualifications: ['The Minecraft Actualizer'],
        socialLink: "https://github.com/GiansCode",
        imageSource: '/images/Maker.jpg'
    },
    {
        name: 'Youri',
        title: 'Builder',
        qualifications: ['Head Server Builder', '2K+ Players'],
        socialLink: "https://www.youtube.com/@CraftyMasterman",
        imageSource: '/images/Youri.jpg'
    },
]
  
  const CardMarquee = () => {
    return (
      <div className="w-full py-12">
        <div className="mx-auto w-full px-4 md:px-8">
          <div className="group relative mt-6 flex md:gap-40 overflow-hidden max-md:p-2" style={{ maskImage: 'linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 95%)',}}>
            {Array(5)
              .fill(null)
              .map((index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row justify-around md:gap-40"
                >
                  {contributers.map((contributer, key) => (
                    <MiniTeamCard name={contributer.name} title={contributer.title} qualifications={contributer.qualifications} socialLink={contributer.socialLink} imageSource={contributer.imageSource} key={key}/>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default CardMarquee