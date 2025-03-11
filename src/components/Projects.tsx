import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="w-full min-h-[50dvh] flex justify-evenly items-center">
        <div className="flex justify-around max-w-1/2 w-full h-full gap-10">
          <ProjectCard
            title="This portfolio"
            link=""
            descriprion="Current site you are on"
          />
        </div>
      </div>
    </>
  );
};
export default Projects;
