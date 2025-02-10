import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import Courses from './Courses';
import Contact from './Contact';



function App() {
  return (
    <div>
      <title>Bytesfer Solutions</title>
      <link rel="icon" href="favicon.png"></link>
    <div>
      <Header />
      <Home />
      <Categories />
      <Courses />
      <Contact />
      <footer>
        <p>&copy; 2025 Bytesfer Solution. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

export default App;
