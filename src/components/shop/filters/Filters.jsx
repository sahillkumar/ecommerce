import { Button, Grid, Input, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";

import {
  getAllSortedProducts,
  getProductsByCategory,
  sortProductsByCategory,
} from "../shopHelper/shopHelper";
import "./filters.css";
import TabPanel from "../../Reusable Components/TabPanel";

const Filters = ({ setProds, allproducts, currentProds, actualProds }) => {
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState(null);
  const [direction, setDirection] = useState(null);
  const [priceFilter, setPriceFilter] = useState({});
  const [priceF, setPriceF] = useState(false);

  const categories = [
    "beauty essentials",
    "eatables",
    "handicrafts",
    "mugs",
    "clothing",
  ];
  const handleTabChange = (e, val) => {
    setValue(val);
  };

  const getProductsBySelectedCategory = (val) => {
    if (val == "all") return setProds(allproducts);
    if (actualProds && actualProds.length !== 0) {
      const ar = actualProds.filter((prod) => {
        return prod.category.title === val;
      });
      setProds(ar);
    }
  };

  const addDel = (value) => {
    let element = document.getElementById(value);
    element.classList.add("act");
    element.children[1].setAttribute("style", "display:visible;");
  };

  const removeDel = (value) => {
    let element = document.getElementById(value);
    element.classList.remove("act");
    element.children[1].setAttribute("style", "display:none;");
  };

  const handleFilter = (key, value, method) => (e) => {
    if (method === "add") {
      addDel(value);
      if (category && value !== category) {
        removeDel(category);
      }
      setCategory(value);
      getProductsBySelectedCategory(value);
    } else if (method === "remove") {
      removeDel(value);
      setCategory(null);
      setProds(allproducts);
    }
  };

  const handleSort = (field, dir, method, id) => (e) => {
    if (method === "add") {
      addDel(id);

      setDirection(dir);
      sortProducts(field, dir);
    } else {
      removeDel(id);
      sortProducts("name", "asc");
    }
  };

  const sortProducts = async (field, direction) => {
    if (currentProds.length < allproducts.length && category) {
      const products = await sortProductsByCategory(category, field, direction);
      setProds(products);
    } else {
      const products = await getAllSortedProducts(field, direction);
      setProds(products);
    }
  };

  const getProductsByRange = () => {
    const { min, max } = priceFilter;
    const tempAr = category ? currentProds : allproducts;
    if (tempAr && tempAr.length !== 0) {
      const ar = tempAr.filter(
        (prod) => prod.discountMrp >= min && prod.discountMrp <= max
      );
      setProds(ar);
    }
  };

  const setPrice = (key) => (e) => {
    setPriceFilter({
      ...priceFilter,
      [key]: e.target.value,
    });
  };

  const submitForm = (e) => {
    const { min, max } = priceFilter;
    if (min === "" && max === "") return setProds(allproducts);
    setPriceF(true);
    getProductsByRange();
  };

  return (
    <div className="filters">
      <Tabs
        onChange={handleTabChange}
        value={value}
        className="tabs"
        indicatorColor="primary"
        centered
      >
        <Tab label="CATEGORIES" className="tab" />
        <Tab label="SORT BY" className="tab" />
        <Tab label="PRICE RANGE" className="tab" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Grid container justify="center">
          <Grid item className="grid-item" justify="center" id="all">
            <Button
              className="btn"
              onClick={handleFilter("category", "all", "add")}
            >
              all
            </Button>
            <span
              className="remove"
              style={{ display: "none" }}
              onClick={handleFilter("category", "all", "remove")}
            >
              &#10005;
            </span>
          </Grid>
          {categories &&
            categories.map((category) => (
              <Grid
                item
                key={category}
                className="grid-item"
                id={category}
                justify="center"
              >
                <Button
                  className="btn"
                  onClick={handleFilter("category", category, "add")}
                >
                  {category}
                </Button>
                <span
                  className="remove"
                  style={{ display: "none" }}
                  onClick={handleFilter("category", category, "remove")}
                >
                  &#10005;
                </span>
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container justify="center">
          <Grid item id="sort-lth" className="grid-item" justify="center">
            <Button
              className="btn"
              onClick={handleSort("discountMrp", "asc", "add", "sort-lth")}
            >
              price : low to high
            </Button>
            <span
              className="remove"
              style={{ display: "none" }}
              onClick={handleSort("discountMrp", "asc", "remove", "sort-lth")}
            >
              &#10005;
            </span>
          </Grid>
          <Grid item id="sort-htl" className="grid-item" justify="center">
            <Button
              className="btn"
              onClick={handleSort("discountMrp", "desc", "add", "sort-htl")}
            >
              price : high to low
            </Button>
            <span
              className="remove"
              style={{ display: "none" }}
              onClick={handleSort("discountMrp", "desc", "remove", "sort-htl")}
            >
              &#10005;
            </span>
          </Grid>
          <Grid item id="sort-discount" className="grid-item" justify="center">
            <Button
              className="btn"
              onClick={handleSort(
                "discountPercentage",
                "desc",
                "add",
                "sort-discount"
              )}
            >
              discount
            </Button>
            <span
              className="remove"
              style={{ display: "none" }}
              onClick={handleSort(
                "discountPercentage",
                "desc",
                "remove",
                "sort-discount"
              )}
            >
              &#10005;
            </span>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container justify="center" style={{ textAlign: "center" }}>
          <form>
            <Input
              placeholder="Min Price"
              style={{ width: 150, marginRight: 80 }}
              required
              value={priceFilter.min}
              onChange={setPrice("min")}
            />
            <Input
              placeholder="Max Price"
              style={{ width: 150, marginRight: 80 }}
              required
              value={priceFilter.max}
              onChange={setPrice("max")}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={submitForm}
              style={{ marginRight: 30 }}
            >
              Search
            </Button>
            {priceF && (
              <Button
                variant="outlined"
                style={{ background: "red", color: "white" }}
                onClick={() => {
                  setPriceFilter({ min: "", max: "" });
                  setProds(allproducts);
                  setPriceF(!priceF);
                }}
              >
                Remove Price Filter
              </Button>
            )}
          </form>
        </Grid>
      </TabPanel>
    </div>
  );
};

export default Filters;
