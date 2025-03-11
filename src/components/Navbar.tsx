import { useContext } from "react";
import { TextColorContext } from "../App";

interface LinksProps {
  className?: string;
}

const Links = ({ className }: LinksProps) => {
  const textColor = useContext(TextColorContext);
  return (
    <div className={`flex ${className || ""}`} style={{ color: textColor }}>
      <a href="#Home">Home</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
    </div>
  );
};

export default Links;
