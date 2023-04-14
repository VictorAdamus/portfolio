import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";

import ScrollToTop from "./utils/scrollToTop"

function App() {

	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/project/:id" element={<Project />} />
				<Route path="/aboutme" element={<AboutMe />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App;
