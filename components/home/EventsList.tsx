const events = [
  {
    title: "Honourable Bob Cup Open 2026",
    date: "TBC 2026",
    category: "Tournament",
  },
  {
    title: "HBCC Junior Coaching 2026",
    date: "Weekly Terms",
    category: "Coaching",
  },
  {
    title: "Honourable Bob Cup Juniors 2026",
    date: "TBC 2026",
    category: "Junior Tournament",
  },
  {
    title: "C J S Purdy Cup OPEN 2026",
    date: "TBC 2026",
    category: "Tournament",
  },
];

export default function EventsList() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-gray-600 mt-2">Join us for our upcoming tournaments and coaching sessions.</p>
          </div>
          <a 
            href="https://portal.hobsonsbaychess.com/public/schedule/events" 
            target="_blank"
            className="text-red-700 font-semibold hover:underline"
          >
            ALL EVENTS →
          </a>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div 
              key={event.title}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-gray-100 rounded-lg hover:border-red-200 transition-colors shadow-sm"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-1 rounded">
                  {event.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{event.title}</h3>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-gray-500 font-medium">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
