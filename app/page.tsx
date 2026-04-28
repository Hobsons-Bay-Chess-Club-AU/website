import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/FeatureCards";
import EventsList from "@/components/home/EventsList";
import Standings from "@/components/home/Standings";
import NewsGrid from "@/components/home/NewsGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <EventsList />
      <Standings />
      <NewsGrid />
      
      {/* Schedule Download CTA - Redesigned to match brand */}
      <section className="py-24 bg-hbcc-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-antonio font-bold mb-8 uppercase tracking-tight">
            Ready to join the action?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/70 font-open-sans">
            Download our weekly schedule and see how you can get involved in our upcoming events.
          </p>
          <a 
            href="https://hobsonsbaychess.com/wp-content/uploads/sites/2/2022/12/Schedule.pdf" 
            target="_blank"
            className="inline-block bg-hbcc-gold text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-2xl"
          >
            DOWNLOAD WEEKLY SCHEDULE
          </a>
        </div>
      </section>
    </>
  );
}
