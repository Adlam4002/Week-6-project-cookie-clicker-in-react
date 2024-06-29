import { useState } from "react";
export default function ResetButton({
  count,
  setCount,
  EPS,
  setEPS,
  allEgg,
  setAllEgg,
}) {
  function resetEggs() {
    if (window.confirm("This will crack all of your eggs")) {
      setCount((currentCount) => 0),
        setEPS((currentEPS) => 0),
        setAllEgg((currentAllEgg) => 0);
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
