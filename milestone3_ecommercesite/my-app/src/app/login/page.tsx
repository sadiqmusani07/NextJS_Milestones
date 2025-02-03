// src/app/page.tsx
import Navbar from '@/components/Navbar';
import TopGreenLine from '@/components/TopGreenLine';
import Footer from '@/components/Footer';
import Product from '@/components/Product';
import ShopPage from '@/components/ShopPage';

export default function ProductList() {
  return (
    <main className="bg-gray-50">
      {/* Top Green Line */}
      <section className="relative">
        <TopGreenLine />
      </section>

      {/* Navbar */}
      <section className="relative">
        <Navbar />
      </section>
      {/* Footer */}
      <section className="relative mt-16">
        <Footer />
      </section>
    </main>
  );
}
