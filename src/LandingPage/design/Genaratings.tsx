import loading from '../../assets/loading.png'

type ClassName = {
    className: string
}

const Generating = ({ className }: ClassName) => {
    return(
        <div className={`flex items-center h-[3.5rem] px-6 rounded-[1.7rem] text-base ${className || ''}`}>
            <img src={loading} width={20} className='mr-5' />
            AI is generating
        </div>
    )
}

export default Generating