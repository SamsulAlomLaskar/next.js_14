import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <h2>Product Features</h2>
    </>
  );
};

export default ProductLayout;
