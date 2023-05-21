import tour1Img from './images/tour-1.jpeg';
import tour2Img from './images/tour-2.jpeg';
import tour3Img from './images/tour-3.jpeg';
import tour4Img from './images/tour-4.jpeg';
import { AiFillHome, AiFillInfoCircle, AiFillQuestionCircle } from 'react-icons/ai'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
    icon: <AiFillHome />
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
    icon: <AiFillInfoCircle />
  },
  {
    id: 3,
    href: '#services',
    text: 'FAQs',
    icon: <AiFillQuestionCircle />
  },
  // {
  //   id: 4,
  //   href: '#tours',
  //   text: 'tours',
  // },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    name: 'facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    name: 'twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    name: 'instagram',
  },
];

export const services = [
  {
    id: 1,
    title: 'saving money',
    blurb:
      'Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.',
    icon: 'wallet',
  },
  // {
  //   id: 2,
  //   title: 'endless hiking',
  //   blurb:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  //   icon: 'tree',
  // },
  // {
  //   id: 3,
  //   title: 'amazing comfort',
  //   blurb:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  //   icon: 'socks',
  // },
];

export const tours = [
  {
    id: 1,
    date: 'august 26th, 2020',
    title: 'tibet adventure',
    image: tour1Img,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    date: 'october 1st, 2020',
    title: 'best of java',
    image: tour2Img,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    image: tour3Img,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'hong kong',
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    image: tour4Img,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'kenya',
    duration: 20,
    price: 3300,
  },
];

export const faqs = [
  {
    id: 1,
    q: 'Do I have to allow the use of cookies?',
    a: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
  },
  {
    id: 2,
    q: 'How do I change my My Page password?',
    a: 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
  },
  {
    id: 3,
    q: 'What is BankID?',
    a: 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
  },
  {
    id: 4,
    q: 'Whose birth number can I use?',
    a: 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
  },
  {
    id: 5,
    q: 'When do I recieve a password ordered by letter?',
    a: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
  },
];

