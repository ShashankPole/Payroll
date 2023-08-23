import Home from "./Pages/home/Home"
import FooterComponent from "./footer/FooterComponent"
import {config1, config2, config3 } from "./configurations/componentConfig"

const homeConfig = [config1, config2, config3];

function App() {
  return (
    <>
    {homeConfig.map((config, index) => (
      <Home key={index} {...config}/>
    ))}
      <FooterComponent />
     
    </>
  );
}

export default App;
