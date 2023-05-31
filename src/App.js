import './App.css';
import About from './components/About';
import Achieve from './components/Achieve';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="achieve" element={<Achieve />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
