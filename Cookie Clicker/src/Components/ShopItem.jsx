import { useEffect, useState } from "react";
export default function ShopItem({
  name,
  cost,
  increase,
  owned,
  count,
  setCount,
  EPS,
  setEPS,
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
          {name}: increase eggs persecond by {increase}. Cost: {cost} eggs
          <button onClick={handleBuy}>buy</button>
        </h5>
      </div>
    </>
  );
}
