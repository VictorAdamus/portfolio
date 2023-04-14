import gitHubIcon from './gitHub-black.svg';
import "./style.css"

const BtnLink = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="website" />View website</a>
	);
};

export default BtnLink;