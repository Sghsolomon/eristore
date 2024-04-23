import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NikeDirectoryPage from "./pages/NikeDirectoryPage";
import HugoDirectoryPage from "./pages/HugoDirectoryPage";
import RaybanDirectoryPage from "./pages/RaybanDirectoryPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nike" element={<NikeDirectoryPage />} />
        <Route path="/hugo" element={<HugoDirectoryPage />} />
        <Route path="/rayban" element={<RaybanDirectoryPage />} />
        <Route path="nike/:nikeId" element={<DetailPage />} />
        <Route path="hugo/:hugoId" element={<DetailPage />} />
        <Route path="rayban/:raybanId" element={<DetailPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
