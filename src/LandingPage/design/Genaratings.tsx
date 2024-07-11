import loading from '../../assets/loading.png'

const Generating = () => {
    return(
        <div className="flex items-center h-[3.5rem] px-6 rounded-[1.7rem] text-base
        absolute left-4 right-4 bottom-5 md:left-1/4 md:right-auto md:bottom-8 md:w-[31rem] bg-n-9 mt-10">
            <img src={loading} width={20} className='mr-5' />
            AI is generating
        </div>
    )
}

export default Generating