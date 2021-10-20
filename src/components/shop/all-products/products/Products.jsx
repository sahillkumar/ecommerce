import React from "react";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";

import ProductCard from "../productCard/ProductCard";
import "./products.css";

const Products = ({ prods, user }) => {
  return (
    <>
      <div className="products">
        {prods ? (
          prods.map((product, index) => (
            <ProductCard key={index} product={product} user={user} />
          ))
        ) : (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        )}
      </div>
    </>
  );
};

export default withRouter(Products);
