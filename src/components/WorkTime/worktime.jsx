import React from "react";

import "./main.css";

export default function WorkTime() {
  return (
    <div className="container">
      <div className="cs_work_time">
        <div className="cs_work_time_left">
          <div className="cs_work_time_title">
            Режим работы: пн-пт: с 8:00 до 18:00 сб: с 9:00 до 14:00
          </div>
        </div>
        <ul className="cs_work_time_right">
          <li>+996 999 000-003</li>
        </ul>
      </div>
    </div>
  );
}
