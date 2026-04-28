import PageHeader from "@/components/layout/PageHeader";

export default function AboutUsPage() {
  return (
    <main>
      <PageHeader 
        title={<>ABOUT HOBSONS BAY <span className="text-hbcc-gold">CHESS CLUB</span></>} 
        subtitle="EST. 2008" 
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-xl max-w-none font-open-sans">
            <h2 className="text-4xl font-antonio font-bold uppercase mb-8">Who We Are</h2>
            <p className="mb-6 leading-relaxed">
              Hobsons Bay Chess Club is the largest and most vibrant chess community in Melbourne's West. 
              Founded in 2008, we have grown from a small group of enthusiasts into a thriving club 
              with over 130 active members ranging from beginners to masters.
            </p>
            <p className="mb-6 leading-relaxed">
              We are proud to provide a welcoming environment for players of all ages and skill levels. 
              Whether you're looking for competitive tournament play or a casual game with friends, 
              HBCC is the place for you.
            </p>
            
            <h2 className="text-4xl font-antonio font-bold uppercase mt-16 mb-8">Our Mission</h2>
            <p className="mb-6 leading-relaxed">
              To promote the game of chess in the Hobsons Bay area and surrounding suburbs, 
              building a supportive community where players can improve their skills, 
              compete at high levels, and most importantly, enjoy the world's greatest game.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
