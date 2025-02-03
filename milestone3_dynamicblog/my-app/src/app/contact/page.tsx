import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Assuming you have a separate Footer component, otherwise use inline footer as before

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="max-w-lg mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

