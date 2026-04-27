import Link from "next/link";

const features = [
  {
    title: "Play Chess",
    description: "Weekly club nights + tournaments for all skill levels.",
    href: "/play-chess",
    icon: (
      <svg className="h-8 w-8 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Juniors",
    description: "Coaching and development pathway for young players.",
    href: "/juniors",
    icon: (
      <svg className="h-8 w-8 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Tournaments",
    description: "Rated and social events, major opens throughout the year.",
    href: "/tournaments",
    icon: (
      <svg className="h-8 w-8 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A3.323 3.323 0 0010.605 2.02a3.323 3.323 0 00-4.583 4.583 3.323 3.323 0 002.02 5.618 3.323 3.323 0 005.618-2.02 3.323 3.323 0 004.583-4.583z" />
      </svg>
    ),
  },
  {
    title: "Membership",
    description: "Join, save, and support the club's growth.",
    href: "/membership",
    icon: (
      <svg className="h-8 w-8 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default function FeatureCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Link 
              key={feature.title} 
              href={feature.href}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group border-b-4 border-transparent hover:border-red-700"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
