// src/app/page.tsx
import TopBlueLine from '../components/TopBlueLine';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EditorsPick from '../components/EditorsPick';
import Footer from '../components/Footer';
import ProductsCard from '@/components/ProductsCard';
import UniverseDiv from '@/components/UniverseDiv';
import FeaturedPosts from '@/components/FeaturedPosts';
import VitaProduct from '@/components/VItaProduct';

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Top Black Line */}
      <section className="relative">
        <TopBlueLine />
      </section>

      {/* Navbar */}
      <section className="relative">
        <Navbar />
      </section>

      {/* Hero Section */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* Editors Pick Section */}
      <section className="relative mt-16">
        <EditorsPick />
      </section>

      {/* Products Card Section */}
      <section className="relative mt-16">
        <ProductsCard />
      </section>

      {/* Vita Product Section */}
      <section className="relative mt-16">
        <VitaProduct />
      </section>

      {/* Universe Div Section */}
      <section className="relative mt-16">
        <UniverseDiv />
      </section>

      {/* Featured Posts Section */}
      <section className="relative mt-16">
        <FeaturedPosts />
      </section>

      {/* Footer */}
      <section className="relative mt-16">
        <Footer />
      </section>
    </main>
  );
}

