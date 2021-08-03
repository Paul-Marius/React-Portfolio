
import './App.css';

// import css from node-modules
import 'bootstrap/dist/css/bootstrap.min.css';

//import the navbar
import Navbar from "./components/Navbar";

//import the header 
import Header from "./components/Header";

//import particles
import Particles from 'react-particles-js';

function App() {
  return (
    <>
      <Particles
        className="particals-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            }, shape: {
              type: "square",
              stroke: {
                width: 6,
                color: "#111"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
