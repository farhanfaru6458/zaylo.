"use client";

import { useEffect, useState } from "react";
import { ProductServices } from "../../services/products-services";
import ProductDetailsClient from "./ProductDetailsClient";
import ProductDetailsSkeleton from "./ProductDetailSkeleton";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  title: string;
  rating: number;
  category: string;
  images: string[];
  // Add other fields as needed
};


export default function Page({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function load() {
      const { id } = await params;
      const data = await ProductServices.getProductById(id);
      setProduct({
        ...data,
        description: data.description ?? "",
      });
    }
    load();
  }, [params]);

  if (!product) return <ProductDetailsSkeleton />;
  

  return <ProductDetailsClient product={product} />;
}
