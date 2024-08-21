import STLViewer from './threeD'

export default function Hero() {
    return(
        <>
            <div className="bg-gradient-to-b from-emerald-950 from-30% to-emerald-800 flex align-middle" style={{height: '80svh'}}>
                <div className="ml-12" style={{ width: "80svh", height: "80svh" }}>
                    <STLViewer url="/trophy.STL" />
                </div>
            </div>
            <img src="/border1.png" alt="Border" className='bg-emerald-800 w-svw'/>
        </>
    );
}