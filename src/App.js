import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import NikeDirectoryPage from "./pages/NikeDirectoryPage";
import HugoDirectoryPage from "./pages/HugoDirectoryPage";
import RaybanDirectoryPage from "./pages/RaybanDirectoryPage";
import DetailPage from "./pages/DetailPage";
import NikeWomenPage from "./pages/NikeWomenPage";
import NikeMenPage from "./pages/NikeMenPage";
import { fetchNike } from "./features/nikes/nikeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNike());
  }, [dispatch]);

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nike" element={<NikeDirectoryPage />} />
        <Route path="/men" element={<NikeMenPage />} />
        <Route path="/women" element={<NikeWomenPage />} />
        <Route path="/:nikeId" element={<DetailPage />} />
        <Route path="/hugo" element={<HugoDirectoryPage />} />
        <Route path="/rayban" element={<RaybanDirectoryPage />} />
        <Route path="nike/:nikeId" element={<DetailPage />} />
        <Route path="men/:nikeId" element={<DetailPage />} />
        <Route path="women/:nikeId" element={<DetailPage />} />
        <Route path="hugo/:hugoId" element={<DetailPage />} />
        <Route path="rayban/:raybanId" element={<DetailPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
