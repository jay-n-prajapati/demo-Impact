import {
  BsBoundingBoxCircles,
  BsBox,
  BsBroadcast,
  BsCalendar4Week,
  BsChatSquareText,
  BsEasel,
  BsGem,
  BsRocket,
  BsSend,
} from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { IoCallOutline, IoChevronDown } from "react-icons/io5";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { PiPulse } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";


export const links = [
  { name: "Home", slug: "#home" },
  { name: "About", slug: "#about" },
  { name: "Services", slug: "#services" },
  { name: "Portfolio", slug: "#portfolio" },
  { name: "Team", slug: "#team" },
  { name: "Blog", slug: "#blogs" },
  {
    name: "Dropdown",
    dropdown: [
      { name: "Dropdown1" },
      {
        name: "Deep Dropdown",
        dropdown: [
          { name: "Sub Dropdown1" },
          { name: "Sub Dropdown2" },
          { name: "Sub Dropdown3" },
          { name: "Sub Dropdown4" },
          { name: "Sub Dropdown5" },
        ],
        position: "right-full top-5 pr-4",
        icon: <IoChevronDown className="text-xs" />,
      },
      { name: "Dropdown2" },
      { name: "Dropdown3" },
      { name: "Dropdown4" },
    ],
    position: "top-full",
    icon: <IoChevronDown className="text-xs" />,
  },
  { name: "Contact", slug: "#contact" },
];

export const heroCards = [
  {
    content: "lorem lorem",
    icon: <BsEasel className="text-4xl" />,
  },
  {
    content: "lorem lorem",
    icon: <BsGem className="text-4xl" />,
  },
  {
    content: "lorem lorem",
    icon: <SlLocationPin className="text-4xl" />,
  },
  {
    content: "lorem lorem",
    icon: <MdOutlineKeyboardCommandKey className="text-4xl" />,
  },
];
export const contactCards = [
  {
    title: "Address",
    content: "lorem lorem",
    icon: <SlLocationPin />,
  },
  {
    title: "Call Us",
    content: "+91 0000000000",
    icon: <IoCallOutline />,
  },
  {
    title: "Email Us",
    content: "info@example.com",
    icon: <TfiEmail />,
  },
  {
    title: "Open Hours:",
    content: "Mon-Sat: 11AM - 23PM",
    icon: <GoClock />,
  },
];

export const services = [
  {
    icon: <PiPulse />,
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quibusdam magnam, dolores dolor eos doloremque ducimus quidem architecto.",
  },
  {
    icon: <BsBroadcast />,
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quibusdam magnam, dolores dolor eos doloremque ducimus quidem architecto.",
  },
  {
    icon: <BsEasel />,
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quibusdam magnam, dolores dolor eos doloremque ducimus quidem architecto.",
  },
  {
    icon: <BsBoundingBoxCircles />,
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quibusdam magnam, dolores dolor eos doloremque ducimus quidem architecto.",
  },
  {
    icon: <BsCalendar4Week />,
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quibusdam magnam, dolores dolor eos doloremque ducimus quidem architecto.",
  },
  {
    icon: <BsChatSquareText />,
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quibusdam magnam, dolores dolor eos doloremque ducimus quidem architecto.",
  },
];

export const testimonials = [
  {
    name: "Saul Goodman",
    designation: "Ceo & Founder",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, dolore minus. Earum, quae saepe. Asperiores quod at ullam neque vitae.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: "/images/testimonials-1.jpg",
  },
  {
    name: "Sara Wilson",
    designation: "Designer",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, dolore minus. Earum, quae saepe. Asperiores quod at ullam neque vitae?Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: "/images/testimonials-2.jpg",
  },
  {
    name: "Jena Karlis",
    designation: "Store owner",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, dolore minus. Earum, quae saepe. Asperiores quod at ullam neque vitae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "/images/testimonials-3.jpg",
  },
  {
    name: "Mett Bredon",
    designation: "Freelancer",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, dolore minus. Earum, quae saepe. Asperiores quod at ullam neque vitae?Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: "/images/testimonials-4.jpg",
  },
  {
    name: "John Larson",
    designation: "Entrepreneur",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, dolore minus. Earum, quae saepe. Asperiores quod at ullam neque vitae?Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: "/images/testimonials-5.jpg",
  },
];
export const teamMembers = [
  {
    name: "Walter White",
    field: "Web Development",
    img: "/images/team1.jpg",
  },
  {
    name: "Sara Jhinson",
    field: "Marketing",
    img: "/images/team2.jpg",
  },
  {
    name: "William Anderson",
    field: "Content",
    img: "/images/team3.jpg",
  },
  {
    name: "Amanda Jepson",
    field: "Accountant",
    img: "/images/team4.jpg",
  },
];

