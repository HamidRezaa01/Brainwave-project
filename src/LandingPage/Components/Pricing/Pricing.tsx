import { pricing } from "../../../data"
import smallSphere from '../../../assets/4-small.png'
import stars from '../../../assets/pricing/stars.svg'
import PricingList from "./PricingList"

const Pricing = () => {
    return (
        <section className="overflow-hidden">
            <div className="container relative z-2 mt-32">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img
                        src={smallSphere}
                        className="relative z-1"
                        width={255}
                        height={255}
                        alt='Sphere'
                    />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
                        <img
                            src={stars}
                            className="w-full"
                            width={950}
                            height={400}
                            alt="Stars"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-20 mb-20">
                    <span className="text-n-4">GET STARTED WITH BRAINWAVE</span>
                    <h2 className="h2">Pay once, use forever</h2>
                </div>

                <div>
                    <PricingList/>
                </div>
            </div>
        </section>
    )
}

export default Pricing