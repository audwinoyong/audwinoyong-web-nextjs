import bingVoiceSystemImg from '@/public/project-banners/bing-voice-system.png';
import bubblePopImg from '@/public/project-banners/bubblepop.jpg';
import hexanewsImg from '@/public/project-banners/hexanews.png';
import liftSystemImg from '@/public/project-banners/lift-system.png';
import sparkleImg from '@/public/project-banners/sparkle.png';
import userManagementImg from '@/public/project-banners/user-management.png';
import wsdBookstoreImg from '@/public/project-banners/wsd-bookstore.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaAws } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import { VscAzure } from 'react-icons/vsc';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiences = [
  {
    title: 'Microsoft Azure Developer Associate',
    location: 'Microsoft',
    description: 'I gained Azure cloud certification as developer associate.',
    icon: React.createElement(VscAzure),
    date: 'Nov 2023',
    url: 'https://learn.microsoft.com/en-us/users/audwinoyong/credentials/298f01abe1ab897f',
  },
  {
    title: 'AWS Certified Developer - Associate',
    location: 'Amazon Web Services (AWS)',
    description: 'I gained AWS cloud certification as a developer associate.',
    icon: React.createElement(FaAws),
    date: 'July 2022',
    url: 'https://www.credly.com/badges/78e133ed-7f57-432b-bd4b-d00fa50e8077',
  },
  {
    title: 'Bachelor of Science in IT, Bachelor of Business',
    location: 'University of Technology Sydney',
    description:
      'I studied at UTS with focus on Enterprise Systems Development and Finance majors.',
    icon: React.createElement(LuGraduationCap),
    date: '2015 - 2018',
    url: 'https://www.uts.edu.au',
  },
  {
    title: 'Administrative Assistant',
    location: 'PRN Medical Billing',
    description: 'I worked as medical biller.',
    icon: React.createElement(CgWorkAlt),
    date: '2015 - 2021',
    url: 'https://www.prnmedbill.com.au',
  },
  {
    title: 'Event Communications Intern',
    location: 'Dementia Australia',
    description:
      'I volunteered as an intern of the fundraising team division. I assisted the maintenance of Dementia Australia website, specifically the Memory Walk & Jog charity event.',
    icon: React.createElement(MdOutlineVolunteerActivism),
    date: '2015',
    url: 'https://www.memorywalk.com.au',
  },
  {
    title: 'Diploma of Business',
    location: 'UTS Insearch',
    description: 'I studied at UTS Insearch. Focusing on business major.',
    icon: React.createElement(LuGraduationCap),
    date: '2014',
    url: 'https://www.insearch.edu.au',
  },
] as const;

export const projects = [
  {
    title: 'Bubble Pop',
    description: 'An interactive bubble popping game app for iOS.',
    tags: ['iOS', 'Swift'],
    imageUrl: bubblePopImg,
    url: 'https://github.com/audwinoyong/bubblepop',
  },
  {
    title: 'Hexanews',
    description: 'Web application for content publishing.',
    tags: [
      'React',
      'TypeScript',
      'Redux',
      'Node.js',
      'Express',
      'Joi',
      'MongoDB',
    ],
    imageUrl: hexanewsImg,
    url: 'https://github.com/dotaemon99/hexanews',
  },
  {
    title: 'Sparkle',
    description: 'Car wash locator and booking app for Android.',
    tags: ['Android', 'Java', 'Firebase'],
    imageUrl: sparkleImg,
    url: 'https://github.com/audwinoyong/sparkle',
  },
  {
    title: 'Bing Voice System',
    description:
      'Proof of Concept web application for voice-based conversations.',
    tags: ['C#', 'ASP.NET MVC', 'MSSQL'],
    imageUrl: bingVoiceSystemImg,
    url: 'https://github.com/audwinoyong/BingVoiceSystem',
  },
  {
    title: 'Lift System',
    description: 'JavaFX application of Lift System.',
    tags: ['Java', 'JavaFX', 'FXML'],
    imageUrl: liftSystemImg,
    url: 'https://github.com/audwinoyong/lift-system',
  },
  {
    title: 'WSD Bookstore',
    description: 'Web application for listing secondhand textbooks.',
    tags: ['JSP', 'REST API'],
    imageUrl: wsdBookstoreImg,
    url: 'https://github.com/audwinoyong/wsd-bookstore',
  },
  {
    title: 'User Management System',
    description:
      'Windows Forms application of reputation system. It has features such as assign user ratings, promote user roles.',
    tags: ['Windows Forms'],
    imageUrl: userManagementImg,
    url: 'https://github.com/audwinoyong/UserManagement',
  },
] as const;

export const skills = [
  'React',
  'Angular',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Redux',
  'Cypress',
  'Node.js',
  'GraphQL',
  'Apollo',
  'Express',
  'HTML',
  'CSS',
  'C# .NET Core',
  'Git',
  'Tailwind',
  'MySQL',
  'MongoDB',
  'PostgreSQL',
] as const;
