
import styles from "./blur_component.module.scss";

export default function BlurComponent() {

  return (
      <div className={styles.blur}>
        <form action="#" className="row">
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Имя</label>
            <input
          type="text"
          className="cs_form_field"
          placeholder="Надежда Петровна"
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">
          Номер телефона vasdlknl
        </label>
        <input
    
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
          type="text"
          className="cs_form_field"
          placeholder="Пожелании к врачу"
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Выберите дату</label>

   
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">
          Выберите время
        </label>
        <div className="cs_with_icon_input">
          <input
            type="time"
            className="cs_form_field cs_timepicker"
            placeholder="10:00AM"
          />  
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>

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
</div>  )
}
