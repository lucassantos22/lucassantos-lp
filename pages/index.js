import logo from '../src/assets/me.jpeg'

export default function() {
  return (
    <div class="has-background-white-ter">
      <div class="has-text-black" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ padding: '0rem 4rem' }}>
          <img src={logo} width={150} height={150} style={{ borderRadius: '100%', margin: '0 auto', display: 'block' }}></img>
          <p class="is-size-2 has-text-centered mt-4">Hello there, my name is <strong>Lucas</strong>!</p>
          <p class="is-size-3 has-text-centered">I'm a software engineer focused on Front-end technologies</p>
          <p class="is-size-6 has-text-centered is-italic mt-4">HTML5, CSS3, Javascript, Typescript, React.js, Vue.js, Next.js, Node.js, Express, Pinia, Firebase, MongoDB, Jest, Cypress, Tailwind.css, BULMA, Bootstrap, Github, Jenkins, Git, SCRUM, Kanban... and a litle bit more :)</p>
          <button class="button mt-6 has-background-black-ter is-rounded has-text-light" style={{ margin: '0 auto', display: 'block' }}>Contact me! - it's free ;)</button>
        </div>
      </div>
      <div class="has-text-white-bis has-background-black-ter" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
        <p class="is-size-2 has-text-centered">Developing since 2018</p>
      </div>
    </div>

  )
}