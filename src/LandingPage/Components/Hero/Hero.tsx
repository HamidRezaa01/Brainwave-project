import { useRef } from "react"
import Section from "../Section/Section"
import curve from '../../../assets/hero/curve.png'
import Button from "../Button/Button"
import robot from '../../../assets/hero/robot.jpg'
import heroBackground from '../../../assets/hero/hero-background.jpg'
import { ScrollParallax } from 'react-just-parallax'
import { heroIcons } from "../../../data/data"
import Generating from "../../design/Genaratings"

const Hero = () => {
    const parallaxRef = useRef(null)

    return (
        <Section className="pt-[12rem] -mt-[5.25]" crosses crossesOffset='lg:translate-y-[5.25]'>

            <div className="container relative" ref={parallaxRef}>
                <div className="relative mx-auto z-1 max-w-[62rem] text-center mb-[4rem] md:mb-20
                lg:mb-[6rem]">
                    <h1 className="h1 mb-6 mt-10">Explore the Possibilites of AI Chatting with BrainwaveCurve</h1>
                    <span className="inline-block lg:inline relative text-4xl">
                        Brainwave
                        <img src={curve} alt="Brainwave" className="absolute w-full top-full left-0 lg:mt-1" />
                    </span>
                    <p className="body-1 max-w-3xl mx-auto mt-10 text-n-2 lg:mb-8">
                        Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave,
                        the open AI chat app.
                    </p>
                    <Button className="mt-10 md:mt-3 text-1xl" href="">
                        Get started
                    </Button>
                </div>

                <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-full bg-n-10 rounded-t-[0.9rem]">
                                <div>
                                    <img src={robot} className="w-full"/>
                                    <Generating className="absolute left-4 right-4 bottom-5 md:left-1/4
                                    md:right-auto md:bottom-8 md:w-[31rem] bg-n-9"/>
                                    <ScrollParallax isAbsolutelyPositioned>
                                        <ul className="hidden xl:flex absolute -left-[5.5rem] bottom-[11.5rem]
                                            bg-n-9 border border-n-3 px-1 py-1 rounded-2xl">
                                            {heroIcons.map((icon, index) => (
                                                <li className="px-3 py-3" key={index}>
                                                    <img src={icon} />
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollParallax>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[-54%]">
                        <img src={heroBackground}
                            className="w-full"
                            width={1440}
                            height={1800}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Hero