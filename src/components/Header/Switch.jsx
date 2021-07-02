import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverySelector } from "../../redux/selectors/application";
import { changeStateDelivery } from "../../redux/actions/application";

function Switch() {
  const dispatch = useDispatch();

  const delivery = useSelector(deliverySelector);

  const handleChange = () => {
    dispatch(changeStateDelivery());
  };

  return (
    <div className={"switch"}>
      <input
        id="toggle-on"
        className="toggle toggle-left"
        name="toggle"
        value="false"
        type="checkbox"
        checked={delivery}
        onChange={handleChange}
      />
      <label htmlFor="toggle-on" className="buttons">
        <div className={delivery ? "active" : "deactivate"}>Доставка</div>
        <div className={delivery ? "deactivate" : "active"}>Самовывоз</div>
      </label>
    </div>
  );
}

export default Switch;
