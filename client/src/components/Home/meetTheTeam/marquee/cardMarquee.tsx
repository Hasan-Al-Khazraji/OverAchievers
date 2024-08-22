import MiniTeamCard from "./miniTeamCard"

  const contributers = [
    {
        name: 'aeon/Hasan',
        title: 'Web Developer',
        qualifications: ['40,000+ Subscribers', 'GDSC Hacks Winner'],
        socialLink: "https://www.youtube.com/@aeonyoutube",
        imageSource: '/images/aeon.jpg'
    },
    {
        name: 'Chiffoi',
        title: 'Graphic Designer',
        qualifications: ['5000+ Subscribers', 'SMP Youtuber'],
        socialLink: "https://www.youtube.com/@ChiffoiMC",
        imageSource: '/images/chiffoi.jpg'
    },
    {
        name: 'GianLuca',
        title: 'Server Developer',
        qualifications: [''],
        socialLink: "https://github.com/GiansCode",
        imageSource: '/images/GianLuca.png'
    },
    {
        name: 'CraftyMasterman',
        title: 'Redstone Engineer',
        qualifications: ['190,000+ Subscribers', 'Giant piston door guy'],
        socialLink: "https://www.youtube.com/@CraftyMasterman",
        imageSource: '/images/Crafty.jpg'
    },
    {
        name: 'Maker Media Plus',
        title: 'Redstone Engineer',
        qualifications: ['30,000+ Subscribers', 'Has made a mask'],
        socialLink: "https://www.youtube.com/@MakerMediaPlus",
        imageSource: '/images/Maker.jpg'
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