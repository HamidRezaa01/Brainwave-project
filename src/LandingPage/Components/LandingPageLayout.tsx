import Header from "./Header/Header"
import Hero from "./Hero/Hero"
import ButtonGradient from '../../assets/svg/ButtonGradient'
import Benefits from "./Benefits/Benefits"
import Collabration from "./Collabration.tsx/Collabration"

const LandingPageLayout = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Hero />
                <Benefits/>
                <Collabration/>
            </div>
            <ButtonGradient />
        </>
    )
}

export default LandingPageLayout