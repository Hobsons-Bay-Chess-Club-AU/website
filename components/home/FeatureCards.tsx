export default function FeatureCards() {
  const stats = [
    { number: "50+", label: "Years Serving Community", icon: "castle" },
    { number: "130+", label: "Active Members", icon: "users" },
    { number: "99", label: "Juniors in 2025", icon: "user-plus" },
    { number: "80+", label: "Yearly Club Nights", icon: "calendar" },
    { number: "30+", label: "Events This Year", icon: "shield" },
    { number: "100+", label: "Weekly Attendance", icon: "check-user" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-6 group">
              <div className="text-hbcc-gold">
                {stat.icon === "castle" && (
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h20v-2h-2v-4h2v-2h-1v-2h1v-2h-1V8h1V6h-1V4h1V2h-3v2h-2V2h-2v2h-2V2h-2v2H8V2H6v2H4V2H1v2h1v2H1v2h1v2H1v2h1v4H2v2zm2-6h16v4H4v-4z"/></svg>
                )}
                {stat.icon === "users" && (
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                )}
                {stat.icon === "user-plus" && (
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                )}
                {stat.icon === "calendar" && (
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/></svg>
                )}
                {stat.icon === "shield" && (
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                )}
                {stat.icon === "check-user" && (
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                )}
              </div>
              <div>
                <p className="text-6xl md:text-8xl font-antonio font-bold leading-none mb-1 group-hover:text-hbcc-gold transition-colors">
                  {stat.number}
                </p>
                <p className="text-xl md:text-2xl font-antonio font-semibold uppercase tracking-tight text-black/80">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
