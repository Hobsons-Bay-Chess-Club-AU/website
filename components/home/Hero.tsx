import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/images/hero-bg.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hobsons Bay Chess Club
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          A vibrant community for chess enthusiasts in Melbourne's West. 
          Weekly club nights, tournaments, and junior coaching.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="https://portal.hobsonsbaychess.com/public/schedule/events"
            target="_blank"
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md font-semibold transition-colors"
          >
            View Tournaments
          </Link>
          <Link 
            href="/membership"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Become a Member
          </Link>
        </div>
      </div>
    </section>
  );
}
