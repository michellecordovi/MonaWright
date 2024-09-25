import {NavLink} from 'react-router-dom'
import {useState} from 'react'

function NavBar() {
	const [isExpanded, setIsExpanded] = useState(false)

	function handleToggle(){
		setIsExpanded(!isExpanded)
	}


	return (
		<nav>
			<div className="site-logo">Mona Wright</div>

			<ul className={isExpanded ? "expanded" : ""}>
				<li onClick={handleToggle}>
					<NavLink to="/">Home</NavLink>
				</li>
				<li onClick={handleToggle}>
					<NavLink to="/About">About</NavLink>
				</li>
				<li onClick={handleToggle}>
					<NavLink to="/Poetry">Poetry</NavLink>
				</li>
				<li onClick={handleToggle}>
					<NavLink to="/Contact">Contact</NavLink>
				</li>
			</ul>

			<div id="menu-icon" onClick={handleToggle}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#fdfee8"
				>
					<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
				</svg>
			</div>
		</nav>
	);
}

export default NavBar;
