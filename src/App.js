import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import Method from "./pages/Method";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/method" element={<Method />} />
      </Routes>
    </>
  );
}

export default App;
