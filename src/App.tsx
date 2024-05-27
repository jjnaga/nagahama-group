import 'assets/styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/Header';
import { Provider } from 'context/Provider';

const App = () => {
  return (
    <Provider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
