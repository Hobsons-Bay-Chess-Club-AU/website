import Image from "next/image";

const events = [
  {
    day: "27",
    month: "JAN",
    title: "HONOURABLE BOB CUP OPEN 2026",
    time: "ROUND #1 @ 7:30 PM",
    logo: "/images/logo.png"
  },
  {
    day: "31",
    month: "JAN",
    title: "HONOURABLE BOB CUP JUNIORS 2026",
    time: "ROUND #1 @ 6 PM",
    logo: "/images/logo.png"
  }
];

export default function EventsList() {
  return (
    <section className="py-20 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-6xl md:text-8xl font-antonio font-bold uppercase leading-none">
            EVENTS
          </h2>
          <a href="/events" className="flex items-center gap-2 text-black font-bold hover:text-hbcc-gold transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z"/></svg>
            ALL EVENTS
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              {/* Date Box */}
              <div className="bg-hbcc-gold w-24 md:w-32 flex flex-col items-center justify-center text-white py-8">
                <span className="text-4xl md:text-6xl font-antonio font-bold leading-none">{event.day}</span>
                <span className="text-xl font-bold">{event.month}</span>
              </div>
              
              {/* Content */}
              <div className="flex-grow p-6 md:p-8 flex items-center gap-6">
                <div className="flex-shrink-0">
                   <Image 
                    src={event.logo} 
                    alt="Logo" 
                    width={60} 
                    height={60} 
                    className="w-12 h-auto opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-antonio font-bold leading-tight mb-2 group-hover:text-hbcc-gold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-lg font-bold italic tracking-wider text-black/60 uppercase">
                    {event.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
