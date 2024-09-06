import { Container } from './styles';
import reactIcon from '../../assets/react-icon.svg';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';
import instagramIcon from '../../assets/instagram.svg';
import arrow from '../../assets/arrow-right-direction-green-icon.svg';
import { motion } from 'framer-motion';

export function Contact() {
    const scaleVariants = {
        hidden: { scale: 0.5 }, // Initial scale and opacity
        visible: { scale: 1.5 } // End scale and opacity
    };

    return (
        <Container id="contact">
            {/* <p>Find me here </p>
            <img src={arrow} alt='arrow' style={{ width: '2%', height: '15px', marginTop: '0px', marginInline: '20px' }}
            /> */}
            {/* <motion.img
                src={arrow}
                alt='arrow'
                style={{ width: '2%', height: '15px', marginTop: '0px', marginInline: '20px' }}
                initial='hidden'
                animate='visible'
                variants={scaleVariants}
                transition={{ duration: 0.5, type: 'spring', stiffness: 200 }} // Adjust the duration and stiffness as needed
            /> */}
            <div className="social-media">
                <a
                    href="https://www.linkedin.com/in/baargavaramgottam/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt="Linkedin" />
                </a>
                <a
                    href="https://github.com/baargava"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                    href="https://api.whatsapp.com/send/?phone=%2B919912398217&text=Hello+Bhargava"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={whatsapp} alt="Whatsapp" />
                </a>
                <a
                    href="https://t.me/baargavaram"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={telegram} alt="telegram" />
                </a>
                <a
                    href="https://www.instagram.com/gottam_baargav/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
        </Container>
    );
}
