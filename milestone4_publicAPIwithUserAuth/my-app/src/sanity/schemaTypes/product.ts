import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
              source: "title", // Automatically generate slug from the title
              maxLength: 96,   // Limit the slug length for readability
              slugify: (input) =>
                input
                  .toLowerCase()
                  .replace(/\s+/g, "-") // Replace spaces with dashes
                  .slice(0, 96),       // Limit to 96 characters
            },
          },
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        {
            name: "stock",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Available Stock",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        }
    ]
})