import React from "react";

const ProductReview = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  return (
    <h1>
      Product Review Page with dynamic Nested Route having product Id:
      {params.productId} & review Id: {params.reviewId}
    </h1>
  );
};

export default ProductReview;
