import tour1Img from './images/tour-1.jpeg';
import tour2Img from './images/tour-2.jpeg';
import tour3Img from './images/tour-3.jpeg';
import tour4Img from './images/tour-4.jpeg';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineQuestionCircle,
  AiOutlineForm,
  AiOutlineMail,
} from 'react-icons/ai';

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
    icon: <AiOutlineInfoCircle />,
  },
  {
    id: 3,
    href: '#faqs',
    text: 'FAQs',
    icon: <AiOutlineQuestionCircle />,
  },
  {
    id: 4,
    href: '#home',
    text: 'Apply',
    icon: <AiOutlineForm />,
  },
  {
    id: 5,
    href: '#home',
    text: 'Contact',
    icon: <AiOutlineMail />,
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
    q: 'What is Perfect Match?',
    a: 'Perfect Match is Ireland’s newest professional nanny agency. We are committed to helping you find a warm, caring, responsible and experienced nanny, who will create a thriving and loving environment for your children.',
  },
  {
    id: 2,
    q: "What's our background?",
    a: 'We are a partnership of two experienced mothers. We have been working in the private childcare sector as nannies, maternity nurses and childminders for the last twelve years. One of us is a registered nurse. Being parents ourselves, we have an excellent perspective from both sides of the fence.',
  },
  {
    id: 3,
    q: 'Why did we decide to start Perfect Match?',
    a: 'The idea to set up this nanny agency evolved from the increasingly large number of parents who have approached us seeking the same very high standard of care for their children in their own homes as we have been providing for many years ourselves. ',
  },
  {
    id: 4,
    q: 'What\'s our approach?',
    a: 'As a boutique nanny agency, we have a devoted and personal approach. We offer a unique service, as we call to your home and meet with you in your own environment. We listen carefully to your requirements and ensure your standards are met and our reputation is upheld. We then search for your "Perfect Match".',
  },
  // {
  //   id: 5,
  //   q: 'How can I apply?',
  //   a: 'Once you have made initial contact with us, we will phone you for a chat and, if you wish to proceed, we will ask you to fill out a simple online form outlining your requirements. We will then arrange our visit to your home at a time of your choosing.',
  // },
  {
    id: 5,
    q: 'How does our selection process work?',
    a: 'All of our nannies have been personally chosen by us. They all have good English, nanny experience, excellent references which we have verified, Garda vetting and a Paediatric First Aid certificate.',
  },
  {
    id: 6,
    q: 'What happens after I apply?',
    a: 'We will then select a few carefully vetted nannies and send them to your home for an interview.',
  },
  {
    id: 7,
    q: 'How can I be sure my nanny has been fully trained?',
    a: 'Once you have chosen your Perfect Match nanny, we offer an optional service included in the placement fee where one of our partners, a registered nurse, will provide a full day\'s training with you and the nanny in your home before she officially starts. This is to ensure all of your care requirements for your children are understood and carried out to a very high standard. We believe that this is the most important part of our mission and the one closest to our hearts.',
  },
  {
    id: 8,
    q: 'What if I\'m not happy with my nanny?',
    a: 'We value the importance of finding the most suitable person to become part of your family, and wish to maintain a long-lasting relationship with those we work with. We will remain available to you and your nanny for the duration of their employment should you need any advice or to discuss any concerns you might have.',
  },
];
