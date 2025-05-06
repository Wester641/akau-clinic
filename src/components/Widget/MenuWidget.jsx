import React from "react";
import { Link } from "react-router-dom";

export default function MenuWidget({ data }) {
  const handleLinkClick = () => {
    const bookingSection = document.getElementsByClassName(
      "cs_appointment_section_1 cs_bg_filed"
    )[0];
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="cs_menu_widget cs_mp0">
      {data?.map((item, index) => (
        <li key={index}>
          <Link to={item.href} onClick={handleLinkClick}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
