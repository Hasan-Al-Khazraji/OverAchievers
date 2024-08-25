export default function TheWinners() {
  function transformTitle(str: string) {
    const regex = /\*([\w\s]+)\*/g;
    return str.replace(regex, (match, p1) => {
      return `<a class='font-Retro md:text-4xl text-lg bg-clip-text text-transparent bg-[#3eff69] bg-[length:200%_auto] animate-gradient'>${p1.trim()}</a>`;
    });
  }

  const title = 'Best SMP Creator - *Winner*'

  return (
    <div className="bg-[#284c3c] drop-shadow-sm">
      <h1 className="text-white font-Arcade text-5xl md:text-8xl text-center py-24">
        The Winners
      </h1>
      <div className="md:pb-24 flex flex-col md:flex-row justify-center max-md:space-y-0 md:space-x-32 font-Retro text-white md:text-4xl text-lg text-center">
        <div className="space-y-4 max-md:mb-4">
          <h1 dangerouslySetInnerHTML={{ __html: transformTitle(title) }}></h1>
          <h1>Best SMP Creator - Winner</h1>
          <h1>Best SMP Creator - Winner</h1>
          <h1>Best SMP Creator - Winner</h1>
        </div>
        <div className="space-y-4 pb-16">
          <h1>Best SMP Creator - Winner</h1>
          <h1>Best SMP Creator - Winner</h1>
          <h1>Best SMP Creator - Winner</h1>
          <h1>Best SMP Creator - Winner</h1>
        </div>
      </div>
    </div>
  );
}
