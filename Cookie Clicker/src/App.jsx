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
  const [EPS, setEPS] = useState(parseInt(localStorage.getItem("EPS")) || 0);
  const [allEgg, setAllEgg] = useState(
    parseInt(localStorage.getItem("All eggs")) || 0
  );
  useEffect(() => {
    localStorage.setItem("All eggs", allEgg.toString());
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
          allEgg={allEgg}
          setAllEgg={setAllEgg}
        />
        <EggButton
          count={count}
          setCount={setCount}
          EPS={EPS}
          setEPS={setEPS}
          allEgg={allEgg}
          setAllEgg={setAllEgg}
        />
      </section>
      <section className="s3">
        <h2>The Old Chicken Barn</h2>
        <Shop
          allEgg={allEgg}
          count={count}
          setCount={setCount}
          EPS={EPS}
          setEPS={setEPS}
        />
      </section>

      <ResetButton
        count={count}
        setCount={setCount}
        EPS={EPS}
        setEPS={setEPS}
        allEgg={allEgg}
        setAllEgg={setAllEgg}
      />
    </>
  );
}

export default App;
