export default function Standings() {
  const players = [
    { rank: 1, name: "McIntyre, Julian", points: 5 },
    { rank: 2, name: "Krishnan, Anirudh", points: 4.5 },
    { rank: 3, name: "CM Davis, Tony J", points: 4.5 },
    { rank: 4, name: "Hogan, Steven", points: 4 },
    { rank: 5, name: "Lian, Kenson", points: 4 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Standings Table Side */}
          <div className="lg:w-1/3">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-6xl font-antonio font-bold uppercase leading-none">
                2025<br/>STANDINGS
              </h2>
            </div>
            
            <div className="bg-[#191919] rounded-2xl overflow-hidden text-white shadow-xl">
              <div className="p-6 bg-gradient-to-r from-[#191919] to-[#2a2a2a] flex justify-between items-center border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-antonio font-bold uppercase tracking-tight">Club Championship</h3>
                  <p className="text-hbcc-gold font-bold">Open</p>
                </div>
                <a href="/standings" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-xs font-bold transition-colors text-center">
                  FULL<br/>TABLE
                </a>
              </div>
              
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-white/40 text-xs uppercase border-b border-white/5">
                    <th className="p-4 font-bold">#</th>
                    <th className="p-4 font-bold">Players</th>
                    <th className="p-4 font-bold text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {players.map((player) => (
                    <tr key={player.rank} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-bold text-hbcc-gold">{player.rank}</td>
                      <td className="p-4 font-semibold">{player.name}</td>
                      <td className="p-4 text-right font-bold">{player.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Large Image / Info Side as seen on live site */}
          <div className="lg:w-2/3">
             <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] group">
                <img 
                  src="/images/hero-bg.png" 
                  alt="Chess Club" 
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-hbcc-gold text-xl font-bold uppercase mb-2 tracking-widest">EST. 2008</p>
                  <h3 className="text-white text-5xl md:text-7xl font-antonio font-bold uppercase leading-none">
                    JOIN THE LARGEST CLUB IN MELBOURNE'S WEST
                  </h3>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
