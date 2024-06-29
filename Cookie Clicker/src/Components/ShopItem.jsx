import { useEffect, useState } from "react";
import upgrades from "../Lib/upgrades.json";
export default function ShopItem({
  name,
  cost,
  increase,
  owned,
  count,
  setCount,
  EPS,
  setEPS,
  display,
  allEgg,
}) {
  function handleBuy() {
    if (count >= cost) {
      setCount((currentCount) => currentCount - cost);
      setEPS((currentEPS) => currentEPS + increase);
    }
  }

  return (
    <>
      <div className="Itembox">
        <h5 className="Item">
          {allEgg >= display ? (
            <>
              {name}: increase eggs per second by {increase}. Cost: {cost} eggs
              <button onClick={handleBuy}>buy</button>
            </>
          ) : (
            `You do not yet understand this chicken`
          )}
        </h5>
      </div>
    </>
  );
}
