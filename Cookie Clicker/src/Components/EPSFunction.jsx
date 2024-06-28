import { useEffect, useState } from "react";
export default function EPSFunction({ count, setCount, EPS }) {
  useEffect(() => {
    const eggInterval = setInterval(() => {
      setCount((currentCount) => currentCount + EPS);
    }, 1000);
    return () => clearInterval(eggInterval);
  }, [EPS, setCount]);
  return;
}
