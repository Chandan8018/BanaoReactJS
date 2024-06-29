import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import Home from "./pages/Home";
import AddOwn from "./pages/AddOwn";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-own' element={<AddOwn />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}
