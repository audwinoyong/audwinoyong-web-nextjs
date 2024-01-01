'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import avatarImg from '@/public/avatar.jpg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { BsChatLeftText, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaStackOverflow, FaYoutube } from 'react-icons/fa';
import SectionHeading from './section-heading';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isIconClicked, setIsIconClicked] = useState(false);

  const initial = {
    opacity: 0,
    scale: 0,
  };

  const springIn = {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      delay: 0.1,
      duration: 0.7,
    },
  };

  const rotate = {
    opacity: 1,
    scale: 1,
    rotate: [0, 20, 0],
    transition: {
      duration: 1,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 0,
    },
  };

  const variants = {
    initial,
    springIn,
    rotate,
  };

  const handleIconClick = () => {
    setIsIconClicked(true);

    setTimeout(() => {
      setIsIconClicked(false);
    }, 2000);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={avatarImg}
              alt="avatar"
              width="170"
              height="170"
              priority={true}
              className="h-25 w-25 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 cursor-pointer text-4xl"
            onClick={handleIconClick}
            variants={variants}
            initial={initial}
            animate={!isIconClicked ? 'springIn' : 'rotate'}
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <SectionHeading>Audwin Oyong</SectionHeading>
        <p className="text-xl">
          Hey hi hello! I'm a full-stack software engineer and I enjoy building
          sites and apps.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-gray-900 p-4 text-[1.35rem] text-white outline-none transition hover:scale-[1.15] hover:bg-gray-950 focus:scale-[1.15] active:scale-105 dark:border dark:border-white dark:border-opacity-40 dark:bg-white/20 dark:text-white/80"
          href="#contact"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          <BsChatLeftText />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/audwinoyong"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/audwinoyong"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://stackoverflow.com/users/10158227/audwin-oyong"
          target="_blank"
        >
          <FaStackOverflow />
        </a>
        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://www.instagram.com/audwinoyong"
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://www.youtube.com/@audwinoyong"
          target="_blank"
        >
          <FaYoutube />
        </a>
      </motion.div>
    </section>
  );
}
