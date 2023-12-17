import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./index.css";

//test
function App() {
  return (
    <div>
      <section className="bg-color">
        <Navbar />
        <Home />
        <Footer />
      </section>
    </div>
  );
}

export default App;
