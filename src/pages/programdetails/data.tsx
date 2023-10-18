import product1 from "../../assets/images/program/1.jpg";
import product2 from "../../assets/images/program/2.jpg";
import product3 from "../../assets/images/program/3.jpg";
import product4 from "../../assets/images/program/4.jpg";
import product5 from "../../assets/images/program/5.jpg";
import product6 from "../../assets/images/program/6.jpg";
import product7 from "../../assets/images/program/7.jpg";
import product8 from "../../assets/images/program/8.jpg";
import product9 from "../../assets/images/program/9.jpg";
import product10 from "../../assets/images/program/10.jpg";
import product11 from "../../assets/images/program/11.jpg";
import product12 from "../../assets/images/program/12.jpg";
import product13 from "../../assets/images/program/13.jpg";
import product14 from "../../assets/images/program/14.jpg";

export interface ProgramdetailsItemTypes {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  quantity: number;
  status: boolean;
  category: string;
  week:number;
  level:number;
  practitioners:number;
}

const programdetails = [
  {
    id: 1,
    name: "Fitness Classes",
    image: product1,
    rating: 3,
    price: 39,
    quantity: 98,
    status: true,
    category: "Physical",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 2,
    name: "Sports Leagues and Tournaments",
    image: product2,
    rating: 2,
    price: 98,
    quantity: 23,
    status: true,
    category: "Physical",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 3,
    name: "Outdoor Adventure Activities",
    image: product3,
    rating: 5,
    price: 49,
    quantity: 235,
    status: true,
    category: "Social",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 4,
    name: "Flexibility and Mobility",
    image: product4,
    rating: 3,
    price: 29,
    quantity: 385,
    status: false,
    category: "Social",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 5,
    name: "Meditation and Mindfulness",
    image: product5,
    rating: 4,
    price: 49,
    quantity: 25,
    status: false,
    category: "Emotional",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 6,
    name: "Build Resilience",
    image: product6,
    rating: 5,
    price: 19,
    quantity: 19,
    status: true,
    category: "Emotional",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 7,
    name: "Rearrange & feel good",
    image: product7,
    rating: 5,
    price: 99,
    quantity: 36,
    status: false,
    category: "Spiritual",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 8,
    name: "Service Trips & Volunteer Opportunities",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
    category: "Spiritual",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 9,
    name: "Declutters your mind",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
    category: "Intellectual",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 10,
    name: "Bhramari Pranayama",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
    category: "Intellectual",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 11,
    name: "Neck Roll",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
    category: "Occupational",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 12,
    name: "Seated Forward Bend",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
    category: "Occupational",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 13,
    name: "Meditation and Mindfulness",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
    category: "Environmental",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 14,
    name: "Service Trips & Volunteer Opportunities",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
    category: "Environmental",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 15,
    name: "Meditation and Mindfulness",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
    category: "Financial",
    week: 2,
    level: 4,
    practitioners:2,
  },
  {
    id: 16,
    name: "Service Trips & Volunteer Opportunities",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
    category: "Financial",
    week: 2,
    level: 4,
    practitioners:2,
  },

];


export { programdetails };
