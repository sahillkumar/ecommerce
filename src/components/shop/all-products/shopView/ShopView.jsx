import React, { useState } from "react";

import Search from "../../search/Search";

import Products from "../products/Products";

const ShopView = ({ products }) => {
  const [prods, setProds] = useState(products);

  return (
    <div>
      <div className="search-comp">
        <Search
          setProds={setProds}
          allproducts={products}
          currentProds={prods}
        />
      </div>
      <Products prods={prods} />
    </div>
  );
};

export default ShopView;
