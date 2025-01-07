import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import CommentsSection from "@/components/CommentsSection"; // Import the client component

interface Blog {
  heading: string;
  detailDescription: string;
  image: any;
  slug: string;
  date: string;
}

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "blog"]{ "slug": slug.current }`
  );

  return slugs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = params;

  const data: Blog | null = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      heading,
      detailDescription,
      "slug": slug.current,
      image,
      date
    }`,
    { slug }
  );

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Image
            src={urlFor(data.image).url()}
            alt={data.heading}
            height={600}
            width={800}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{data.heading}</h1>
          <p className="mt-2 text-sm text-gray-500">
            Published on: {new Date(data.date).toLocaleDateString()}
          </p>
          <p className="mt-4 text-gray-600">{data.detailDescription}</p>

          {/* Comments Section */}
          <CommentsSection />
        </div>
      </main>

      <footer className="w-full p-4 bg-gray-100 text-center">
        <p>&copy; 2025 AIBlog. All rights reserved.</p>
      </footer>
    </div>
  );
}
