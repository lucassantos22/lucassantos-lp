import Image from 'next/image';
import logo from '../assets/logo.svg'

export const Navbar = () => {
  return (
    <nav class="navbar has-background-white-ter" role="navigation" aria-label="main navigation" style={{ position: 'fixed', width: '100vw', padding: '0 6rem' }}>
    <div class="navbar-brand">
        <Image alt="Lucas Santos logo" width={100} height={40} src={logo}></Image>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <button class="button has-background-black-ter has-text-light is-rounded">Contact</button>
            </div>
        </div>
        </div>
    </div>
    </nav>
  )
}
