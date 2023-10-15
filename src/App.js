import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import Experience from './sections/experience';

import Skills from './sections/skills';
import Projects from './sections/project';
import Footer from './sections/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
