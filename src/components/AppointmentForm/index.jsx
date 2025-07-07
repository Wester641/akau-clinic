// import { Icon } from "@iconify/react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import styles from "./blur_component.module.scss";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("https://akau-clinic-1.onrender.com/send", data);
    reset();
  };
  return (
    <div className={styles.blur}>
      <form action="#" className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Имя</label>
          <input
            {...register("name", {
              required: "This field is required",
            })}
            type="text"
            className="cs_form_field"
            placeholder="Надежда Петровна"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">
            Номер телефона
          </label>
          <input
            {...register("phone", {
              required: "This field is required",
            })}
            type="text"
            className="cs_form_field"
            placeholder="+7 (123) 456 - 789"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">
            Что-то интересное
          </label>
          <input
            {...register("message")}
            type="text"
            className="cs_form_field"
            placeholder="Пожелании к врачу"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">
            Выберите дату
          </label>
          <Controller
            control={control}
            name="date_day"
            // rules={{ required: "Дата обязательна" }}
            render={({ field }) => (
              <div className="cs_with_icon_input">
                <DatePicker
                  placeholderText="дд/мм/гггг"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  isClearable
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                />
                {/* <i>
                <Icon icon="fa6-solid:calendar-days" />
              </i> */}
              </div>
            )}
          />
          {/* <div className="cs_with_icon_input">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            placeholderText="dd/mm/yyyy"
          /> */}
          {/* <i>
            <Icon icon="fa6-solid:calendar-days" />
          </i> */}
          {/* </div> */}
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">
            Выберите время
          </label>
          <div className="cs_with_icon_input">
            <input
              {...register("date_time")}
              type="time"
              className="cs_form_field cs_timepicker"
              placeholder="10:00AM"
            />
            {/* <i>
            <Icon icon="fa6-regular:clock" />
          </i> */}
          </div>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        {/* <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">
          Reason for Visit
        </label>
        <div className="cs_radio_group">
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="reasonForVisit"
              id="routineCheckup"
              defaultValue="routineCheckup"
            />
            <label className="cs_radio_label" htmlFor="routineCheckup">
              Routine Checkup
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="reasonForVisit"
              id="newPatientVisit"
              defaultValue="newPatientVisit"
              defaultChecked=""
            />
            <label className="cs_radio_label" htmlFor="newPatientVisit">
              New Patient Visit
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="reasonForVisit"
              id="specificConcern"
              defaultValue="specificConcern"
            />
            <label className="cs_radio_label" htmlFor="specificConcern">
              Specific Concern
            </label>
          </div>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">Department</label>
        <div className="cs_radio_group">
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="pediatric"
              defaultValue="pediatric"
            />
            <label className="cs_radio_label" htmlFor="pediatric">
              Pediatric
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="obstetricsGynecology"
              defaultValue="obstetricsGynecology"
              defaultChecked=""
            />
            <label className="cs_radio_label" htmlFor="obstetricsGynecology">
              Obstetrics and Gynecology
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="cardiology"
              defaultValue="cardiology"
            />
            <label className="cs_radio_label" htmlFor="cardiology">
              Cardiology
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="neurology"
              defaultValue="neurology"
            />
            <label className="cs_radio_label" htmlFor="neurology">
              Neurology
            </label>
          </div>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div> */}
        <div className="col-lg-12">
          <button type="submit" className="cs_btn cs_style_1">
            <span>Отправить</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
      </form>
      <div className={styles.contactsButton}>
        <div>
          <span>
            Форма онлайн-записи находится в разработке и скоро будет доступна. А
            пока вы можете быстро связаться с нами через:
          </span>
        </div>
        <a target="_blank" rel="noreferrer" href="https://wa.me/79969717187">
          <span>WhatsApp</span>
          <i>
            <FaWhatsapp />
          </i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://t.me/zakharhhh2">
          <span>Telegram</span>
          <i>
            <FaTelegram />
          </i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/dr.muhamadaliev_01/"
        >
          <span>Instagram</span>
          <i>
            <FaInstagram />
          </i>
        </a>
        <a href="tel:+79969717187">
          <span>По номеру</span>
          <i>
            <FaPhone />
          </i>
        </a>
      </div>
    </div>
  );
}
