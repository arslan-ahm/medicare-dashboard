import Image from "next/image";
import { IMAGES } from "./imgs";

export const HEROSECTION_LIST = [
  {
    title: "Patients",
    link: "/product-3",
    thumbnail: IMAGES.DASHBOARD_PATIENTS,
  },
  {
    title: "Settings",
    link: "/product-5",
    thumbnail: IMAGES.DASHBOARD_SETTINGS,
  },
  {
    title: "Home",
    link: "/product-1",
    thumbnail: IMAGES.DASHBOARD_HOME,
  },
  {
    title: "Notifications",
    link: "/product-2",
    thumbnail: IMAGES.DASHBOARD_NOTIFICATIONS,
  },
  {
    title: "Schedule",
    link: "/product-4",
    thumbnail: IMAGES.DASHBOARD_SCHEDULE,
  },
  {
    title: "Notifications",
    link: "/product-2",
    thumbnail: IMAGES.DASHBOARD_NOTIFICATIONS,
  },
  {
    title: "Schedule",
    link: "/product-4",
    thumbnail: IMAGES.DASHBOARD_SCHEDULE,
  },
  {
    title: "Patients",
    link: "/product-3",
    thumbnail: IMAGES.DASHBOARD_PATIENTS,
  },
  {
    title: "Settings",
    link: "/product-5",
    thumbnail: IMAGES.DASHBOARD_SETTINGS,
  },
  {
    title: "Home",
    link: "/product-1",
    thumbnail: IMAGES.DASHBOARD_HOME,
  },
];

export const SERVICES_CRASOULE_CONTENT = [
  {
    title: "Patient Records",
    desc: "Easily access and manage patient records securely, ensuring data privacy and quick retrieval for better healthcare decisions.",
    src: IMAGES.MEDICARE_1,
  },
  {
    title: "Appointments",
    desc: "Schedule and track appointments effortlessly, with automated reminders and seamless integration into your workflow.",
    src: IMAGES.MEDICARE_2,
  },
  {
    title: "Medical History",
    desc: "Review comprehensive medical history at a glance, enabling informed diagnoses and personalized treatment plans.",
    src: IMAGES.MEDICARE_3,
  },
  {
    title: "Prescriptions",
    desc: "Organize and manage prescriptions with ease, reducing errors and improving medication adherence for patients.",
    src: IMAGES.MEDICARE_4,
  },
];
export const CUSTOMERS_TESTIMONIALS = [
  {
    quote:
      "The care and attention provided by the staff have been exceptional. This platform has made managing my health so much easier.",
    name: "Linda Johnson",
    designation: "Patient",
    src: IMAGES.USER_2,
  },
  {
    quote:
      "As a healthcare provider, this system has streamlined our operations and improved patient satisfaction significantly.",
    name: "Dr. Robert Smith",
    designation: "General Practitioner",
    src: IMAGES.USER_1,
  },
  {
    quote:
      "The intuitive design and robust features have made a real difference in how I manage my medical records.",
    name: "Karen Williams",
    designation: "Healthcare Administrator",
    src: IMAGES.USER_3,
  },
  {
    quote:
      "This platform has truly revolutionized the way we deliver care. The support team is always there to help.",
    name: "Dr. Emily Davis",
    designation: "Specialist at CityCare Hospital",
    src: IMAGES.USER_4,
  },
];

export const SPECIALITY_GRID = [
  {
    containerClassName:
      "col-span-1 lg:col-span-2 h-full bg-primary min-h-[500px] lg:min-h-[300px]",
    title: "Empower Your Practice with Medicare Dashboard",
    desc: "Streamline patient management, appointment scheduling, and data insights with our intuitive platform designed for healthcare professionals.",
    img: true,
    imgSrc: IMAGES.DASHBOARD_PATIENTS,
    imgAlt: "Patient management demo image",
  },
  {
    containerClassName: "col-span-1 bg-blue min-h-[300px]",
    title: "Simplify Appointment Scheduling",
    desc: "Enable seamless scheduling for your patients and manage your calendar effortlessly with our advanced tools.",
  },
  {
    containerClassName:
      "col-span-1 bg-primary lg:col-span-3 bg-blue min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]",
    title: "Gain Insights with Interactive Dashboards",
    desc: "Monitor key metrics, track patient data, and make informed decisions with real-time analytics tailored for your practice.",
    img: true,
    imgSrc: IMAGES.DASHBOARD_SCHEDULE,
    imgAlt: "Dashboard insights demo image",
  },
];

export const SIDE_FIX_SCROLL_CONTENT = [
  {
    title: "Patient Management",
    description:
      "Easily manage patient records, medical history, and treatment plans. Our platform ensures that all patient information is organized and accessible, helping you provide better care.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] text-white">
        Patient Management
      </div>
    ),
  },
  {
    title: "Appointment Scheduling",
    description:
      "Streamline appointment scheduling with an intuitive interface. Allow patients to book appointments online and manage your schedule efficiently.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={IMAGES.DASHBOARD_HOME}
          width={250}
          height={300}
          className="h-full w-full object-cover"
          alt="Appointment scheduling demo"
        />
      </div>
    ),
  },
  {
    title: "Interactive Dashboards",
    description:
      "Get real-time insights into your practice with interactive dashboards. Track appointments, patient statistics, and other key metrics to make informed decisions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        Interactive Dashboards
      </div>
    ),
  },
];

export const CONTACT_US_PLACEHOLDERS = [
  "What is your primary healthcare concern?",
  "How can we assist you with Medicare plans?",
  "Looking for a doctor? Let us know your preferences.",
  "Need help scheduling an appointment?",
  "Have questions about managing patient records?",
];

export const OUR_SUPPORTS = [
  {
    title: "Appointment Scheduling",
    description:
      "A feature that allows doctors to manage and schedule patient appointments efficiently.",
    link: "/features/appointment-scheduling",
  },
  {
    title: "Patient Records Management",
    description:
      "A system to securely store and manage patient medical records and history.",
    link: "/features/patient-records-management",
  },
  {
    title: "Billing and Invoicing",
    description:
      "A tool to streamline billing processes and generate invoices for patients.",
    link: "/features/billing-invoicing",
  },
  {
    title: "Telemedicine",
    description:
      "A feature enabling doctors to consult with patients remotely through video calls.",
    link: "/features/telemedicine",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A dashboard providing insights into patient data, appointments, and other key metrics.",
    link: "/features/analytics-dashboard",
  },
  {
    title: "Prescription Management",
    description:
      "A system to create, manage, and share prescriptions with patients digitally.",
    link: "/features/prescription-management",
  },
];