import PageHeader from "@/components/layout/PageHeader";

export default function MembershipPage() {
  return (
    <main>
      <PageHeader title="MEMBERSHIP" subtitle="JOIN THE COMMUNITY" />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#f9f9f9] p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-antonio font-bold uppercase mb-6">Adult Membership</h2>
              <p className="text-5xl font-antonio font-bold text-hbcc-gold mb-6">$80<span className="text-lg text-gray-400 font-open-sans">/year</span></p>
              <ul className="space-y-4 mb-10 text-lg">
                <li className="flex items-center gap-2">✓ Full voting rights</li>
                <li className="flex items-center gap-2">✓ Entry to all club tournaments</li>
                <li className="flex items-center gap-2">✓ Weekly club nights</li>
                <li className="flex items-center gap-2">✓ ACF Rating enrichment</li>
              </ul>
              <a href="#" className="inline-block w-full bg-black text-white text-center py-4 rounded-xl font-bold hover:bg-hbcc-gold transition-colors">JOIN AS ADULT</a>
            </div>

            <div className="bg-[#f9f9f9] p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-antonio font-bold uppercase mb-6">Junior Membership</h2>
              <p className="text-5xl font-antonio font-bold text-hbcc-gold mb-6">$40<span className="text-lg text-gray-400 font-open-sans">/year</span></p>
              <ul className="space-y-4 mb-10 text-lg">
                <li className="flex items-center gap-2">✓ Weekly coaching access</li>
                <li className="flex items-center gap-2">✓ Junior tournament entry</li>
                <li className="flex items-center gap-2">✓ Development pathway</li>
                <li className="flex items-center gap-2">✓ Weekly club nights</li>
              </ul>
              <a href="#" className="inline-block w-full bg-black text-white text-center py-4 rounded-xl font-bold hover:bg-hbcc-gold transition-colors">JOIN AS JUNIOR</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
