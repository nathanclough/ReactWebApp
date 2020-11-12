import { pushRotate as Menu } from 'react-burger-menu'
import '../Styles/Burgerbar.css'



function Burgerbar (props) {
    return (
      <Menu >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }

export default Burgerbar;