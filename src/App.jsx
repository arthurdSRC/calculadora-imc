import { data } from "./data/data";
import { useState } from "react";
import ImcCalc from "./components/ImcCalc/ImcCalc";

import "./App.css";
import Table from "./components/Table/Table";

function App() {
  const [info, setInfo] = useState("");
  const [imc, setImc] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();
    

    const weightfloat = +weight.replace(",", ".");
    const heightfloat = +height.replace(",", ".");

    const imcResult = (weightfloat / (heightfloat * heightfloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
    if (!info) return;
  };
const resetCalc = (e)=>{
      e.preventDefault()
      setImc('')
      setInfo('')
      setInfoClass('')

    }
    
  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <Table data={data} imc={imc} infoClass={infoClass} info={info} resetCalc ={resetCalc}/>
      )}
    </div>
  );
}

export default App;
