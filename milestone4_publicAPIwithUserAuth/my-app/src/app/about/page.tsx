// src/app/page.tsx
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import AboutUsSection from '@/components/AboutUsSection';
import AboutUsLogo from '@/components/AboutUsLogo';
import GrowSection from '@/components/GrowSection';

export default function About() {
  return (
    <main className="bg-gray-50">

      {/* About Section */}
      <section className="relative">
        <AboutSection />
      </section>

      {/* About Us Section */}
      <section className="relative">
        <AboutUsSection />
      </section>

      {/* About Us Logo Section */}
      <section className="relative">
        <AboutUsLogo />
      </section>

      {/* Grow Section */}
      <section className="relative">
        <GrowSection />
      </section>

      {/* Footer */}
      <section className="relative mt-16">
        <Footer />
      </section>
    </main>
  );
}
