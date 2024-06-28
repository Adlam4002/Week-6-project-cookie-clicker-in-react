import { useState } from "react";
import "./App.css";
import EggButton from "./Components/EggButton";
import EPSFunction from "./Components/EPSFunction";
import Shop from "./Components/Shop";

function App() {
  const [count, setCount] = useState(0);
  const [EPS, setEPS] = useState(1);
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
        <Shop />
      </section>
    </>
  );
}

export default App;
