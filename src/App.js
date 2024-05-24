import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categorie from "./components/Categorie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/home' element={<Home />} />
          <Route path='/categorie' element={<Categorie />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
