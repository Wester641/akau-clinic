import React from "react";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import SocialWidget from "../Widget/SocialWidget";
// import Newsletter from "../Widget/Newsletter";
import TextWidget from "../Widget/TextWidget";
const menuDataOne = [
  { title: "О нас", href: "/" },
  { title: "Отделения", href: "/" },
  { title: "Врачи", href: "/" },
  { title: "Расписание", href: "/" },
  { title: "Запись на приём", href: "/" },
  { title: "Отзывы", href: "/" },
];
const menuDataTwo = [
  { title: "Блог", href: "/" },
  { title: "Контакты", href: "/" },
  { title: "Часто задаваемые вопросы", href: "/" },
  { title: "Политика конфиденциальности", href: "/policy" },
  // { title: "Условия использования", href: "/" },
];

export default function Footer() {
  return (
    <footer className="cs_footer cs_style_1 cs_heading_color">
      <div
        className="cs_footer_logo_wrap"
        style={{ backgroundImage: "url(/images/footer_bg_1.svg)" }}
      >
        <div
          className="cs_footer_brand"
          style={{ backgroundImage: "url(/images/footer_logo_bg.svg)" }}
        >
          <img
            src="/images/logo_icon.svg"
            alt="Logo Icon"
            className="cs_footer_brand_icon"
          />
          <h2 className="cs_footer_brand_text">АкАю</h2>
        </div>
      </div>
      <div className="cs_footer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <TextWidget text="АкАю Многопрофильная <br />Медицинская клиника" />
                <ContactInfoWidget />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="cs_footer_item">
                <Newsletter
                  title="Be Our Subscribers"
                  subTitle="To get the latest news about health from our experts"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              © 2025 АкАю Клиника. Все права защищены.{" "}
              <a
                href="https://t.me/zakharhhh"
                target="_blank"
                rel="noopener noreferrer"
              >
                IncTech Solutions Ltd. Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
