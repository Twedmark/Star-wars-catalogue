import { NavLink } from "react-router-dom";
import { NavbarContainer } from "./styles";

function Navbar() {
  return (
    <NavbarContainer>
      <NavLink
        to={`/`}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid #FADE4B" : "",
        })}
      >
        Movies
      </NavLink>
      <NavLink
        to={`/characters`}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid #FADE4B" : "",
        })}
      >
        Characters
      </NavLink>
    </NavbarContainer>
  );
}

export default Navbar;

//boxShadow 0px 0px 4px 1px #FADE4B
