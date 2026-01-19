import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";

function Progress({ onBack }) {
  const done = localStorage.getItem("day1") === "done";

  return (
    <div>
      <Header title="Progresso" />

      <p>
        Dia 1: {done ? "✅ Concluído" : "❌ Não concluído"}
      </p>

      <Button text="Voltar" onClick={onBack} />
    </div>
  );
}

export default Progress;
