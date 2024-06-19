import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Home";
import Categorie from "./Components/Categorie";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/categorie' element={<Categorie />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
