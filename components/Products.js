import React, { useState } from "react";
import products from "../src/products.json";

function Products() {
  const [filterProducts, setFilterPRoducts] = useState([...products]);

  const FilterTitle = (e) => {
    setFilterPRoducts(
      products.filter((product) => product.title.startsWith(e.target.value))
    );
  };

  const FilterCategory = (e) => {
    setFilterPRoducts(
      products.filter((product) => product.category.startsWith(e.target.value))
    );
  };

  const SortTitle = () => {
    setFilterPRoducts(
      [...products].sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };

  const SortCategory = () => {
    setFilterPRoducts(
      [...products].sort((a, b) => {
        if (a.category < b.category) {
          return -1;
        } else if (a.category > b.category) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };

  const DisplayProducts = filterProducts.map((items) => {
    return (
      <tr>
        <td>{items.id}</td>
        <td>{items.title}</td>
        <td>{items.category}</td>
        <td>{items.price}</td>
        <td>{items.rating.rate}</td>
      </tr>
    );
  });

  return (
    <>
      <input type="text" placeholder="filter title" onKeyDown={FilterTitle} />

      <input
        type="text"
        placeholder="filter category"
        onKeyDown={FilterCategory}
      />

      <button
        onClick={() => {
          filterProducts.map((items) =>
            console.log(items.title + " " + items.category)
          );
        }}
      >
        Submit
      </button>

      <table>
        <thead>
          <tr>
            <th>Serial NO</th>
            <th>
              products title <button onClick={SortTitle}>Sort title</button>
            </th>
            <th>
              category <button onClick={SortCategory}>Sort category</button>
            </th>
            <th>price</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody>{DisplayProducts}</tbody>
      </table>
    </>
  );
}

export default Products;
