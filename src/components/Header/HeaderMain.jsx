import React from "react";
import FormAddress from "./FormAddress";
import Switch from "./Switch";

function HeaderMain(props) {
  return (
    <div className={"header-main"}>
      <div className="left">
        <FormAddress />
      </div>
      <div className="right">
        <Switch />
      </div>
    </div>
  );
}

export default HeaderMain;
