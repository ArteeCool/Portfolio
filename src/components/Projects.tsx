import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div
        id="Projects"
        className="w-1/2 mx-auto my-10 min-h-[50dvh] flex justify-evenly items-center md:w-full"
      >
        <div className="flex justify-around max-w-[75vw] w-full h-full gap-10 flex-col md:flex-row items-center">
          <ProjectCard
            title="This portfolio"
            link="https://github.com/ArteeCool/Portfolio"
            target="_blank"
            description="Current site you are on"
          />
          <ProjectCard
            title="Combat Master"
            link="https://github.com/ArteeCool/Combat-Master"
            target="_blank"
            description="Small freelance project on game Combat Master"
          />
          <ProjectCard
            title="Battleship multiplayer"
            link="https://github.com/ArteeCool/BattleshipMultiplayer"
            target="_blank"
            description="Unity game of Battleship with multiplayer"
          />
        </div>
      </div>
    </>
  );
};
export default Projects;
