import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import Method from "./pages/Method";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/method" element={<Method />} />
      </Routes>
    </>
  );
}

export default App;
