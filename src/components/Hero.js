import styles from "../components/HeroStyle.module.css";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import heroImg from "../img/hero-img.png";

function Hero() {
	return (
		<section id="hero" className={styles.container}>
			<div className={heroImg}>
				<img className={styles.heroImg} src={heroImg} alt="Pfp of Me" />
			</div>
			<div className={styles.info}>
				<h1>
					Welcome, My Name is Josue.
					<br />
					Front End Developer and a
					<br />{" "}
					<span className={styles.inlineAnimation}>
						<TypeAnimation
							sequence={[
								"Designer 🎨.",
								1000,
								"Student 👨‍🎓.",
								1000,
								"Music Enthusiast 🎧.",
								1000,
								"Software Enthusiast 😀.",
								1000,
							]}
							wrapper="span"
							cursor={true}
							repeat={Number.POSITIVE_INFINITY}
						/>
					</span>
				</h1>
				<h2>
					<span className={styles.iconContainer}>
						<a
							href="https://www.linkedin.com/in/saffariz/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								className={styles.linkedinIconIcon}
							/>
						</a>
						<a
							href="https://github.com/Saffariz"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} className={styles.githubIcon} />
						</a>
						<span className={styles.line} /> {/* Line added here */}
					</span>
				</h2>
				<p>
					<span>
						I Like To Build Solid and Scalable Front End Based Products That{" "}
					</span>
					<br />
					<span>Add on Great User Experiences.</span>
				</p>
				<a href="/resume/Resume.pdf" download class="styled-button">
					Resume
				</a>
			</div>
		</section>
	);
}

export default Hero;
