import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import HTML5Icon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItem";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTML5Icon,
  },
  {
    title: "CSS3",
    iconType: CSS3Icon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Reading",
    emoji: "📖",
  },
  {
    title: "Watching",
    emoji: "📺",
  },
  {
    title: "Music",
    emoji: "♬",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do,what inspires me."
        />
        <div className="mt-20 flex flex-col gap-6">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />

            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="My Book Image" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My ToolBox"
              description="Explore the technologies and tools I use to craft exceptional
                digital experience."
              className="px-6 pt-6"
            />
            <ToolBoxItems items={toolBoxItems} className="mt-6" />
            <ToolBoxItems
              items={toolBoxItems}
              className="mt-6 "
              itemWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-[320px]">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital ground."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px]">
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smile emoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
