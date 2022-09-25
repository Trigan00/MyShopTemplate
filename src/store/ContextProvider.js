import { useState } from "react";
import Context from "./context";

function ContextProvider(props) {
  const [inCartProducts, SetInCartProducts] = useState(
    JSON.parse(localStorage.getItem("CartProducts")) || []
  );

  const changeProductCountHandler = (id, sign) => {
    const cartProductsList = JSON.parse(localStorage.getItem("CartProducts"));
    const newarr = [...cartProductsList];

    const cartItemIndex = newarr.findIndex((item) => item.id === id);
    newarr.splice(cartItemIndex, 1, {
      ...cartProductsList[cartItemIndex],
      ItemCount: cartProductsList[cartItemIndex].ItemCount + sign,
    });
    localStorage.setItem("CartProducts", JSON.stringify(newarr));
    SetInCartProducts(newarr);
  };

  const value = {
    inCartProducts: inCartProducts,
    SetInCartProducts: SetInCartProducts,
    changeProductCount: changeProductCountHandler,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default ContextProvider;
