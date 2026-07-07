import ProjectsGallery from "@/components/ProjectsGallery";

export default function ProjectsPage() {
  return (
    <section className='projects active section' id='projects'>
      <div className='container'>
        <div className='row'>
          <div className='section-title padd-15'>
            <h2>Projects</h2>
          </div>
        </div>

        <ProjectsGallery />
      </div>
    </section>
  );
}
