import React from "react";
import HeroStyle2 from "../Hero/HeroStyle2";
import Section from "../Section";
import AboutSectionStyle3 from "../Section/AboutSection/AboutSectionStyle3";
import DepartmentSectionStyle4 from "../Section/DepartmentSection/DepartmentSectionStyle4";
import TestimonialSectionStyle2 from "../Section/TestimonialSection/TestimonialSectionStyle2";
import WorkingProcess from "../Section/WorkingProcess";
import BannerSectionStyle2 from "../Section/BannerSection/BannerSectionStyle2";
import BlogSectionStyle3 from "../Section/BlogSection/BlogSectionStyle3";
import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";
import AppointmentSectionStyle2 from "../Section/AppointmentSection/AppointmentSectionStyle2";
import BrandsSectionStyle2 from "../Section/BrandsSection/BrandsSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import TeamSection from "../Section/TeamSection";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
const departmentData = [
  {
    title: "Отделение скорой помощи",
    iconUrl: "/images/home_2/department_icon_1.svg",
    href: "/departments/department-details",
  },
  {
    title: "Отделение педиатрии",
    iconUrl: "/images/home_2/department_icon_2.svg",
    href: "/departments/department-details",
  },
  {
    title: "Отделение гинекологии",
    iconUrl: "/images/home_2/department_icon_3.svg",
    href: "/departments/department-details",
  },
  {
    title: "Отделение кардиологии",
    iconUrl: "/images/home_2/department_icon_4.svg",
    href: "/departments/department-details",
  },
  {
    title: "Нейрохирургия",
    iconUrl: "/images/home_2/department_icon_5.svg",
    href: "/departments/department-details",
  },
  {
    title: "Психиатрия",
    iconUrl: "/images/home_2/department_icon_6.svg",
    href: "/departments/department-details",
  },
];
const testimonialData = [
  {
    text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”",
    ratingNumber: "5",
    avatarImgUrl: "/images/home_2/avatar_2.png",
    avatarName: "PAULO HUBERT",
    avatarDesignation: "New York, USA",
  },
  {
    text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/home_2/avatar_2.png",
    avatarName: "PAULO HUBERT",
    avatarDesignation: "New York, USA",
  },
  {
    text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”",
    ratingNumber: "5",
    avatarImgUrl: "/images/home_2/avatar_2.png",
    avatarName: "PAULO HUBERT",
    avatarDesignation: "New York, USA",
  },
  {
    text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/home_2/avatar_2.png",
    avatarName: "PAULO HUBERT",
    avatarDesignation: "New York, USA",
  },
];
const workingProcessData = [
  {
    title: "Book Appointment",
    subTitle:
      "You can book an appointment with us by <br />calling our office, filling out an online form, or <br />using our mobile app.",
    iconUrl: "/images/home_2/wording_process_icon_1.svg",
    number: "01",
  },
  {
    title: "Visit Our Facility",
    subTitle:
      "On the day of your appointment, come to our <br />facility at the designated time. Our staff will greet <br />you and guide you through the check-in process.",
    iconUrl: "/images/home_2/wording_process_icon_2.svg",
    number: "02",
  },
  {
    title: "Meet with Our Healthcare <br />Professionals",
    subTitle:
      "You will meet with one of our healthcare <br />professionals who will conduct a thorough <br />examination and provide a diagnosis or <br />treatment plan.",
    iconUrl: "/images/home_2/wording_process_icon_3.svg",
    number: "03",
  },
  {
    title: "Follow-up Care",
    subTitle:
      "We will schedule any necessary follow-up <br />appointments, tests, or procedures to ensure <br />that you receive the best possible care.",
    iconUrl: "/images/home_2/wording_process_icon_4.svg",
    number: "04",
  },
  {
    title: "Insurance and Billing",
    subTitle:
      "We accept most major insurance plans and <br />our billing department will work with you to <br />ensure that you understand your coverage <br />and any out-of-pocket expenses.",
    iconUrl: "/images/home_2/wording_process_icon_5.svg",
    number: "05",
  },
];
const blogData = [
  {
    title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
    thumbUrl: "images/home_2/post_1.jpeg",
    date: "May 1, 2023",
  },
  {
    title: "Healthy Eating on a Budget: Tips and Strategies",
    thumbUrl: "images/home_2/post_2.jpeg",
    date: "May 4, 2023",
  },
  {
    title: "The Importance of Regular Cancer Screenings and Early Detection",
    thumbUrl: "images/home_2/post_3.jpeg",
    date: "May 1, 2023",
  },
];
const faqData = [
  {
    title: "What services does ProHealth offer?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How do I schedule an appointment with ProHealth?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "Do you accept insurance?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "What should I bring to my appointment?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How do I request a prescription refill?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
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
const featureListData = [
  {
    title: "Experienced Medical Professionals",
    subTitle:
      "Our team includes experienced doctors, nurses, <br />and other healthcare professionals who are <br />dedicated to providing the best possible care to <br />our patients.",
    iconUrl: "images/icons/professional.svg",
  },
  {
    title: "Comprehensive <br />Services",
    subTitle:
      "We offer a wide range of healthcare services, <br />from preventive care to specialized treatment <br />for complex conditions.",
    iconUrl: "images/icons/comprehensive.svg",
  },
  {
    title: "Patient-centered <br />Approach",
    subTitle:
      "We believe in treating each patient as an <br />individual, and we take the time to understand <br />your unique health needs and concerns.",
    iconUrl: "images/icons/patient.svg",
  },
  {
    title: "State-of-the-art <br />Facilities",
    subTitle:
      "Our healthcare center is equipped with the <br />latest technology and equipment to provide our <br />patients with the most advanced care possible.",
    iconUrl: "images/icons/facilities.svg",
  },
];

const funFactData = [
  { number: "20+", title: "Years of experience" },
  { number: "95%", title: "Patient satisfaction rating" },
  { number: "5000+", title: "Patients served annually" },
  { number: "10+", title: "Healthcare providers on staff" },
  { number: "22+", title: "Convenient locations in the area" },
];

const teamData = [
  {
    imgUrl: "images/about/doctor_1.png",
    name: "Dr. James Lee, MD",
    designation: "Head of Cardiologist",
    description:
      "With expertise in managing complex heart conditions and performing advanced cardiac procedures",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "images/about/doctor_2.png",
    name: "Dr. John Smith, MD",
    designation: "Emergency Medicine Physician",
    description:
      "With expertise in treating acute illnesses and injuries in medicine physician",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "images/about/doctor_3.png",
    name: "Dr. Susan Bones, MD",
    designation: "Board-certified Pediatrician",
    description:
      "With experience in managing complex medical conditions in children",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
];

const galleryData = [
  { imgUrl: "/images/about/portfolio_2_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_3_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_1_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_4_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_5_lg.jpeg" },
];
const awardData = [
  {
    iconUrl: "/images/icons/award.svg",
    title: "Malcolm Baldrige National Quality Award",
  },
  { iconUrl: "/images/icons/award.svg", title: "HIMSS Davies Award" },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Healthgrades National’s Best Hospital",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Joint Commission Gold Seal of Approval",
  },
];
const departmentData2 = [
  {
    title: "Diagnostic testing",
    subTitle:
      "Blood tests, imaging studies, and other tests to diagnose health conditions",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Rehabilitation services",
    subTitle:
      "Physical therapy, occupational therapy, and other services to help patients recover from injuries",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Preventive care",
    subTitle:
      "Annual checkups, immunizations, and health screenings care preventive",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Treatment for acute and chronic conditions",
    subTitle:
      "Medication management, disease management, and other treatments to improve health outcomes",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Mental health services",
    subTitle:
      "Counseling, therapy, and other services to help patients manage mental health conditions",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
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
        funfactList={[
          { number: "7+", title: "лет опыта" },
          { number: "90%", title: "уровень удовлетворённости пациентов" },
          { number: "1000+", title: "пациентов в год" },
          { number: "6+", title: "специалистов в команде" },
        ]}
      />
      
         
            <Section topMd={200} topLg={150} topXl={110}>
              <DepartmentSectionStyle2
                sectionTitle="Provides Our Best Services"
                sectionTitleUp="SERVICES"
                data={departmentData2}
              />
            </Section>
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
              <FeaturesSectionStyle2
                sectionTitle="Why Choose Us"
                imgUrl="images/about/why_choose_us.jpeg"
                data={featureListData}
              />
            </Section>
            <Section>
              <FunFactSection
                bgUrl="images/about/fun_fact_bg.jpeg"
                data={funFactData}
              />
            </Section>
            <Section topMd={190} topLg={145} topXl={105}>
              <TeamSection
                sectionTitle="Experts Doctor"
                sectionTitleUp="MEET OUR"
                data={teamData}
              />
            </Section>
            <Section topMd={170} topLg={120} topXl={80}>
              <GallerySection
                sectionTitle="Our Facilities and <br />Latest Activities"
                sectionTitleUp="HAVE A LOOK AT"
                data={galleryData}
              />
            </Section>
            <Section
              topMd={190}
              topLg={145}
              topXl={105}
              bottomMd={200}
              bottomLg={150}
              bottomXl={110}
            >
              <AwardSectionStyle2
                sectionTitle="Winning Awards and <br />Recognition"
                sectionTitleUp="AWARDS"
                sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
                data={awardData}
              />
            </Section>
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
          sectionTitle="What Our Patients Say <br /> About Us"
          sectionTitleUp="TESTIMONIALS"
          data={testimonialData}
        />
      </Section>
      <Section>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/appointment_img.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
        />
      </Section>
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSectionStyle2 data={brandData} />
      </Section>
    </>
  );
}
