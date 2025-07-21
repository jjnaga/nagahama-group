import 'assets/styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/Header';
import Heritage from 'pages/Heritage';
import Footer from 'components/Footer';
import Executives from 'pages/Executives';
import Earnings from 'pages/Earnings';
import EarningsDetail from 'pages/EarningsDetail';

const App = () => {
  return (
    <div className="">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/corporate" element={<Executives />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/earnings/:slug" element={<EarningsDetail />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
