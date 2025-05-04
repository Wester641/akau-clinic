import React from "react";

import "./main.css";

export default function WorkTime() {
  return (
    <div className="cs_work_time">
      <div className="cs_work_time_left">
        <h4 className="cs_work_time_title">Working Hours</h4>
      </div>
      <div className="cs_work_time_right">
        <p>Monday - Friday</p>
        <p>8:00 AM - 5:00 PM</p>
      </div>
    </div>
  );
}
