import { useState } from "react";
import "./App.css";
import EggButton from "./Components/EggButton";
import EPSFunction from "./Components/EPSFunction";

function App() {
  const [count, setCount] = useState(0);
  const [EPS, setEPS] = useState(1);
  return (
    <>
      <EPSFunction
        count={count}
        setCount={setCount}
        EPS={EPS}
        setEPS={setEPS}
      />
      <EggButton count={count} setCount={setCount} EPS={EPS} setEPS={setEPS} />
    </>
  );
}

export default App;
