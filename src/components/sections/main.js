import logo from '../../../src/assets/me.jpeg'
import { Section } from '../Section'

export const MainSection = () => (
    <Section>
        <img class="my-picture" src={logo} />
        <p class="is-size-2 has-text-centered mt-4">Hello there, my name is <strong>Lucas</strong>!</p>
        <p class="is-size-3 has-text-centered">I'm a software engineer focused on Front-end technologies</p>
        <p class="is-size-6 has-text-centered is-italic mt-4">HTML5, CSS3, Javascript, Typescript, React.js, Vue.js, Next.js, Node.js, Express, Pinia, Firebase, MongoDB, Jest, Cypress, Tailwind.css, BULMA, Bootstrap, Github, Jenkins, Git, SCRUM, Kanban... and a litle bit more :)</p>
        <button class="primary-btn button mt-6 has-background-black-ter is-rounded has-text-light">Contact me! - it's free ;)</button>
    </Section>
)