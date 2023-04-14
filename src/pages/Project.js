import {useParams} from "react-router-dom";
import BtnLink from "../components/btnLink/BtnLink";
import {projects} from "./../helpers/projectsList"

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<main className="section section-project">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>

					<img
						src={project.imgBig}
						alt={project.title}
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p className="project-details__text">{project.description}</p>
						<p><span>Skills:</span><span className="project__skills"> {project.skills}</span></p>
					</div>

					{project.link && (
						<BtnLink link={project.link} />
					)}
				</div>
			</div>
		</main>
	);
}

export default Project;