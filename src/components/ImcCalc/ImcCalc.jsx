import { useState } from "react";
import Button from "../Button/Button";
import "./ImcCalc.css";

const ImcCalc = ({calcImc}) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  
 
  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (target) => {
    const updateValue = validDigits(target.value);
    setHeight(updateValue);
  };

  const handleWeightChange = (target) => {
    const updateValue = validDigits(target.value);
    setWeight(updateValue);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
              onChange={({ target }) => handleHeightChange(target)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 86.5"
              onChange={({ target }) => handleWeightChange(target)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action ={e=>calcImc(e,height,weight)}/>
          <Button id="clean-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
