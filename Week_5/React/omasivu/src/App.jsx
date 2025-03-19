import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import "./styles/global.css";
import Contact from "./components/Contact";



function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
