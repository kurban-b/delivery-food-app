import React from "react";
import menu_icon from "../../assets/BurgerMenu.png";
import Basket from "./Basket";

function HeaderTop() {
  return (
    <div className={"header-top"}>
      <div className={"header-top-rectangles"}>
        <div className="rectangle" />
        <div className="rectangle" />
        <div className="rectangle" />
      </div>
      <div className={"header-top-menu"}>
        <div className={"left"}>
          <button>
            <img src={menu_icon} alt="menu" />
          </button>
        </div>
        <div className={"right"}>
          <Basket />
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
