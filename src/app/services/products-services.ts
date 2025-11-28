export class ProductServices {
  static BASE_URL = "https://dummyjson.com";

  // GET 100 products
  static getProducts = async () => {
    const res = await fetch(`${this.BASE_URL}/products?limit=100`);
    const data = await res.json();
    return data.products;
  };

  // GET product by ID
static getProductById = async (id: number | string) => {
  const res = await fetch(`${this.BASE_URL}/products/${id}`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  return res.json();
};
  // GET all category names
  static getCategories = async () => {
    const res = await fetch(`${this.BASE_URL}/products/categories`);
    return res.json();
  };

  static getProductsByCategory = async (category: string) => {
  const res = await fetch(
    `${this.BASE_URL}/products/category/${category}?limit=4`
  );
  const data = await res.json();
  return data.products;
};

}


