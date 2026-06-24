import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Conteudos from "./Componentes/Conteudos";
import Navbar from "./Componentes/Navbar";
import Equipe from "./Pages/Equipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conteudos" element={<><Navbar /><Conteudos /></>} />
        <Route path="/sobre" element={<><Navbar /><Equipe /></>} />
      </Routes>
    </Router>
  );
}

export default App;