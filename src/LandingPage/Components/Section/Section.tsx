import SectionSvg from "../../../assets/svg/SectionSvg"

type CustomSection = {
    className: string
    crosses: boolean
    crossesOffset: string
    children: string
}


const Section = ({ className, crosses, crossesOffset, children }: CustomSection) => {
    return (
        <>
            <div className={`relative py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''}`}>
                {children}

                <div className="hidden absolute top-0 left-5 w-0 h-full bg-stroke-1 pointer-events-none
            md:block lg:left-7.5 xl:left-10">
                </div>
                <div className="hidden absolute top-0 left-5 w-0 h-full bg-stroke-1 pointer-events-none
            md:block lg:left-7.5 xl:left-10">
                </div>

                {crosses && (
                    <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1
                ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 right-10`}>
                    </div>
                )}

                <SectionSvg crossesOffset={crossesOffset} />
            </div>
        </>
    )
}

export default Section