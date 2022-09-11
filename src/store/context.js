import React from "react";

const Context = React.createContext({
  inCartProducts: [],
  SetInCartProducts: () => {},
  changeProductCount: () => {},
});

export default Context;
