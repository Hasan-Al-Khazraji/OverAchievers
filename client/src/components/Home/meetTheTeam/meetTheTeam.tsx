import TeamCard from "./teamCard";
import CardMarquee from './marquee/cardMarquee';

const hosts = [
    {
        name: 'skyboi',
        title: 'host',
        qualifications: ['120,000+ Subscribers', 'Video Essayist'],
        socialLink: "https://www.youtube.com/@skyboimc",
        imageSource: '/images/skyboi.jpg'
    },
    {
        name: 'Jetstarfish',
        title: 'host',
        qualifications: ['140,000+ Subscribers', 'Video Essayist'],
        socialLink: "https://www.youtube.com/@jetstarfish",
        imageSource: '/images/jetstarfish.jpg'
    }
]

export default function MeetTheTeam() {
    return(
        <div className="bg-gray-100 drop-shadow-sm">
            <h1 className="text-[#284c3c] font-Arcade text-5xl md:text-8xl text-center py-24">Meet The Team</h1>
            <div className="md:pb-24 flex flex-col md:flex-row justify-center max-md:space-y-12 md:space-x-32">
                { hosts.map((host) => {
                    return (<TeamCard name={host.name} title={host.title} qualifications={host.qualifications} socialLink={host.socialLink} imageSource={host.imageSource}/>)
                })}
            </div>
            <CardMarquee />
        </div>
    );
}