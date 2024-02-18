import React from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = () => {
  return (
    <div style={{ marginTop: "20px" }} >
    <Container id="projects"   >
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of my projects.
        </Desc>
        <CardContainer>
          {projects
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
    </div>
  )
}

export default Projects