import React from "react";
import { Link } from "react-router-dom";
import WaterWave from "react-water-wave";

export default function HeroStyle2({
  title,
  subTitle,
  bgUrl,
  imgUrl,
  funfactList,
  btnText,
  btnUrl,
}) {
  const handleScrollToBooking = () => {
    const bookingSection = document.getElementsByClassName(
      "cs_appointment_section_1 cs_bg_filed"
    )[0];
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <WaterWave className="cs_hero cs_style_2 " imageUrl={bgUrl}>
      {() => (
        // <section
        //   className="cs_hero cs_style_2 cs_bg_filed"
        //   style={{ backgroundImage: `url(${bgUrl})` }}
        // >
        <>
          <div className="container">
            <div className="cs_hero_text">
              <h1 className="cs_hero_title cs_white_color cs_fs_84">{title}</h1>
              <div className="cs_hero_text_in">
                <div className="cs_hero_btn cs_white_color">
                  <Link to={btnUrl} className="cs_text_btn">
                    {btnText}
                  </Link>
                </div>
                <p className="cs_hero_subtitle cs_white_color">
                  {subTitle}
                  <ul>
                    <li>стоматология</li>
                    <li>хирургия </li>
                    <li>гинекология и многое другое</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* <img src={imgUrl} alt="Hero" className="cs_hero_patents" /> */}

            <div className="cs_hero_patents_custom">
              <div>150+</div>
              <div>пациентов вылечено</div>
            </div>
          </div>
          <div className="container">
            <div className="cs_hero_bottom">
              <div className="cs_hero_bottom_left">
                <div className="cs_hero_btn_wrap">
                  <button
                    onClick={handleScrollToBooking}
                    className="cs_btn cs_style_1"
                  >
                    <span>Записаться на прием к врачу</span>
                    <i>
                      <img src="/images/icons/arrow_white.svg" alt="Icon" />
                      <img src="/images/icons/arrow_white.svg" alt="Icon" />
                    </i>
                  </button>
                </div>
              </div>
              {/* <div className="cs_hero_bottom_right">
              {funfactList?.length > 0 && (
                <div className="cs_hero_funfact text-center">
                  {funfactList?.map((item, index) => (
                    <div className="cs_hero_funfact_col" key={index}>
                      <h3 className="cs_white_color cs_fs_72">{item.number}</h3>
                      <p className="cs_white_color mb-0">{item.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </div> */}
            </div>
          </div>
        </>
        // </section>
      )}
    </WaterWave>
  );
}
