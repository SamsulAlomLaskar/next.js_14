"use client";

const generateRandomId = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  const randomId = generateRandomId(2);

  if (randomId === 1) {
    throw new Error("Error occurred while fetching the review");
  }

  return (
    <>
      {children}
      <h2>Product Features</h2>
    </>
  );
};

export default ProductLayout;
