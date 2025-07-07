import React from "react";
import HeroStyle2 from "../Hero/HeroStyle2";
import Section from "../Section";
import TestimonialSectionStyle2 from "../Section/TestimonialSection/TestimonialSectionStyle2";
import AppointmentSectionStyle2 from "../Section/AppointmentSection/AppointmentSectionStyle2";
import BrandsSectionStyle2 from "../Section/BrandsSection/BrandsSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
// import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
// import TeamSection from "../Section/TeamSection";
import GallerySection from "../Section/GallerySection";
// import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import ContactInfoSection from "../Section/ContactInfoSection";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";

const testimonialData = [
  {
    text: "Записалась к гинекологу, приём прошёл деликатно и без лишней спешки. Осталась довольна.",
    ratingNumber: "5",
    avatarImgUrl: "/images/icon.jpg",
    avatarName: "Мария",
    avatarDesignation: "Балашиха, Москва",
  },
  {
    text: "Обратился к урологу — всё по делу, врач без лишних слов объяснил, что делать.",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/icon.jpg",
    avatarName: "Сергей",
    avatarDesignation: "Химки, Москва",
  },
  {
    text: "На приёме у терапевта всё чётко: осмотр, рекомендации и рецепт. Спасибо!",
    ratingNumber: "5",
    avatarImgUrl: "/images/icon.jpg",
    avatarName: "Ольга",
    avatarDesignation: "Москва",
  },
  {
    text: "После обследования у кардиолога стало спокойнее — всё объяснили понятно.",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/icon.jpg",
    avatarName: "Юрий",
    avatarDesignation: "Королёв, Москва",
  },
];

const brandData = [
  {
    imgUrl: "/images/brand_1.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_2.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_3.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_4.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_5.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_6.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_7.png",
    imgAlt: "Brand",
  },
];

const funFactData = [
  { number: "7+", title: "лет опыта " },
  { number: "90%", title: " довольных пациентов" },
  { number: "1000+", title: "пациентов в год" },
  { number: "6+", title: "специалистов в команде" },
  { number: "100%", title: "современное оборудование" },
];

const galleryData = [
  { imgUrl: "/images/about/portfolio_2_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_3_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_1_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_4_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_5_lg.jpeg" },
];

const departmentData2 = [
  {
    title: "🦷 Стоматология",
    subTitle:
      "Диагностика и лечение зубов, дёсен и полости рта. Эстетическая и терапевтическая стоматология.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/",
  },
  {
    title: "🩺 Терапевт",
    subTitle:
      "Общая диагностика и лечение широкого спектра заболеваний. Первичная медицинская помощь.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/",
  },
  {
    title: "❤️ Кардиолог",
    subTitle:
      "Профилактика, диагностика и лечение заболеваний сердца и сосудов.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/",
  },
  {
    title: "🧔 Урология",
    subTitle: "Диагностика и лечение мочеполовой системы у мужчин и женщин.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/",
  },
  {
    title: "👩‍⚕️ Гинекология",
    subTitle:
      "Женское здоровье, включая диагностику, лечение гинекологических заболеваний.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/",
  },
];

export default function HomeStyle2() {
  pageTitle("Главная Страница");
  return (
    <>
      <HeroStyle2
        title="Многопрофильный медицинский центр в Москве"
        subTitle="Широкий спектр медицинских услуг"
        bgUrl="/images/home_2/hero_bg.jpeg"
        imgUrl="/images/home_2/patents.png"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        btnText="Ak Аю - Клиник"
        btnUrl="/"
      />
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={100}
        bottomLg={110}
      >
        <DepartmentSectionStyle2
          sectionTitle="Мы предоставляем лучшие медицинские услуги"
          sectionTitleUp="УСЛУГИ"
          data={departmentData2}
        />
      </Section>
      {/* <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl="images/about/why_choose_us.jpeg"
          data={featureListData}
        />
      </Section> */}
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
      {/* <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TeamSection
          sectionTitle="специалисты"
          sectionTitleUp="Наши"
          data={teamData}
        />
      </Section> */}

      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: `url(/images/home_2/testimonial_bg.svg)` }}
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle2
          sectionTitle="Мнение пациентов <br /> о нас"
          sectionTitleUp="ОТЗЫВЫ"
          data={testimonialData}
        />
      </Section>
      <Section
        topMd={170}
        topLg={120}
        topXl={80}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <GallerySection
          sectionTitleUp="ОЗНАКОМЬТЕСЬ С"
          sectionTitle="Нашей клиникой и последними событиями"
          data={galleryData}
        />
      </Section>
      <Section>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/appointment_img.png"
          sectionTitleUp="ОНЛАЙН-ЗАПИСЬ"
          sectionTitle="К врачу"
        />
      </Section>
      <Section
        topMd={200}
        topLg={150}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={0}
      >
        <ContactInfoSection sectionTitle="Наш адрес" />
      </Section>
      <Section
        topMd={200}
        topLg={150}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSectionStyle2 data={brandData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/home_2/hero_bg2.jpeg"
          title="Не позволяйте своему здоровью<br />оставаться на втором плане!"
          subTitle="Запишитесь на прием к одному из наших опытных<br />медиков уже сегодня!"
        />
      </Section>
    </>
  );
}
