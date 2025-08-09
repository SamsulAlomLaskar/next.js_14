import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <h1>Product Details Page with dynamic routing {params.productId}</h1>;
};

export default ProductDetails;
