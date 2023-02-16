import { useState } from "react";
import "./App.css";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="App">
      <Navbar
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      <MobileMenu showMobileMenu={showMobileMenu} />
    </div>
  );
}

export default App;
