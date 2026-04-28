export default function PageHeader({ 
  title, 
  subtitle, 
  bgImage = "/images/hero-bg.png" 
}: { 
  title: React.ReactNode; 
  subtitle?: string;
  bgImage?: string;
}) {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-black">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {subtitle && (
          <p className="text-hbcc-gold text-xl md:text-2xl font-antonio font-bold uppercase tracking-[0.2em] mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="text-white text-6xl md:text-9xl font-antonio font-bold uppercase leading-[0.9] tracking-tighter">
          {title}
        </h1>
      </div>
    </section>
  );
}
