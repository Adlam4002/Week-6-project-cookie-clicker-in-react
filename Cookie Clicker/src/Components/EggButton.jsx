import { useState } from "react";

export default function EggButton({ count, setCount, EPS }) {
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>🥚</button>
      <h2>Eggs: {count}</h2>
      <h2>EPS: {EPS}</h2>
    </>
  );
}