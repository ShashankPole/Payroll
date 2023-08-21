import Home from "./Pages/home/Home"
import FooterComponent from "./footer/FooterComponent"
import {config1, config2, config3 } from "./configurations/componentConfig"

function App() {
  return (
    <>
      <Home {...config1} /> 
      <Home {...config2} /> 
      <Home {...config3} />
      
     
    </>
  );
}

export default App;
