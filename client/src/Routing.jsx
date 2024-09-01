import Contact from "./Components/Contact/Contact.jsx";
import Herbals from "./Components/Herbals/Herbals.jsx"
import Tabsd from "./Components/Herbals/Tabsd/Tabsd.jsx";
import Home from "./Components/Home/Home.jsx"
import { Element } from "react-scroll";

function Routing(){
    return(
        <div>
             <div>
          <Element name="Home">
            <Home />
          </Element>

          <Element name="Herbals">
            <Herbals/>
          </Element>
          
          <Element name="Contact">
            <Contact/>
          </Element>
          
       
        </div>
        </div>
    )
}

export default Routing