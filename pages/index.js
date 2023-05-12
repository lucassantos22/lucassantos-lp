import logo from '../src/assets/me.jpeg'
import segwareLogo from '../src/assets/segware-logo.svg'
import digitroLogo from '../src/assets/digitro-logo.svg'
import zygoLogo from '../src/assets/zygo-logo.svg'
import pagseguroLogo from '../src/assets/pagseguro-logo.svg'
import qrcode from '../src/assets/qrcode.svg'

export default function() {
  return (
    <div class="has-background-white-ter">
      <div class="has-text-black container">
        <div class="content">
          <img class="my-picture" src={logo} />
          <p class="is-size-2 has-text-centered mt-4">Hello there, my name is <strong>Lucas</strong>!</p>
          <p class="is-size-3 has-text-centered">I'm a software engineer focused on Front-end technologies</p>
          <p class="is-size-6 has-text-centered is-italic mt-4">HTML5, CSS3, Javascript, Typescript, React.js, Vue.js, Next.js, Node.js, Express, Pinia, Firebase, MongoDB, Jest, Cypress, Tailwind.css, BULMA, Bootstrap, Github, Jenkins, Git, SCRUM, Kanban... and a litle bit more :)</p>
          <button class="primary-btn button mt-6 has-background-black-ter is-rounded has-text-light">Contact me! - it's free ;)</button>
        </div>
      </div>

      <div class="second-container has-text-white-bis has-background-black-ter">
        <p class="is-size-2 has-text-centered">My Professional Experience</p>
        <div class="grid-timeline">
          <div>
            <img class="mt-5" src={segwareLogo} width={150} height={150} /> 2017 - 2017
          </div>
          <div>
            <img class="mt-5" src={digitroLogo} width={150} height={150} /> 2018 - 2020
          </div>
          <div>
            <img class="mt-3" src={zygoLogo} width={150} height={150} /> 2021 - 2022
          </div>
          <div>
            <img class="mt-5" src={pagseguroLogo} width={150} height={150} /> 2022 - now
          </div>
        </div>
      </div>

      <div class="has-text-black container">
        <p class="is-size-2 mb-6">Scan to know me better!</p>
        <img style={{ height: '200px', width: '200px', display: 'block' }} src={qrcode} />
      </div>
    </div>
  )
}