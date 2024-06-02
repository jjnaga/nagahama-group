import 'assets/styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/Header';
import Heritage from 'pages/Heritage';
import Footer from 'components/Footer';
import Executives from 'pages/Executives';

const App = () => {
  return (
    <div className="">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/corporate" element={<Executives />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
