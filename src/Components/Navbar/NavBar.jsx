import "./NavBar.css";
import logo from "../../assests/Chef Claude Icon (1).png";

function NavBar() {
  return (
    <nav>
      <img src={logo} alt="logo-icon" />
      <h1>Chef Danny Claude</h1>
    </nav>
  );
}

export default NavBar;
