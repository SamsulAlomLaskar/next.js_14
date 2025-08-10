import React from "react";
import { notFound } from "next/navigation";

const ProductReview = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Product Review Page with dynamic Nested Route having product Id:
      {params.productId} & review Id: {params.reviewId}
    </h1>
  );
};

export default ProductReview;
