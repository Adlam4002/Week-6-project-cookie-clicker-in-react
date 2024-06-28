export default function EggButton({ count, setCount, EPS }) {
  return (
    <>
      <button className="eggbut" onClick={() => setCount((count) => count + 1)}>
        🥚
      </button>
      <h2>Eggs: {count}</h2>
      <h2>EPS: {EPS}</h2>
    </>
  );
}
