import { collabApps, collabContent } from "../../../data"
import check from '../../../assets/check.svg'
import Button from "../Button/Button"
import brainwaveSymbol from '../../../assets/brainwave-symbol.svg'
import { LeftCurve, RightCurve } from "../../design/Collaboration"

const Collabration = () => {
    return (
        <section>
            <div className="container lg:flex mb-60">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">
                        AI Chat App for seamless collabration
                    </h2>
                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map((item) => (
                            <li className="mb-3 py-3" key={item.id}>
                                <div className="flex items-center">
                                    <img src={check} width={24} height={24} />
                                    <h5 className="body-2 ml-5">{item.title}</h5>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Button>Try it now</Button>
                </div>

                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                        width smart automation and top-notch security. it's the perfect solution for teams
                        looking to work smarter
                    </p>

                    <div className="relative aspect-square border border-n-6 rounded-full w-[22rem]
                    left-1/2 flex -translate-x-1/2 scale:75 md:scale-100 mt-24 md:-mt-10">
                        <div className="flex w-60 m-auto aspect-square border border-n-6 rounded-full">
                            <div className="w-[6rem] m-auto aspect-square p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                                    <img
                                        src={brainwaveSymbol}
                                        width={48}
                                        height={48}
                                        alt="brainwave"
                                    />
                                </div>
                            </div>
                        </div>
                        <ul>
                            {collabApps.map((app, index) => (
                                <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom 
                                rotate-${index * 45}`}>
                                    <div className={`relative -top-[1.6rem] flex w-[2.3rem] h-[2.3rem] bg-n-7
                                        border border-n-1/15 rounded-xl -rotate-${index * 45}`}> 
                                        <img
                                            src={app.icon}
                                            width={app.width}
                                            height={app.height}
                                            className="m-auto"
                                            alt={app.title}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collabration