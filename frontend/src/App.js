import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarCom from "./components/NavbarCom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Create from "./components/CRUD/Create";
import Footer from "./components/Footer";
import Read from "./components/CRUD/Read";
import ReadOne from "./components/CRUD/ReadOne";
import Update from "./components/CRUD/Update";


function App() {
  return (
    <div>
      <NavbarCom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/ReadOne/:id" element={<ReadOne />} />
        <Route path="/Update/:id" element={<Update />} />
      </Routes>
     
     
      <Footer/>
    </div>
  );
}

export default App;
