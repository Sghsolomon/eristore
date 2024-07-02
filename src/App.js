import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchNike } from "./features/nikes/nikeSlice";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NikeDirectoryPage from "./pages/NikeDirectoryPage";
import DetailPage from "./pages/DetailPage";
import NikeWomenPage from "./pages/NikeWomenPage";
import NikeMenPage from "./pages/NikeMenPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

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
        <Route path="nike" element={<NikeDirectoryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="men" element={<NikeMenPage />} />
        <Route path="women" element={<NikeWomenPage />} />
        <Route path="/:nikeId" element={<DetailPage />} />
        <Route path="nike/:nikeId" element={<DetailPage />} />
        <Route path="men/:nikeId" element={<DetailPage />} />
        <Route path="women/:nikeId" element={<DetailPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
