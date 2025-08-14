import React from "react";
import { notFound } from "next/navigation";

const generateRandomId = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductReview = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  const randomId = generateRandomId(2);

  if (randomId === 1) {
    throw new Error("Error occurred while fetching the review");
  }

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
