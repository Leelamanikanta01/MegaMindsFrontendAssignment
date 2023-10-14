import React, {useState, useEffect} from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio
