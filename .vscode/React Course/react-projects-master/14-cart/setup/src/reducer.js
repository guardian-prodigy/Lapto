import React from "react";

export const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "CLEAR_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    let Item = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: Item };
  }
  if (action.type === "DECREASE") {
    let Item = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    return { ...state, cart: Item };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (total, item) => {
        const { price, amount } = item;
            total.amount += amount;
            total.total += (price * amount)
        return total;
      },
      {
        total: 0,
        amount: 0,
      }
      );
      total = parseFloat(total.toFixed(2))
    return { ...state, total, amount };
  }
  return state;
};
