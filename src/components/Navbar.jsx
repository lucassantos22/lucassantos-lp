export const Navbar = () => {
  return (
    <nav class="navbar has-background-black-ter" role="navigation" aria-label="main navigation" style={{ position: 'fixed', width: '100vw', padding: '0 6rem', border: '.5px solid black' }}>
    <div class="navbar-brand">
        <p class="is-size-5 mt-4 mb-4 has-text-white-bis is-family-monospace has-text-weight-bold">LUCAS SANTOS</p>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <button class="button is-dark is-inverted">Contact</button>
            </div>
        </div>
        </div>
    </div>
    </nav>
  )
}
