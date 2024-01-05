import About from "../pages/About";
import Class from "../pages/Class";
import Contact from "../pages/Contact";
import Homesec from "../pages/Homepage";
import Service from "../pages/Service";
import Team from "../pages/Team";

function Home(){
    return(
        <div>
            <Homesec/>
            <About/>
            <Service/>
            <Class/>
            <Team/>
            <Contact/>
        </div>
       
    );
}
export default Home;