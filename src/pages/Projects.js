import Project from '../components/project/Project';
import {projects} from "./../helpers/projectsList"
import {useEffect, useState} from "react";

const Projects = () => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {setLoading(false)}, 1000)
	}, [])

	return (<>
		{loading ? <div className="loading-spinner" >
			<p className="loading-text">Loading
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</p>
			<div class="load">
				<div></div>
			</div>
		</div > : <main className="section section-projects">
			<div className="container">
				<h2 className="title-1">My Projects</h2>
				<ul className="projects">
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		</main>
		}
	</>
	);
};

export default Projects;