export const blogs = [
  {
    blogImg: "/images/blog1.jpg",
    title: "Dolorum optio tempore voluptas dignissimos",
    category: "Politics",
    author: "Maria Doe",
    authorImg: "/images/blog-author.jpg",
    published: "Jan 1, 2022",
  },
  {
    blogImg: "/images/blog2.jpg",
    title: "Dolorum optio tempore voluptas dignissimos",
    category: "Politics",
    author: "Jane Doe",
    authorImg: "/images/blog-author2.jpg",
    published: "Jan 17, 2022",
  },
  {
    blogImg: "/images/blog3.jpg",
    title: "Dolorum optio tempore voluptas dignissimos",
    category: "Politics",
    author: "Jone Doe",
    authorImg: "/images/blog-author3.jpg",
    published: "June 10, 2022",
  },
];

export const fields = [
  {
    name: "Web Design",
    isActive: true,
  },
  {
    name: "Software Development",
  },
  {
    name: "Product Management",
  },
  {
    name: "Graphic Design",
  },
  {
    name: "Marketing",
  },
];

export const PricingItems = [
  {
    title: "Free Plan",
    icon: <BsBox />,
    price: "0",
    features: [
      {
        desc: "Quam adipiscing vitae proin",
      },
      {
        desc: "Nec feugiat nisl pretium",
      },
      {
        desc: "Nulla at volutpat diam uteera",
      },
      {
        desc: "Pharetra massa massa ultricies",
        isAvailable: false,
      },
      {
        desc: "Massa ultricies mi quis hendrerit",
        isAvailable: false,
      },
    ],
  },
  {
    title: "Business Plan",
    icon: <BsRocket />,
    price: "29",
    features: [
      {
        desc: "Quam adipiscing vitae proin",
      },
      {
        desc: "Nec feugiat nisl pretium",
      },
      {
        desc: "Nulla at volutpat diam uteera",
      },
      {
        desc: "Pharetra massa massa ultricies",
      },
      {
        desc: "Massa ultricies mi quis hendrerit",
      },
    ],
    isMiddle: true,
  },
  {
    title: "Developer Plan",
    icon: <BsSend />,
    price: "49",
    features: [
      {
        desc: "Quam adipiscing vitae proin",
      },
      {
        desc: "Nec feugiat nisl pretium",
      },
      {
        desc: "Nulla at volutpat diam uteera",
      },
      {
        desc: "Pharetra massa massa ultricies",
      },
      {
        desc: "Massa ultricies mi quis hendrerit",
      },
    ],
  },
];

export const accordionItems = [
  {
    id: 1,
    title: "Non consectetur a erat nam at lectus urna duis?",
    desc: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    id: 2,
    title:
      "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    desc: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    id: 3,
    title: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    desc: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
  },
  {
    id: 4,
    title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    desc: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    id: 5,
    title: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    desc: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
  },
];

export const UsefulLinkItems = [
  "Home",
  "About Us",
  "Services",
  "Terms of service",
  "Privacy policy",
];

export const OurServicesItems = [
  "Web Design",
  "Web Development",
  "Product Management",
  "Marketing",
  "Graphic Design",
];

export const categories = [
  {
    name: "General",
    item: 25,
  },
  {
    name: "Lifestyle",
    item: 12,
  },
  {
    name: "Travel",
    item: 5,
  },
  {
    name: "Design",
    item: 22,
  },
  {
    name: "Creative",
    item: 8,
  },
  {
    name: "Education",
    item: 14,
  },
];

export const tags = [
  "App",
  "IT",
  "Buisness",
  "Mac",
  "Design",
  "Office",
  "Creative",
  "Studio",
  "Smart",
  "Tips",
  "Marketing",
];

export const portfolioItems = [
  {
    src: "/images/app-1.jpg",
    tag: "App",
    title: "App 1",
  },
  {
    src: "/images/product-1.jpg",
    tag: "Product",
    title: "Product 1",
  },
  {
    src: "/images/branding-1.jpg",
    tag: "Branding",
    title: "Branding 1",
  },
  {
    src: "/images/books-1.jpg",
    tag: "Book",
    title: "Book 1",
  },
  {
    src: "/images/app-2.jpg",
    tag: "App",
    title: "App 2",
  },
  {
    src: "/images/product-2.jpg",
    tag: "Product",
    title: "Product 2",
  },
  {
    src: "/images/branding-2.jpg",
    tag: "Branding",
    title: "Branding 3",
  },
  {
    src: "/images/books-2.jpg",
    tag: "Book",
    title: "Book 2",
  },
  {
    src: "/images/app-3.jpg",
    tag: "App",
    title: "App 3",
  },
  {
    src: "/images/product-3.jpg",
    tag: "Product",
    title: "product 3",
  },
  {
    src: "/images/branding-3.jpg",
    tag: "Branding",
    title: "Branding 3",
  },
  {
    src: "/images/books-3.jpg",
    tag: "Book",
    title: "Book 3",
  },
];
