import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header
      className="
        flex flex-1
        items-center justify-center
        py-20 px-[0.625rem]
        bg-[var(--gray-700)]
      "
    >
      <img
        src={logo}
        alt="Foguete com motores ligados escrito todo ao lado"
      />
    </header>
  )
}
