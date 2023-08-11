import avatar from '../img/macbook-sticker.png'

const Home = () => {

    return (
		<header className="home">
			<div className='container'>
			<div className="home__wrapper">
				<img className='home__img' src={avatar} alt='Victor Adamus' width={200} height={200} />
				<h1 className="home__title">
					<strong>
						Hi, my name is <em>Victor</em>
					</strong>
					<br />a <em>Junior</em> Frontend Developer
				</h1>
				<div className="home__text">
					<p>with passion for learning and <em>creating</em>.</p>
				</div>
			</div>
			</div>
		</header>
	);
}

export default Home;