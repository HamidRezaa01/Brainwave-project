import Section from "../Section/Section"
import { benefits } from "../../../data"
import Arrow from "../../../assets/svg/Arrow"
import { GradientLight } from "../../design/Benefits"
import ClipPath from "../../../assets/svg/ClipPath"

const Benefits = () => {

    return (
        <section className="features">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 container mx-auto relative z-2 mb-20">
                {benefits.map((item) => (
                    <div
                        className="relative p-0.5 bg-no-repeat bg-[length:100%_100%]
                        md:max-w-[24rem]"
                        key={item.id}
                        style={{
                            backgroundImage: `url(${item.backgroundUrl})`
                        }}
                    >
                        <div className="relative z-2 flex flex-col min-h-[22rem] mb-5 p-[2.4rem]">
                            <h2 className="mb-2 text-2xl">{item.title}</h2>
                            <p className="body-2 mb-6 text-n-3">{item.text}</p>
                            <div className="flex items-center mt-auto">
                                <img
                                    src={item.iconUrl}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                />
                                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase
                                cursor-pointer">Explore more</p>
                                <Arrow />
                            </div>
                        </div>

                        {item.light && <GradientLight/>}

                        <div className="absolute inset-0.5" style={{clipPath: 'url(#benefits)'}}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
                                {item.imageUrl && (
                                    <img
                                      src={item.imageUrl}
                                      width={380}
                                      height={362}
                                      alt={item.title}
                                      className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                        </div>
                        <ClipPath />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Benefits