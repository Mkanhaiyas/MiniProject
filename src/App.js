import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactDOM } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Menubar from "./Components/Home/Menubar";
import Header from "./Components/Home/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
