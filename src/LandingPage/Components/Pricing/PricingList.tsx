import { pricing } from "../../../data"
import Button from "../Button/Button"
import check from '../../../assets/check.svg'

const PricingList = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
            {pricing.map((item) => (
                <div key={item.id} className="w-[19rem] max-lg:w-full h-full px-6
                bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8
                [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="mb-10">{item.description}</p>
                    <div className="text-2xl">
                        {item.price && (
                            <h2 className="mb-3 text-3xl">${item.price}</h2>
                        )}
                    </div>
                    <Button className="w-full">
                        {item.price ? 'get started' : 'contact us'}
                    </Button>

                    <ul>
                        {item.features.map((feature, index) => (
                            <li key={index} className="flex items-center mt-10">
                                <img
                                    src={check}
                                    width={24}
                                    height={24}
                                    className="mr-5"
                                    alt=""
                                />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default PricingList