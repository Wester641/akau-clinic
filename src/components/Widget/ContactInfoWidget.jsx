import { Icon } from "@iconify/react";
import React from "react";

export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
        г. Балашиха, мкр. Железнодорожный, ул. Лесопарковая, д. 7, пом. 1
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        +7 (958) 502-05-55
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        zafarzhon10@gmail.com
      </li>
    </ul>
  );
}
