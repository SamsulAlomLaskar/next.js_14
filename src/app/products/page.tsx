import React from "react";
import Link from "next/link";

const ProductList = () => {
  const productId: number = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product Page for dynamic routing</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2" replace>
          Product 2
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
};

export default ProductList;
