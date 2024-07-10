import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import brainwave from '../../../assets/logo.png'
import { navigationItems } from '../../../data/index'
import Button from '../Button/Button'
import MenuSvg from '../../../assets/svg/MenuSvg'
import { HamburgerMenu } from '../../design/Header'
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Header = () => {
    const [navItem] = useState(navigationItems)
    const [openNavigation, setOpenNavigation] = useState(false)
    const location = useLocation()

    const toggleNavigation = () => {
        if(!openNavigation) {
            setOpenNavigation(true)
            enablePageScroll()
        } else {
            setOpenNavigation(false)
            disablePageScroll()
        }
    }

    const handleClick= () => {
        if(!openNavigation) return

        enablePageScroll()
        setOpenNavigation(false)
    }

    return (
        <div className={`fixed w-full top-0 z-50 bg-n-8/90 backdrop-blue-sm lg:bg-n-8/90 lg:backdrop-blur-sm
            ${openNavigation ? 'bg-n-8' : 'bg-n-8/90'}
        `}>
            <div className='flex items-center px-5 lg:px-7.5 xl:px-10'>
                <div>
                    <a className='block w-[12rem] xl:mr-8' href="#">
                        <img src={brainwave} width={190} height={40} alt="Brainwave"/>
                    </a>
                </div>

                <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8
                  lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                        {navItem.map(item => (
                            <a key={item.id} href={item.url} className={`block relative font-code text-1xl
                            uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8
                            ${item.url === location.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}
                            ${item.onlyMobile === true ? 'lg:hidden' : ''}`} onClick={handleClick}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>

                <div className='flex items-center'>
                    <a href="#" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>
                        New Account
                    </a>
                    <Button className='hidden lg:block'>
                        Sign up
                    </Button>
                </div>

                <Button className='ml-auto px-3 lg:hidden' onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    )
}

export default Header