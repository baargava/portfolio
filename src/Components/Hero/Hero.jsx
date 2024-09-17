import { Container } from "./styles"
import { TypeAnimation } from "react-type-animation"
import { DecoderEffect } from './Decode'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from '../../assets/hero-img.svg'
export default function Hero() {
    return (
        <Container id="home" >
            <div className="hero-text">
                <p className="text-4xl">Hey,I'm </p>

                <DecoderEffect name="Bhargava Ram" />
                <TypeAnimation
                    sequence={[
                        `I'm a MERN Stack Developer`,
                        500,
                        `I'm a Front-End Developer`, //  Continuing previous Text
                        500,
                        `I'm a React Js Developer`,
                        500,
                        `I'm a React Native Developer`,
                        500,
                    ]}
                    style={{ fontSize: '2em', color: '#23ce6b' }}
                    repeat={Infinity}
                />

            </div>
            {/* <div className="hero-image">
                <img src={heroImage} alt="Ilustração" />
            </div> */}
        </Container>
    )
}