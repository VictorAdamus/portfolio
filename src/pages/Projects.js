import Project from '../components/project/Project';
import {projects} from "./../helpers/projectsList"
import loadSticker from '../img/load-sticker.png';

import {useEffect, useState} from "react";

const Projects = () => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {setLoading(false)}, 2000)
	}, [])

	return (<>
		{loading ? <div className="loading-spinner" >
			<p className="loading-text">Loading
				<span></span>
				<span></span>
				<span></span>
			</p>
		<img className='loading-img' src={loadSticker} alt='sleep man' width='200' height='200'/>
		</div > : <main className="section">
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
