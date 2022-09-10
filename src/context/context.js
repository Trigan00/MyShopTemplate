import React from "react";

const Context = React.createContext({
  inCartProducts: [],
  SetInCartProducts: () => {},
  increaseProductHandler: () => {},
  decreaseProductHandler: () => {},
});

export default Context;
