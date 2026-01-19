import React, { useState } from "react";
import Onboarding from "./pages/Onboarding";
import DailyGuide from "./pages/DailyGuide";
import Progress from "./pages/Progress";

function App() {
  const [screen, setScreen] = useState("onboarding");

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      {screen === "onboarding" && (
        <Onboarding onNext={() => setScreen("daily")} />
      )}

      {screen === "daily" && (
        <DailyGuide
          onGoProgress={() => setScreen("progress")}
        />
      )}

      {screen === "progress" && (
        <Progress onBack={() => setScreen("daily")} />
      )}
    </div>
  );
}

export default App;
