import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import Button from "../Button";
import WorkTime from "../WorkTime/worktime";

export default function HeaderStyle2({ logoSrc, variant, btnText, btnUrl }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${variant} ${isSticky ? "cs_active_sticky" : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src={logoSrc} alt="Logo" />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <nav className="cs_nav">
                  <ul
                    className={`${
                      mobileToggle ? "cs_nav_list cs_active" : "cs_nav_list"
                    }`}
                  >
                    <li className="menu-item-has-children">
                      <Link to="/">Главная</Link>
                    </li>
                    {/* <li>
                      <Link to="/about">О нас</Link>
                    </li>
                    <li>
                      <Link to="/doctors">Врачи</Link>
                    </li>
                    <li>
                      <Link to="/blog">Новости</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/">Страницы</Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/appointments">Запись на прием</Link>
                          </li>
                          <li>
                            <Link to="/departments">Отделения</Link>
                          </li>
                          <li>
                            <Link to="/departments/department-details">
                              Отделение детально
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctors">Врачи</Link>
                          </li>
                          <li>
                            <Link to="doctors/doctor-details">
                              Врачи детально
                            </Link>
                          </li>
                          <li>
                            <Link to="/pricing-plan">Прайс Лист</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Галерея</Link>
                          </li>
                          <li>
                            <Link to="/timetable">График работы</Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link to="/contact">Контакты</Link>
                    </li> */}
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs_menu_toggle cs_teggle_active"
                        : "cs_menu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </nav>
              </div>
              <div className="cs_main_header_right">
                <Button btnUrl={btnUrl} btnText={btnText} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
