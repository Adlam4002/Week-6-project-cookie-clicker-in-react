import { useState } from "react";
export default function ResetButton({ count, setCount, EPS, setEPS }) {
  function resetEggs() {
    if (window.confirm("This will crack all of your eggs")) {
      setCount((currentCount) => 0), setEPS((currentEPS) => 1);
    }
  }
  return (
    <div className="bmr">
      <button className="reset-button" onClick={resetEggs}>
        🍳
      </button>
    </div>
  );
}
