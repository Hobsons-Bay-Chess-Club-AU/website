import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Alonso already looking ahead after ‘goal feast’",
    excerpt: "The latest updates from the club championship and regional events.",
    date: "April 15, 2026",
    image: "https://hobsonsbaychess.com/wp-content/uploads/2025/12/73d6d6c6-d4f3-47f5-bbbd-8667da71b8ac-320x479.jpg",
    href: "/blog/alonso-goal-feast",
  },
  {
    title: "Horstweg can be a double gameweek hero",
    excerpt: "Strategy and analysis from the latest tournament games.",
    date: "April 10, 2026",
    image: "https://hobsonsbaychess.com/wp-content/uploads/2026/01/Untitled-1706-x-2560-px-10-320x480.png",
    href: "/blog/horstweg-hero",
  },
  {
    title: "Pre-Match Briefing: Hammers vs Eagles",
    excerpt: "Getting ready for the big weekend of chess at HBCC.",
    date: "April 5, 2026",
    image: "https://hobsonsbaychess.com/wp-content/uploads/2025/12/Off-Peak-5-1-e1767162829690-320x191.png",
    href: "/blog/pre-match-briefing",
  },
];

export default function NewsGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <p className="text-gray-600 mt-2">Updates and stories from our chess community.</p>
          </div>
          <Link href="/blog" className="text-red-700 font-semibold hover:underline">
            VIEW ALL NEWS →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link 
                  href={item.href}
                  className="text-red-700 font-medium hover:text-red-800"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
