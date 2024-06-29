import { useEffect, useState } from "react";
export default function EPSFunction({
  count,
  setCount,
  EPS,
  setAllEgg,
  allEgg,
}) {
  useEffect(() => {
    const eggInterval = setInterval(() => {
      setCount((currentCount) => currentCount + EPS);
      setAllEgg((currentAllEgg) => currentAllEgg + EPS);
    }, 1000);
    return () => clearInterval(eggInterval);
  }, [EPS, setCount, setAllEgg]);
  return;
}
