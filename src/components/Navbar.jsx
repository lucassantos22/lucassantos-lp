import Image from 'next/image';
import logo from '../assets/logo.svg'

export const Navbar = () => {
  return (
    <nav class="navbar has-background-black-ter" role="navigation" aria-label="main navigation" style={{ position: 'fixed', width: '100vw', padding: '0 6rem', border: '.5px solid black', background: 'linear-gradient(157deg, rgba(2,0,36,1) 0%, rgba(46,42,42,1) 0%, rgba(0,0,0,1) 100%)' }}>
    <div class="navbar-brand">
        <Image alt="Lucas Santos logo" width='100px' height='40px' src={logo}></Image>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <button class="button has-background-white-ter is-inverted">Contact</button>
            </div>
        </div>
        </div>
    </div>
    </nav>
  )
}
