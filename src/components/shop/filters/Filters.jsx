import { Button, Grid, Input, Tab, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./filters.css";
import TabPanel from "../../Reusable Components/TabPanel";

const Filters = ({ setProds, allproducts, currentProds }) => {
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState(null);
  const [priceFilter, setPriceFilter] = useState({});
  const [direction, setDirection] = useState();
  const [priceF, setPriceF] = useState(false);
  const [prodByCategory, setProdByCategory] = useState();
  const [sortedProducts, setSortedProducts] = useState();

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

  useEffect(() => {
    if (category) {
      setProds(prodByCategory ?? []);
    }
  }, [category]);

  useEffect(() => {
    if (direction) {
      setProds(sortedProducts ?? []);
    }
  }, [direction, sortedProducts]);

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
      setProds([...allproducts]);
    }
  };

  const handleSort = (field, dir, method, id) => (e) => {
    if (method === "add") {
      addDel(id);
      setDirection(dir);
      sortProducts(field, dir);
    } else {
      removeDel(id);
      setDirection(dir);
      sortProducts("name", "asc");
    }
  };

  const getProductsBySelectedCategory = (val) => {
    console.log(val);
    if (val === "all") {
      return;
    } else {
      const tempAr = priceF ? currentProds : allproducts;
      const ar = tempAr.filter((prod) => {
        return prod.category?.title === val;
      });
      setProdByCategory([...ar]);
    }
  };

  const sortProducts = (field, direction) => {
    let tempAr = [];
    if (category && priceF) tempAr = currentProds;
    else if (category) tempAr = prodByCategory;
    else if (priceF) tempAr = currentProds;
    else tempAr = allproducts;

    if (field === "discountMrp") {
      if (direction === "asc") {
        tempAr.sort((a, b) => a.discountMrp - b.discountMrp);
      } else {
        tempAr.sort((a, b) => b.discountMrp - a.discountMrp);
      }
    } else if (field === "discountPercentage") {
      tempAr.sort((a, b) => b.discountPercentage - a.discountPercentage);
    } else {
      tempAr.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB);
      });
    }
    setSortedProducts([...tempAr]);
  };

  const getProductsByRange = () => {
    const { min, max } = priceFilter;
    const tempAr = category ? prodByCategory : allproducts;
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
