"use client";
import React from "react";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handleOrder = () => {
    console.log("Order placed successfully!");
    router.push("/my-orders"); // Redirect to My Orders page
  };
  return (
    <>
      <h1>Order Products</h1>
      <button onClick={handleOrder}>Place Order</button>
    </>
  );
};

export default OrderProduct;
