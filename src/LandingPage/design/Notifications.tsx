import { notificationImages } from "../../data/data"
import notification1 from '../../assets/notification/image-1.png'


const Notifications = () => {
    return (
        <div className="hidden xl:flex absolute -right-[5.5rem]
            bottom-[20rem] w-[18rem] items-center bg-n-9 p-4 pr-10 border border-n-1/10 rounded-2xl">

            <div className="flex">
                <img className="rounded-2xl mr-4" src={notification1}
                    width={62}
                    height={62}
                    alt=""
                />
                <div className="flex flex-col">
                    <div className="flex-1">
                        <h3 className="mb-1 font-semibold text-base">Code Generating</h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <ul className="flex">
                            {notificationImages.map((image, index) => (
                                <li key={index} className="flex w-7">
                                    <img src={image}
                                        className="w-full rounded-full"
                                        width={15}
                                        height={15}
                                    />
                                </li>
                            ))}
                        </ul>
                        <span className="body-2 text-n-13 text-xs ml-2">
                            1min ago
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications