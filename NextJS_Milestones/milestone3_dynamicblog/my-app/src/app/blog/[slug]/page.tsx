import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image"; // Import urlFor utility

interface Blog {
  heading: string;
  detailDescription: string;
  image: any; // Sanity image reference object
  slug: string;
  date: string;
}

interface Params {
  slug: string;
}

// Static params generation for pre-rendering
export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "blog"]{ "slug": slug.current }`
  );

  return slugs.map((blog) => ({ slug: blog.slug }));
}

// Fetch data for a specific blog post
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

  // Handle case where no data is found (404)
  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main content area */}
      <main className="flex-1 container mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          {/* Use image object directly */}
          <Image
            src={urlFor(data.image).url()} // Generate the image URL using urlFor
            alt={data.heading}
            height={600}
            width={800}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{data.heading}</h1>
          <p className="mt-2 text-sm text-gray-500">Published on: {new Date(data.date).toLocaleDateString()}</p>
          <p className="mt-4 text-gray-600">{data.detailDescription}</p>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full p-4 bg-gray-100 text-center">
        <p>&copy; 2025 AIBlog. All rights reserved.</p>
      </footer>
    </div>
  );
}
