import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faJsSquare,
	faNodeJs,
	faGitSquare,
	faHtml5,
	faCss3Alt,
	faSass,
	faPython,
	faServicestack,
} from "@fortawesome/free-brands-svg-icons";

import {
	faDatabase,
	faCopyright,
	faServer,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../components/Skills.module.css"; // Make sure to apply CSS modules

function Skills() {
	const skills = [
		{ icon: faJsSquare, name: "JavaScript ES6" },
		{ icon: faReact, name: "React JS" },
		{ icon: faNodeJs, name: "Node JS" },
		{ icon: faGitSquare, name: "Git" },
		{ icon: faHtml5, name: "HTML5" },
		{ icon: faCss3Alt, name: "CSS3" },
		{ icon: faSass, name: "SASS" },
		{ icon: faDatabase, name: "MongoDB" },
		{ icon: faCopyright, name: "C++" },
		{ icon: faPython, name: "Python" },
		{ icon: faServicestack, name: "jQuery" },
		{ icon: faServer, name: "Express JS" }, // Updated for Express
	];

	// Helper function to format the skill name to be used as a CSS class
	const formatClassName = (name) => {
		// Remove all spaces and convert to lowercase
		const withoutSpaces = name.toLowerCase().replace(/\s+/g, "");

		// Replace any '+' characters with 'pp'
		const withoutPlus = withoutSpaces.replace(/\+/g, "pp");

		// Remove any characters that aren't alphanumeric or dashes (to ensure valid class names)
		const cleaned = withoutPlus.replace(/[^\w-]/g, "");

		return cleaned;
	};

	return (
		<section data-aos="fade-up" id="skills" className={styles.skillsSection}>
			<div className={styles.skillSection}>
				<h1 className={styles.skillHeader}>My Skills</h1>
				<p className={styles.skillParagraph}>
					<span>
						Throughout my education, I have solidified my understanding of
						computer science
					</span>
					<br />
					<span>
						and web development concepts. In addition, I have dedicated a
						majority of my free
					</span>
					<br />
					<span>
						time in applying these concepts in real-world applications and
						products.
					</span>
				</p>
				<div className={styles.skills}>
					{skills.map((skill) => (
						<span
							key={skill.name} // Use the skill name as the key
							className={`${styles.skillName} ${styles[formatClassName(skill.name)]}`}
						>
							<FontAwesomeIcon
								icon={skill.icon}
								size="lg"
								aria-label={skill.name}
							/>
							{skill.name}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
