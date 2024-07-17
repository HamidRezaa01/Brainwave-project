import { brainwaveServices } from '../../../data'
import check from '../../../assets/check.svg'
import service1 from '../../../assets/services/service-1.png'
import service2 from '../../../assets/services/service-2.png'
import service3 from '../../../assets/services/service-3.png'
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from '../../design/Services'
import { brainwaveServicesIcons } from '../../../data/data'


const Services = () => {
    return (
        <section className="container mx-auto">
            <div className='mb-10'>
                <h2 className="h2">Generative AI made for creators</h2>
                <p className="text-n-4 body-2 mt-4">Brainwave onlocks potential of AI-powered applications</p>
            </div>

            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border
                 border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none 
                         md:w-3/5 ">
                        <img
                            className='w-full h-full object-cover md:object-right'
                            src={service1}
                            width={800}
                            height={750}
                            alt=""
                        />
                    </div>

                    <div className='relative z-1 max-w-[17rem] ml-auto'>
                        <h4 className='text-2xl'>Smartest AI</h4>
                        <h6 className='body-2 mb-3 text-n-4'>Brainwave onlocks potential of AI-powered applications</h6>

                        <ul className='body-2'>
                            {brainwaveServices.map((item) => (
                                <li key={item.id}>
                                    <div className='flex items-start py-4 border-t border-n-6'>
                                        <img src={check} alt='icon' className='mr-5' />
                                        <h5>{item.title}</h5>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='relative z-1 grid lg:grid-cols-2 gap-5 mb-10'>
                <div className='relative min-h-[39rem] border border-n-10 rounded-3xl overflow-hidden'>
                    <div className='absolute inset-0'>
                        <img
                            src={service2}
                            className='w-full h-full object-cover'
                            width={630}
                            height={750}
                            alt="robot"
                        />
                    </div>

                    <div className='absolute inset-0 flex flex-col justify-end p-7
                    bg-gradient-to-b from-n-8 to-n-80/9'>
                        <h4 className='text-2xl'>Photo editing</h4>
                        <h6 className='body-2 mb-3 text-n-4'>
                            Automatically enhance your photos using our
                            AI app's photo editing feature. Try it now!
                        </h6>
                    </div>

                    <PhotoChatMessage />
                </div>

                <div className='p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]'>
                    <div className='py-12 px-4 xl:px-8'>
                        <h4 className='h4 mb-4'>Video generation</h4>
                        <p className='text-n-4 body-2 '>
                            The world's most powerful AI photo and
                            video art generation engine. What will you create?
                        </p>
                    </div>

                    <ul className='flex items-center justify-between'>
                        {brainwaveServicesIcons.map((icon) => (
                            <li>
                                <div className='px-4'>
                                    <img src={icon} alt='icon' />
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] mt-15'>
                        <img
                            src={service3}
                            className='w-full h-full object-cover'
                            width={520}
                            height={400}
                            alt=""
                        />

                        <VideoChatMessage />
                        <VideoBar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services