import {NavLink} from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';
import {useState} from 'react';

const Navbar = () => {

	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	const closeBurger = 'nav-list__toggle';
	const openBurger = 'nav-list__toggle open'

	const openMenu = 'nav-list nav-list--open'
	const closeMenu = 'nav-list'

	const [open, setOpen] = useState(false)

	const navMenuHandler = () => {
		setOpen(!open)
		const body = document.querySelector('.body');
		if (!open && window.innerWidth < 620) {
			body.classList.add('body-overflow')
		} else {
			body.classList.remove('body-overflow')
		}
	}
	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<strong>Frontend</strong> portfolio
					</NavLink>
					<BtnDarkMode />
					<button className={open ? openBurger : closeBurger} onClick={navMenuHandler} type='button'>
								<div className='nav-list__toggle--close'>
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div className='nav-list__toggle--open'>
									<span></span>
									<span></span>
								</div>
							</button>
					<ul className={open ? openMenu : closeMenu}>
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({isActive}) =>
									isActive ? activeLink : normalLink
								}
								onClick={navMenuHandler}
							>
								Home
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/projects"
								className={({isActive}) =>
									isActive ? activeLink : normalLink
								}
								onClick={navMenuHandler}
							>
								Projects
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/aboutme"
								className={({isActive}) =>
									isActive ? activeLink : normalLink
								}
								onClick={navMenuHandler}
							>
								About Me
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
