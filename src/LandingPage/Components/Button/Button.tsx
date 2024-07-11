import ButtonSvg from "../../../assets/svg/ButtonSvg"

type Button = {
  className: string
  href: string
  onClick: () => void
  children: string
  white: boolean
}

const Button = ({ className, href, onClick, children, white }: Button) => {
  const classes = `button relative inline-flex justify-center items-center
   h-11 transition-colors px-4 ${className || ''} ${white ? 'text-n-8' : 'text-n-1'}`

  const spanClasses = 'relative z-10'

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  )

  const renderLink = () => {
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  }

  return href ? renderLink() : renderButton()
}

export default Button