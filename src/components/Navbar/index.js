import React, { useRef } from "react";
import NavItem from "../NavItem";

const Navbar = () => {
  const toggleRef = useRef();
  const menuRef = useRef();

  return (
    <nav className="nav body">
      <div>
        <a href="#Home" className="nav-header">
          Ben Pauley
        </a>
      </div>

      <NavItem
        links={["Home", "About", "Projects", "Contact"]}
        toggle={menuRef}
      />

      <div id="nav-toggle" ref={toggleRef}>
        <i
          className="bx bx-menu"
          onClick={() => {
            menuRef.current.classList.toggle("show");
          }}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
