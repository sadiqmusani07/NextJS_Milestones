import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Assuming you have a separate Footer component

export default function About(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <section className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to AIBlog, your go-to place for the latest insights on AI, technology, and the future of innovation. Our blog is dedicated to providing you with high-quality content about AI developments, tutorials, industry news, and much more.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            At AIBlog, we strive to bring you the most up-to-date and accurate information about AI, delivered in an accessible and easy-to-understand format. Whether you're a beginner or a seasoned professional, our blog has something for everyone.
          </p>

          <p className="text-lg text-gray-700">
            Join our community, stay informed, and explore the fascinating world of Artificial Intelligence with us.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};
