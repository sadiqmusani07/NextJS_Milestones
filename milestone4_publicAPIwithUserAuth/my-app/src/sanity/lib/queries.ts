import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;
export const four = groq`*[_type == "product"][0..3]`;
export const productBySlug = groq`
  *[_type == "product" && slug.current == $slug] {
    _id,
    title,
    description,
    price,
    productImage, 
    slug,
    stock,
    tags,
    discountPercentage,
    isNew
  }
`;

