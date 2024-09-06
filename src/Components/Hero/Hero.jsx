import { Container } from "./styles"
import { TypeAnimation } from "react-type-animation"
import { DecoderEffect } from './Decode'
export default function Hero() {
    return (
        <Container id="home" >
            <div className="hero-text">
                {/* <ScrollAnimation animateIn="fadeInUp" style={{ display: 'inline' }}> */}
                <p className="text-4xl">Hi There! </p>
                {/* <img src={Hello} alt="Hello" width="20px" /> */}
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation animateIn="fadeInUp" > */}
                <DecoderEffect name="Bhargava Ram Gottam" />
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation animateIn="fadeInUp"> */}
                <TypeAnimation
                    sequence={[
                        'MERN Stack Developer',
                        500,
                        'Front-End Developer', //  Continuing previous Text
                        500,
                        'React Js Developer',
                        500,
                        'React Native Developer',
                        500,
                    ]}
                    style={{ fontSize: '2em', color: '#23ce6b' }}
                    repeat={Infinity}
                />
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation animateIn="fadeInUp" >
                    <p className="small-resume">2.2 Years of Experience</p>
                </ScrollAnimation> */}
                {/* <ScrollAnimation animateIn="fadeInUp" >
                    <div className="social-media"><a
                        href="https://www.linkedin.com/in/codevinayak"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} alt="Linkedin" />
                    </a>
                        <a
                            href="https://github.com/CodeVinayak/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                        <a
                            href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={whatsapp} alt="Whatsapp" />
                        </a>
                        <a
                            href="https://t.me/CodeVinayak"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={telegram} alt="telegram" />
                        </a>
                    </div>
                </ScrollAnimation> */}
            </div>
            {/* <div className="hero-image">
                <ScrollAnimation animateIn="fadeInRight" >
                    <img src={Illustration} alt="Ilustração" />
                </ScrollAnimation>
            </div> */}
        </Container>
    )
}