import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NikeList from "./features/nikes/NikeList";
import HugoList from "./features/hugos/HugoList";
import RaybanList from "./features/raybans/RaybanList";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nike" element={<NikeList />} />
        <Route path="/hugo" element={<HugoList />} />
        <Route path="/rayban" element={<RaybanList />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
