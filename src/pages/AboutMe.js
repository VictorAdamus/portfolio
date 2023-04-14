import Profile from "../components/profile/Profile";
import Sertificates from "../components/sertificates/Sertificates";

const AboutMe = () => {
    return (
		<main className="section section-aboutme">
			<div className="container">
				<Profile />
				<Sertificates />
				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>
						<svg className="content-list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/>
						</svg>
							Krasnodar, Russia
						</p>
					</li>
					<li className="content-list__item content-list__item--link content-list__item--center">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+79182387155">
								<svg className="content-list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.06,1.06,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"/>
								</svg>
								+7 (918) 238-71-55
							</a>
						</p>
					</li>
					<li className="content-list__item content-list__item--link">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:ak47unit@gmail.com">
								<svg className="content-list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"/>
								</svg>
								ak47unit@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default AboutMe;