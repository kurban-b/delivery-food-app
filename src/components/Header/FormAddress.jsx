import React from "react";
import { useSelector } from "react-redux";
import { deliverySelector } from "../../redux/selectors/application";

function FormAddress() {
  const delivery = useSelector(deliverySelector);

  if (!delivery) {
    return (
      <div className={"form-address"}>
        <h2 className={"title"}>Наш адрес</h2>
        <div className={"address"}>
          <div className={"address-subtitle"}>
            г. Москва, ул.Крутая, дом № 777
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={"form-address"}>
      <h2 className={"title"}>Доставка г. Москва</h2>
      <div className={"address"}>
        <div className={"address-street"}>
          <div className={"address-subtitle"}>Улица</div>
          <div>
            <input type="text" placeholder={"Введите название улицы"} />
          </div>
        </div>
        <div className={"address-house"}>
          <div className={"address-subtitle"}>Дом</div>
          <div>
            <input type="text" placeholder={"Введите номер дома"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAddress;
