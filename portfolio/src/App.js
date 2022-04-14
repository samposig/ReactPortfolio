import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
   <div>
     <Header/>
     <AboutMe/>
     <Projects/>
     <ContactForm/>
     <Footer/>
   </div>
  );
}

export default App;
