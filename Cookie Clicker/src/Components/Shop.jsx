import { useState } from "react";
import ShopItem from "./ShopItem";
import upgrades from "../Lib/upgrades.json";
export default function Shop() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        Show/hide Chickens for sale
      </button>
      {show
        ? upgrades.map((item) => (
            <ShopItem
              key={item.id}
              name={item.name}
              increase={item.increase}
              cost={item.cost}
            />
          ))
        : null}
    </>
  );
}
