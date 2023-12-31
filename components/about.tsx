'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm{' '}
        <span className="font-medium">an enthusiastic lifelong learner</span>{' '}
        with experience in software development, armed with sound financial
        knowledge.{' '}
        <span className="font-medium">
          A full-stack engineer with expertise in front-end development
        </span>
        , dedicated to understanding the 'why' behind using technology and
        delivering solutions with clean, readable, efficient code.
      </p>

      <p className="mb-3">
        Front-end:{' '}
        <span className="font-medium">
          TypeScript, React, Next.js, Monorepo, Cypress.
        </span>
      </p>

      <p className="mb-3">
        Back-end microservices:{' '}
        <span className="font-medium">
          Node.js, REST API, GraphQL, Docker, MySQL, C# .NET Core.
        </span>
      </p>

      <p>Certified Developer Associate in AWS and Azure ☁️.</p>
    </motion.section>
  );
}
