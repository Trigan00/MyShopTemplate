import { useContext } from "react";
import CartPageProduct from "../components/CartPageProduct/CartPageProduct";
import Context from "../context/context";

function CartPage() {
  const ctx = useContext(Context);
  return (
    <div>
      {ctx.map((value, i) => {
        return (
          <CartPageProduct
            key={i}
            name={value.ItemName}
            count={value.ItemCount}
          />
        );
      })}
    </div>
  );
}

export default CartPage;
