import { BrowserRouter, Routers, Route, } from "react-router-dom"
import About from "./components/pages/About"
import Contact from ".pages/Contact"
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import Team from "./components/pages/Team"





export default function App() {
  return(
    <div> 
<BrowserRouter>
<Routers>
<Route index element = {<Home/>} />
<Route path="/Home" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/Services" element={<Services/>} />
<Route path="/team" element={<Team/>} />
<Route path="/contact" element={<Contact/>} />
</Routers>
</BrowserRouter>
    </div>
  );
}