
function ProjectCard({ project }) {
    return (
        //print all projects into cards

<div className="col-lg-4 col-md-6 portfolio-card" key={project.id}>

                        <div className="portfolio-item">
                            <img className="img-fluid" src={project.image} alt="Project Image" />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>

                    </div>
        
     )}
     export default ProjectCard;