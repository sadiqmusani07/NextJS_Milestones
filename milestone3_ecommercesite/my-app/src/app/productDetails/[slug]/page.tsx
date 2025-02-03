import { client } from "@/sanity/lib/client";
import { productBySlug } from "@/sanity/lib/queries";
import ProductClientComponent from "@/components/ProductClientComponent"; // Import Client Component

export default async function ProductDetails({ params }: { params: { slug: string } }) {
  const product = await client.fetch(productBySlug, { slug: params.slug });

  if (!product || product.length === 0) {
    return <div className="text-center">Product not found!</div>;
  }

  const item = product[0]; // Get the first matching product

  console.log('Product Details:', item); // Log the product to verify it has stock property

  return <ProductClientComponent product={item} />;
}
