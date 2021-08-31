import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Certificate from "./components/certificate/Certificate";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react"
import Menu from "./components/menu/Menu";
// import { Menu, MenuList } from "@material-ui/core";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className = "app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Certificate/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
