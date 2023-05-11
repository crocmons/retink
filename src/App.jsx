import './App.css';
import Feed from './components/Feed';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
