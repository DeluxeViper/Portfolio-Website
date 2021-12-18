/** @format */

import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Section id="projects">
      <div style={{ height: "50px" }} />
      <SectionDivider />
      <br />
      <SectionTitle>Projects</SectionTitle>
      <div className="project_grid_container">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
