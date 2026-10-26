import React from 'react';
import { useParams } from "react-router";
import {  useEffect } from 'react';

const Product = () => {
    let params = useParams();
useEffect(() => {
    console.log("I am running")
}, [])
  return (
    <div>
      <div>Product ID: {params.id}</div>
    </div>
  );
};

export default Product;