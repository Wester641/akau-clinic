import React from "react";
import IconBoxStyle11 from "../../IconBox/IconBoxStyle11";
import Spacing from "../../Spacing";

export default function ContactInfoSection({ sectionTitle }) {
  return (
    <div className="container">
      <h2 className="cs_fs_72 mb-0">{sectionTitle}</h2>
      <Spacing md="70" lg="50" />
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Телефон"
            subTitle="+7 999 123 45 67"
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        {/* <div className="col-xl-4">
          <IconBoxStyle11
            title="Почта"
            subTitle="hellocallcenter@gmail.com"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div> */}
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Местоположение"
            subTitle="Москва, ул. Мира 1"
            iconSrc="/images/contact/icon_3.svg"
          />
        </div>
      </div>
      <Spacing md="35" />
      {/* Start Yandex Map */}
      <div className="cs_map">
        <div
          style={{ position: "relative", overflow: "hidden", height: "500px" }}
        >
          <a
            href="https://yandex.com/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Москва
          </a>
          <a
            href="https://yandex.com/maps/21621/reutov/house/yuzhnaya_ulitsa_15/Z04YfgFjSk0AQFtvfXt1d3VkZw==/?indoorLevel=1&ll=37.863512%2C55.746675&utm_medium=mapframe&utm_source=maps&z=18.45"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Южная улица, 15 — Яндекс Карты
          </a>
          <iframe
            id="map"
            title="Yandex Map"
            src="https://yandex.com/map-widget/v1/?indoorLevel=1&ll=37.863512%2C55.746675&mode=whatshere&whatshere%5Bpoint%5D=37.863409%2C55.747166&whatshere%5Bzoom%5D=17&z=18.45"
            width="560"
            height="600"
            // frameborder="1"
            allowFullScreen
            style={{ position: "relative" }}
          />
        </div>
      </div>
      {/* End Yandex Map */}
    </div>
  );
}
