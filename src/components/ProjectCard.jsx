function ProjectPreview({ src }) {
  return (
    <div className="preview preview-screenshot" aria-hidden="true">
      <img src={src} alt="" />
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-${project.kind}`}>
      <a className="project-visual-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
        <ProjectPreview src={project.preview} />
        <span className="project-number">0{index + 1}</span>
        <span className="project-open" aria-hidden="true">↗</span>
      </a>
      <div className="project-copy">
        <div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div>
        <h3><a href={project.href} target="_blank" rel="noreferrer">{project.name}</a></h3>
        <p>{project.description}</p>
        <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
    </article>
  )
}

export default ProjectCard