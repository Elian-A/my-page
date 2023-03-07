import ProjectCard from "~/components/ProjectCard";
import MainLayout from "~/layouts/MainLayout";
import { api } from "~/utils/api";

const Projects = () => {
  const { data: projects, isError, isLoading } = api.project.getAll.useQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <MainLayout title="Elian Avalos | Projects">
      <div className="projectsGrid h-main p-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Projects;
