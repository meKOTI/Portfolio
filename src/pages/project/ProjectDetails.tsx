import { Link, useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectId } = useParams();

  return (
    <main className="project-page">
      <Link to="/">← Portfolio</Link>
      <h1>{projectId}</h1>
    </main>
  );
}

export default ProjectDetails;
