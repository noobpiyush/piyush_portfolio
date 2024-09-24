import darkSaasLandingPage from "@/assets/images/youtube.png";
import lightSaasLandingPage from "@/assets/images/medium.png";
import BlockChainSAAS from "@/assets/images/blockchain.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Youtube Clone",
    year: "2024",
    title: "Youtube Landing Page",
    "results": [
      { "title": "Developed with React, TypeScript, and Tailwind CSS" },
      { "title": "Implemented a responsive sidebar for seamless navigation" },
      { "title": "Optimized design for both mobile and desktop views" }
    ],
    link: "https://yt-homepage-ts.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Medium Clone",
    year: "2024",
    title: "Full stack Medium",
    "results": [
    { "title": "Developed backend using Cloudflare Workers, TypeScript, Hono, and Zod TS" },
    { "title": "Implemented scalable backend architecture for efficient content management" },
    { "title": "Enhanced application security and performance through modern technologies" }
  ],
    link: "https://medium-zeta.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "BLOCKFORGE",
    year: "2024",
    title: "Blockchain SAAS",
    results: [
      { title: "Developed using Astro Framework, Reactjs Components, Framer Motion and Tailwind" },
      { title: "Implemented Smooth Animations for best UI/UX" },
      { title: "Used Astro's Content Mangement for smooth Content Fetching" },
    ],
    link: "https://dark-saas-blockchain.netlify.app/",
    image: BlockChainSAAS,
  },
];

export const ProjectsSection = () => {
  return (
    <section  className="pb-16 lg:py-24 project" id="project">
      <div
        className="container"
      >
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how i transformed concepts into engaging digital experiences"
        />
        <div className="mt-10 md:mt-20 flex flex-col  gap-20" >
          {
            portfolioProjects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:p-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top:`calc(64px + ${projectIndex * 50}px`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div
                      className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-3 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                    >
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3
                      className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl"
                    >
                      {project.title}
                    </h3>
                    <hr
                      className="border-t-2 border-white/5 mt-4 md:mt-5"
                    />
                    <ul
                      className="flex flex-col gap-4 mt-4 md:mt-5"
                    >
                      {project.results.map(result => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm text-white/50 md:text-base"
                        >
                          <CheckCircleIcon className='size-5 md:size-6' />
                          <span> {result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <Link  href={project.link}
                      target="_blank"
                    >
                      <button
                        className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                      >
                        <span> Visit Live Site</span>
                        <ArrowUpRightIcon className='size-4' />
                      </button>
                    </Link>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full  lg:w-auto lg:max-w-none '
                    />
                  </div>
                </div>
              </Card>
            ))
          }
        </div>
      </div>
    </section>

  );
};
