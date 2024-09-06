import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import { motion } from "framer-motion";

// Define the animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <motion.div
        className="projects"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="project"
          variants={projectVariants}
        >
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://devusergobooze.codefactstech.com/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Go Booze: 33 Minute Liquor Delivery</h3>
            <p>Developed an online liquor selling platform website and mobile apps using React JS, React Native, Redux Toolkit, JavaScript, API Gateway, Express JS, Node JS, and MongoDB, enabling users to buy liquor on the website and have it delivered within 33 minutes. Integrated Stripe payment gateway for seamless transactions.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React JS</li>
              <li>Redux Toolkit</li>
              <li>JavaScript</li>
              <li>React Native</li>
            </ul>
          </footer>
        </motion.div>

        <motion.div
          className="project"
          variants={projectVariants}
        >
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://dietnest.in/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Dietnest: Buy Healthy and Organic Foods Online</h3>
            <p>Developed a user web application and admin dashboard using React JS and Redux Toolkit. Dedicated to offering a wide range of health-based and natural, organic foods. From meat to fruits, vegetables, millets, and every grocery item in between, our products are preservative-free and untainted by pesticides or fertilizers.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React JS</li>
              <li>Redux Toolkit</li>
              <li>JavaScript</li>
              <li>Next JS</li>
            </ul>
          </footer>
        </motion.div>

        <motion.div
          className="project"
          variants={projectVariants}
        >
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://gochauffeurs.in/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Gochauffeurs: Your Trusted Source for Professional Drivers!</h3>
            <p>Developed an admin dashboard for the Gochauffeurs application to monitor rides and payments. Implemented two client-side mobile apps for users and drivers. With these apps, users can book drivers at scheduled times and drivers can reach and complete the ride.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React JS</li>
              <li>React Native</li>
              <li>Redux Toolkit</li>
              <li>Google Maps</li>
            </ul>
          </footer>
        </motion.div>

        <motion.div
          className="project"
          variants={projectVariants}
        >
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://www.anvayaconventions.com/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Anvaya Conventions: Exclusive Events, Priceless Memories</h3>
            <p>Developed an admin dashboard to manage day-to-day activities of convention bookings. Developed an admin-side mobile app for handling bookings, food menus, and guest lists.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React JS</li>
              <li>JavaScript</li>
              <li>React Native</li>
              <li>Redux Toolkit</li>
            </ul>
          </footer>
        </motion.div>

        <motion.div
          className="project"
          variants={projectVariants}
        >
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://gunturrajapickles.com/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Guntur Raja Pickles: Largest Pickles Retail Shop in Hyderabad</h3>
            <p>Developed a mobile application for Guntur Raja Pickles. Users can order pickles and spice powders from merchants across countries.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React Native</li>
              <li>JavaScript</li>
              <li>Node JS</li>
              <li>Express JS</li>
            </ul>
          </footer>
        </motion.div>
        <motion.div
          className="project"
          variants={projectVariants}
        >
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://drive9.in/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Drive 9 : Mileage Boosters for fuel efficiency.</h3>
            <p>
              Developed admin dashboard to handle distributor network and its orders. Developed mobile application for vendors to order mileage boosters and maintain stocks.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>Typescript</li>
              <li>Html</li>
              <li>css</li>
            </ul>
          </footer>
        </motion.div>

        <motion.div
          className="project"
          variants={projectVariants}
        >
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://play.google.com/store/apps/details?id=com.goarenapartner&hl=en" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>GoArena : Connect.Play.Together </h3>
            <p>Developed user & partner mobile applications for Goarena Sports Grounds Booking Platform. Users book specific ground at scheduled times and ground owners can manage bookings and financials.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React Native</li>
              <li>JavaScript</li>
              <li>React Js</li>
            </ul>
          </footer>
        </motion.div>
        <motion.div
          className="project"
          variants={projectVariants}
        >
          <header>
            <div className="project-links">
              <a href="https://www.theserviceradar.com/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>ServiceRadar - Connect with Service providers</h3>
            <p>
              Developed a admin dashboard for handling users and to send notifications.Developed a mobile application for service providers ,they register their service and notify when people search for service.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React Native</li>
              <li>React Js</li>
              <li>Javascript</li>
            </ul>
          </footer>
        </motion.div>
      </motion.div>
    </Container>
  );
}
