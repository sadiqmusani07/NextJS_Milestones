import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto p-4"><BlogCard/></main>
          <Footer />
        </div>
  );
}
