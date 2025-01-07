import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image"; // Import the urlFor function

export interface Blog {
  heading: string;
  description: string;
  slug: string;
  image: any; // image is now an object (Sanity image reference)
  date: string;
}

export default async function BlogCard() {
  const data: Blog[] = await client.fetch(
    `*[_type == "blog"] | order(date desc) {
      heading,
      description,
      "slug": slug.current,
      image,
      date
    }`
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Blog Content */}
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {data.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`}>
            <div className="flex flex-col p-4 shadow-md rounded-md hover:scale-105 active:scale-100 transition-all cursor-pointer">
              <div className="relative w-full h-48 mb-4">
                {/* Image */}
                <Image
                  src={urlFor(blog.image).url()} // Using urlFor to fetch image
                  alt={blog.heading}
                  layout="fill" // Make image fill its container
                  objectFit="cover" // Ensures the aspect ratio is maintained
                  className="rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-2">{blog.heading}</h2>
                <p className="text-gray-500 text-sm mb-4">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
                <p className="text-sm line-clamp-3">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
