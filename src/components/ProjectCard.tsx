import { useContext } from "react";
import { BackgroundColorContext, TextColorContext } from "../App";

interface Props {
  title: string;
  link: string;
  description: string;
  target: string;
}

const ProjectCard = ({ title, link, description, target }: Props) => {
  const textColor = useContext(TextColorContext);
  const backgroundColor = useContext(BackgroundColorContext);

  return (
    <div
      className="relative aspect-square bg-gray-100 flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-48"
      style={{
        color: textColor,
        backgroundColor:
          backgroundColor === "white" ? "#e5e7eb" : "rgba(255,255,255,0.1)",
      }}
    >
      <div className="space-y-3">
        <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-cyan-600">
          {title}
        </h3>
        <p
          className="text-gray-600 text-sm line-clamp-2"
          style={{ color: textColor }}
        >
          {description}
        </p>
      </div>

      <div className="relative">
        <a
          target={target}
          className="inline-flex items-center text-cyan-600 font-medium transition-colors duration-300 group/link"
          href={link}
        >
          <span>View Project</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
