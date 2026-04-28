import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Alonso already looking ahead after ‘goal feast’",
    excerpt: "The latest updates from the club championship and regional events.",
    date: "April 15, 2026",
    image: "/images/news/news-1.jpg",
    href: "/blog/alonso-goal-feast",
  },
  {
    title: "Horstweg can be a double gameweek hero",
    excerpt: "Strategy and analysis from the latest tournament games.",
    date: "April 10, 2026",
    image: "/images/news/news-2.png",
    href: "/blog/horstweg-hero",
  },
  {
    title: "Pre-Match Briefing: Hammers vs Eagles",
    excerpt: "Getting ready for the big weekend of chess at HBCC.",
    date: "April 5, 2026",
    image: "/images/news/news-3.png",
    href: "/blog/pre-match-briefing",
  },
];

export default function NewsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-6xl md:text-8xl font-antonio font-bold uppercase leading-none">
            NEWS
          </h2>
          <Link href="/blog" className="flex items-center gap-2 text-black font-bold hover:text-hbcc-gold transition-colors">
            VIEW ALL NEWS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {news.map((item) => (
            <div key={item.title} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <p className="text-hbcc-gold font-bold text-sm uppercase tracking-widest mb-3">{item.date}</p>
                <h3 className="text-2xl font-antonio font-bold text-black mb-4 line-clamp-2 leading-tight group-hover:text-hbcc-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-black/60 font-open-sans text-sm mb-6 line-clamp-2">
                  {item.excerpt}
                </p>
                <Link 
                  href={item.href}
                  className="inline-flex items-center gap-2 font-bold text-black group-hover:text-hbcc-gold transition-colors"
                >
                  READ MORE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
