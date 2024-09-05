import coderMahabub from "@/assets/images/codermahabub.png";
import reactAuthentication from "@/assets/images/authentication.png";
import road2Study from "@/assets/images/road2study.png";
import designDotIt from "@/assets/images/designdotit.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Coder Mahabub",
    year: "2024",
    title: "Developer Portfolio",
    results: [
      { title: "ReactJS, NextJS,Tailwind CSS, Framer" },
      { title: "Created Seamless Digital Experience" },
      { title: "Build Attractive Interfaces for Enhanced User Engagement" },
    ],
    link: "https://codermahabub.com",
    codeLink: "https://github.com/CoderMahabub/my-portfolio",
    image: coderMahabub,
  },
  {
    company: "Firebase Auth",
    year: "2024",
    title: "React Firebase Authentication",
    results: [
      { title: "ReactJS, React Router, Redux & Firebase" },
      { title: "LogIn & SignUp using Email & Password" },
      { title: "Direct Login with Google & Reset Password by Email" },
    ],
    link: "https://book-list-with-firebase-124f7.web.app/",
    codeLink: "https://github.com/CoderMahabub/react-firebase-auth.git",
    image: reactAuthentication,
  },
  {
    company: "Road2Study",
    year: "2023",
    title: "Study Abroad and Online Course",
    results: [
      { title: "Wordpress Theme Customization" },
      { title: "WordPress, HTML, CSS, JavaScript" },
      { title: "Used Elementor Page Builder" },
    ],
    link: "https://road2study.com",
    codeLink: "https://road2study.com",
    image: road2Study,
  },
  {
    company: "Design Dot IT",
    year: "2022",
    title: "Design & Software Firm",
    results: [
      { title: "HTML,CSS,JavaScript" },
      { title: "Landing Page for Design Dot IT" },
      { title: "Static One Page Landing Page" },
    ],
    link: "https://designdotit.com",
    codeLink: "https://github.com/CoderMahabub/cuda",
    image: designDotIt,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Real-world Result"
          eyebrow="Featured Projects"
          description="See how I transformed concepts into engaging digital experience."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pb-0 pt-8 pt:pt-16 lg:px-20 md:pt-12 md:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 line-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 " />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 mb-4 mr-2">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                  <a href={project?.codeLink} target="_blank">
                    <button className="text-white bg-gray-900 inline-flex items-center font-semibold px-6 h-12 rounded-xl gap-2 w-full md:w-auto border border-gray-900">
                      <span className="text-semibold"> Code Source</span>
                      <ArrowUpRightIcon className="size4" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 lg:mt-0 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  ></Image>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
