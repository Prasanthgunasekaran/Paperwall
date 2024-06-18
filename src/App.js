import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Categorie from "./Categorie";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
