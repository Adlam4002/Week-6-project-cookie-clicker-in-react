import { useState } from "react";
import ShopItem from "./ShopItem";
import upgrades from "../Lib/upgrades.json";
export default function Shop({ count, setCount, EPS, setEPS }) {
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
              owned={item.owned}
              name={item.name}
              increase={item.increase}
              cost={item.cost}
              count={count}
              setCount={setCount}
              EPS={EPS}
              setEPS={setEPS}
            />
          ))
        : null}
    </>
  );
}
