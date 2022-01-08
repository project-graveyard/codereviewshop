// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from "./Pages/About/About";
import Comm from "./Pages/Community/Comm";
import Services from "./Pages/Services/Services";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/about' element={<About />} />
        <Route path='/community' element={<Comm />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
