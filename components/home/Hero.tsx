import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Image with precise overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-right md:bg-center"
        style={{ 
          backgroundImage: `url('/images/hero-bg.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h2 className="text-white text-4xl md:text-6xl font-antonio font-bold leading-tight tracking-tight mb-2">
              HOBSONS BAY CHESS CLUB
            </h2>
            <h1 className="text-hbcc-gold text-4xl md:text-7xl font-antonio font-bold leading-none mb-6">
              BUILDING CHAMPIONS AND COMMUNITY THROUGH CHESS
            </h1>
            <p className="text-white text-xl md:text-2xl font-open-sans mb-10 max-w-xl">
              Largest chess club in Melbourne's West
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="https://portal.hobsonsbaychess.com/public/schedule/events"
                target="_blank"
                className="border-2 border-hbcc-gold text-white px-10 py-3 rounded-full font-bold text-lg hover:bg-hbcc-gold hover:text-black transition-all text-center"
              >
                VIEW TOURNAMENTS
              </Link>
              <Link 
                href="/membership"
                className="bg-hbcc-gold text-black px-10 py-3 rounded-full font-bold text-lg hover:bg-white transition-all text-center"
              >
                BECOME A MEMBER
              </Link>
            </div>
          </div>

          {/* Right Content - Partner */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative group">
              <p className="text-hbcc-gold text-2xl md:text-4xl font-antonio font-bold mb-4 italic tracking-widest text-center lg:text-right">
                Proud Partner
              </p>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <Image 
                  src="/images/logo.png"
                  alt="HBCC Logo"
                  width={400}
                  height={200}
                  className="w-full max-w-[200px] h-auto grayscale brightness-200 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-1 h-16 bg-gradient-to-b from-hbcc-gold to-transparent rounded-full animate-bounce" />
      </div>
    </section>
  );
}
