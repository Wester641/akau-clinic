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
            subTitle="+7 (958) 502-05-55"
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
            subTitle="г. Балашиха, мкр. Железнодорожный, ул. Лесопарковая, д. 7, пом. 1"
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
          <iframe
            src="https://yandex.com/map-widget/v1/-/CHwIbR6X"
            width="100%"
            height="400"
            frameborder="0"
            allowfullscreen="true"
          />
        </div>
      </div>
      {/* End Yandex Map */}
    </div>
  );
}
