import { Link } from "react-router-dom";
import "./CallToActionSection.css";

export default function CallToActionSection() {
  return (
    <>
      <Link to="tel:+79585020555" className="call_to_action_section">
        <img src="/images/call.svg" alt="Call" />
      </Link>
    </>
  );
}
