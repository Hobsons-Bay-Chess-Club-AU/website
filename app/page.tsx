import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/FeatureCards";
import EventsList from "@/components/home/EventsList";
import NewsGrid from "@/components/home/NewsGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <EventsList />
      <NewsGrid />
      
      {/* Schedule / Download Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join the action?</h2>
          <p className="text-xl mb-8 text-red-100">
            Download our weekly schedule and see how you can get involved in our upcoming events.
          </p>
          <a 
            href="https://hobsonsbaychess.com/wp-content/uploads/sites/2/2022/12/Schedule.pdf" 
            target="_blank"
            className="inline-block bg-white text-red-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            DOWNLOAD WEEKLY SCHEDULE
          </a>
        </div>
      </section>
    </>
  );
}
