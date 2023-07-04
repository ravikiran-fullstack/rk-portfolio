import React from 'react';
import useFetchProjects from '../utils/useFetchProjects';

const Projects = () => {
  const { loading, projectsData } = useFetchProjects();

  if (loading) {
    return (
      <div className="projects">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projectsData.map((project, index) => {
          const { title, imageUrl, url } = project;
          return (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
              key={index}
            >
              <img src={imageUrl} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
