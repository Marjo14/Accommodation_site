import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import DetailsHotel from './pages/DetailsHotel';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/Hotels" element={<Hotels  />} />
           <Route path="/Hotels/:id" element={<DetailsHotel/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
