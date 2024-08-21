import STLViewer from './threeD';
import TextRotate from './textRotate';

export default function Hero() {
    return(
        <>
            <div className="bg-gradient-to-b from-emerald-950 from-30% to-emerald-800 flex align-middle" style={{height: '80svh'}}>
                <div className="ml-12 " style={{ width: "80svh", height: "80svh" }}>
                    <STLViewer url="/trophy.STL" />
                </div>
                <div className='text-center content-center mb-8'>
                    <h1 className='text-6xl font-Arcade text-white bg-black bg-opacity-50 p-4'>CELEBRATING</h1>
                    <h1 className='text-6xl font-Arcade text-white bg-black bg-opacity-50 p-4'>MINECRAFT’S</h1>
                    <div className='flex'>
                        <h1 className='text-6xl font-Arcade text-white bg-black bg-opacity-50 p-4 pr-8'>MOST</h1>
                        <TextRotate />
                    </div>
                    <div className='bg-black bg-opacity-50 w-fit flex'>
                        <h1 className='text-6xl font-Arcade text-white p-4'>CREATORS</h1>
                    </div>
                    <img src="/squiggle_2.png" className='z-1' style={{position: 'relative', left: '500px', bottom: '20px'}}/>
                </div>
            </div>
            <img src="/border1.png" alt="Border" className='bg-emerald-800 w-svw'/>
        </>
    );
}