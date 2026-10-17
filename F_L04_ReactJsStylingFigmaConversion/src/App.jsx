import { useState } from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [currentScreen, setCurrentScreen] = useState("login");

  return (
    <div>
      {currentScreen === "login" ? (
        <Login onSwitchToSignUp={() => setCurrentScreen("signup")} />
      ) : (
        <SignUp onSwitchToLogin={() => setCurrentScreen("login")} />
      )}
    </div>
  );
}

export default App;