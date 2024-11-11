import React from "react";
import styles from "../components/NavBar.module.css"; // Importing styles from the CSS module

const NavBar = () => {
	return (
		<div>
			<header>
				<nav className={styles.navbar}>
					{" "}
					{/* Applying CSS module class */}
					<a className={styles.logo} href="/#">
						J
					</a>
					<ul className={styles.menu}>
						<li className={styles.item}>
							<a href="/#skills">SKILLS</a>
						</li>
						<li className={styles.item}>
							<a href="/#projects">PROJECTS</a>
						</li>
						<li className={styles.item}>
							<a href="/#contact-me">CONTACT ME</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default NavBar;
