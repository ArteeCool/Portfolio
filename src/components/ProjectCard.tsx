interface props {
  title: string;
  link: string;
  descriprion: string;
}

const ProjectCard = ({ title, link, descriprion }: props) => {
  return (
    <div className="flex flex-col justify-evenly items-center shadow-[0px_6px_8px_#959595] p-3  rounded-xl h-40">
      <h1>{title}</h1>
      <p>{descriprion}</p>
      <a
        className="relative text-cyan-500 after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[1px] after:bg-transparent after:transition-colors after:duration-300 hover:after:bg-cyan-500"
        href={link}
      >
        Link
      </a>
    </div>
  );
};
export default ProjectCard;
