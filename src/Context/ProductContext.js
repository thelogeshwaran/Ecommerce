import React, { createContext, useContext, useReducer, useState } from "react";
import customData from "../Components/Data/customData.json";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const intialData = customData;
  const product = [...intialData];
  const initialState = {
    sortby: "",
    filterby: {
      size: [],
      categories: [],
    },
    filterCategories: {
      size: ["S", "M", "L", "XL"],
      categories: ["Men", "Women"],
    },
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  function reducerFunction(state, { action, type, payload }) {
    switch (action) {
      case "SORT":
        return { ...state, sortby: payload };
      case "FILTER":
        return filterbyfn(state, type, payload);
      case "CLEAR":
        return {
          ...state,
          sortby: "",
          filterby: {
            size: [],
            categories: [],
          },
        };
      default:
        return state;
    }
  }

  function filterbyfn(state, type, filter) {
    if (!state.filterby[type].includes(filter)) {
      return {
        ...state,
        filterby: {
          ...state.filterby,
          [type]: [...state.filterby[type], filter],
        },
      };
    } else {
      return {
        ...state,
        filterby: {
          ...state.filterby,
          [type]: state.filterby[type].filter((item) => item !== filter),
        },
      };
    }
  }
  function sortData(productList, sortBy) {
    switch (sortBy) {
      case "LOW_TO_HIGH":
        return productList.sort((a, b) => a.price - b.price);
      case "HIGH_TO_LOW":
        return productList.sort((a, b) => b.price - a.price);
      default:
        return productList;
    }
  }

  function filterData(data, filterBy) {
    const filter = data
      .filter((item) =>
        filterBy.size.length > 0 ? filterBy.size.includes(item.size) : item
      )
      .filter((item) =>
        filterBy.categories.length > 0
          ? filterBy.categories.includes(item.category)
          : item
      );
    return filter;
  }

  const sortedData = sortData(product, state.sortby);
  const finalData = filterData(sortedData, state.filterby);

  return (
    <ProductContext.Provider value={{ state, finalData, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductProvider() {
  return useContext(ProductContext);
}
