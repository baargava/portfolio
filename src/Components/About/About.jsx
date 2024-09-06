import { Container } from "./styles";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import Express from '../../assets/Express.svg'
import Tailwind from '../../assets/tailwind-css-svgrepo-com.svg'
import Redux from '../../assets/redux-svgrepo-com.svg'
import { motion } from 'framer-motion';
import ram from '../../assets/Developer activity-bro.svg'

const skills = [
    { src: jsIcon, alt: "JavaScript" },
    { src: reactIcon, alt: "React" },
    { src: typescriptIcon, alt: "Typescript" },
    { src: Redux, alt: "Redux" },
    { src: nodeIcon, alt: "Node" },
    { src: Express, alt: "Express" },
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: boostrapIcon, alt: "Bootstrap" },
    { src: Tailwind, alt: "Tailwind" },
    { src: shopify, alt: "Shopify" }
];

export function About() {
    return (
        <Container id="about">
            <div className="about-text">
                <h2>About me</h2>
                <p>
                    I'm a passionate Full Stack web developer with 2.2 years of experience in developing MERN Stack web applications with React Js, Express Js, Redux, React Native, Node Js, Mongo DB, JavaScript, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.
                </p>
                <h3>Here are my main skills:
                </h3>
                <div className="hard-skills">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="hability"
                            initial={{ scale: 1, rotateY: 0 }}
                            whileHover={{ scale: 1.5, rotateY: 25 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 1 }}
                        >
                            <img src={skill.src} alt={skill.alt} />
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="about-image ">
                <img src={ram} alt="baargav" />
            </div>
        </Container>
    );
}
