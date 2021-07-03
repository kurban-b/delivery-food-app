import React from "react";
import { Link } from "react-scroll";

function NavItem({ category }) {
  return (
    <li className={"navbar-item"}>
      <Link
        to={`section${category.id}`}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        {category.name}
      </Link>
    </li>
  );
}

export default NavItem;
