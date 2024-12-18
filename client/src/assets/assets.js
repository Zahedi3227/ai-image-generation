import logo from './logo.svg';
import instagram from './instagram.svg';
import twitter from './twitter-alt.svg';
import userprofile from './user-profile.svg';
import credit from './wallet-cards.svg';
import feature from './feature-image.png';
import arrow from './arrow-right.svg';
import icons1 from './step-icon_1.png';
import recentone from './recent-1.jpg';
import recenttwo from './recent-2.jpg';
import recentthree from './recent-3.jpg';
import icon1 from './icon-1.svg';
import icon2 from './icon-2.svg';
import icon3 from './icon-3.svg';
import featureone from './featureone.jpeg';
import { BrainCircuit, Sparkles, ImageDown, MessageSquarePlus, Palette } from 'lucide-react';
import profileone from './profile-1.jpg';
import   profiletwo from './profile-2.jpg';
 import  profilethree from './profile-3.jpg';


export const assets = {
   logo,
    instagram,
    twitter,
    userprofile,
    credit,
    feature,
    arrow,
    icons1,
    recentone,
    recenttwo,
    recentthree,
    icon1,
    icon2,
    icon3,
    featureone,
    profileone,
    profiletwo,
    profilethree
};

export const StepsData = [{
  title: 'Unleash Your Imagination',
  description: 'Craft a vivid and detailed description of your dream image to unlock unparalleled results!',
  icon: MessageSquarePlus
},
{
  title: 'Create Masterpieces Instantly',
  description: 'Harness the power of AI to generate breathtaking images in seconds!',
  icon: Palette
},
{
  title: 'Seamlessly Download Your Art',
  description: 'Effortlessly download your stunning creations and share them with the world!',
  icon: ImageDown
}];

export const plansData = [{
  name: 'Basic',
  price: 10,
  features: ['1000 image credits', 'Basic customer support'],
  credits: 100
},
{
  name: 'Pro',
  price: 20,
  features: ['1000 image credits', 'Basic customer support'],
  credits: 200
},
{
  name: 'Advanced',
  price: 30,
  features: ['1000 image credits', 'Advanced customer support'],
  credits: 300
}]


export const TestimonialData = [{
  name: 'Victoria Smith',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem.',
   role: 'Web Developer',
  star: 5,
  image: profileone
},
{
  name: 'John Doe',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem.',
   role: 'Designer',
  star: 5,
  image: profiletwo
},
{
  name: 'Luis Johnson',
  role: 'UX Designer',
  star: 5,
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem.',
  image: profilethree
}]
