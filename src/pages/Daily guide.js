import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";

function DailyGuide({ onGoProgress }) {
  const [done, setDone] = useState(
    localStorage.getItem("day1") === "done"
  );

  const completeDay = () => {
    localStorage.setItem("day1", "done");
    setDone(true);
  };

  return (
    <div>
      <Header title="Dia 1" />

      <p><strong>Reflexão</strong></p>
      <p>
        Emoções passam.  
        Observe sem reagir imediatamente.
      </p>

      <p><strong>Ação prática</strong></p>
      <ul>
        <li>Organizar algo pequeno</li>
        <li>Escrever uma ideia</li>
        <li>10 minutos de movimento</li>
      </ul>

      {!done ? (
        <Button text="Marcar como concluído" onClick={completeDay} />
      ) : (
        <p>✅ Dia concluído</p>
      )}

      <Button text="Ver progresso" onClick={onGoProgress} />
    </div>
  );
}

export default DailyGuide;
