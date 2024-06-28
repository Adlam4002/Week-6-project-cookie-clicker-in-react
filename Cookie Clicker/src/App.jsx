import { useState, useEffect } from "react";
import "./App.css";
import EggButton from "./Components/EggButton";
import EPSFunction from "./Components/EPSFunction";
import Shop from "./Components/Shop";
import ResetButton from "./Components/ResetButton";
function App() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("Eggs")) || 0
  );
  const [EPS, setEPS] = useState(parseInt(localStorage.getItem("EPS")) || 1);
  useEffect(() => {
    localStorage.setItem("Eggs", count.toString());
    localStorage.setItem("EPS", EPS.toString());
  }, [count, EPS]);
  return (
    <>
      <section className="s1"></section>
      <section className="s2">
        <EPSFunction
          count={count}
          setCount={setCount}
          EPS={EPS}
          setEPS={setEPS}
        />
        <EggButton
          count={count}
          setCount={setCount}
          EPS={EPS}
          setEPS={setEPS}
        />
      </section>
      <section className="s3">
        <h2>The old Chicken Barn</h2>
        <Shop count={count} setCount={setCount} EPS={EPS} setEPS={setEPS} />
      </section>

      <ResetButton
        count={count}
        setCount={setCount}
        EPS={EPS}
        setEPS={setEPS}
      />
    </>
  );
}

export default App;
