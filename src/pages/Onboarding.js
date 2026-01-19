import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";

function Onboarding({ onNext }) {
  const [name, setName] = useState("");

  const start = () => {
    localStorage.setItem("userName", name);
    onNext();
  };

  return (
    <div>
      <Header title="Bem-vindo" />

      <p>
        Emoções são temporárias.  
        Ações constroem o amanhã.
      </p>

      <input
        type="text"
        placeholder="Seu nome (opcional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 10, width: "100%", marginTop: 10 }}
      />

      <Button text="Começar" onClick={start} />
    </div>
  );
}

export default Onboarding;
