import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
