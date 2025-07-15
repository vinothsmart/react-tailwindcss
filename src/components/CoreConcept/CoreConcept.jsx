import { memo } from "react";
import "./CoreConcept.css";

const CoreConcept = ({ title, description, image }) => {
  return (
    <li>
      <img src={image} alt={title} className="w-16 h-16" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default memo(CoreConcept);
