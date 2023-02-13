import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import Method from "./pages/Method";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <>
      <GlobalStyle />
      <Nav
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/method" element={<Method />} />
      </Routes>
    </>
  );
}

export default App;
