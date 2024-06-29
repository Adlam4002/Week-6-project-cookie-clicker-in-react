export default function EggButton({ count, setCount, EPS, allEgg, setAllEgg }) {
  function buttonClick() {
    setCount((prevCount) => prevCount + 1);
    setAllEgg((prevAllEgg) => prevAllEgg + 1);
  }
  return (
    <>
      <button className="eggbut" onClick={buttonClick}>
        🥚
      </button>
      <h2>Eggs: {count}</h2>
      <h2>EPS: {EPS}</h2>
    </>
  );
}
