
export interface Product {
    _id: string;
    title: string;
    _type: "product";
    productImage: {
        asset: {
            _ref: string;
            _type: "image";
        }
    };
    price: number;
    description: string;
    tags: Array<string>;
    discountPercentage: number;
    isNew: boolean;  
    stock: number;     
    slug: {
        current: string; // Slug field for dynamic routing
    };
}