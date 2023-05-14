import digitroLogo from '../../../src/assets/digitro-logo.svg'

export const DigitroSection = () => (
    <div class="container has-text-white-bis has-background-black-ter" id="digitro">
        <div class="content">
            <img class="center" src={digitroLogo} width={250} height={250} />
            <p class="is-size-3 has-text-centered">2018 - 2020</p>
            <hr></hr>
            <p class="mt-6">
                At Digitro, I started as an intern in the development area, an activity that I identified myself with.
                Development of web systems, bug fixes, automated tests, cross tests, database manipulation and contact
                with agile methodologies are some of the experiences I have had.
            </p>
            <p class="mt-6">
                Technologies: Javascript, Vue.js, HTML5, CSS3, Enzyme, Vue Test Utils, Cucumber, JEST, JUnit, GIT,
                Gitlab, Jenkins, UNA, REST, Scrum, VSCode, IntelliJ,Bootstrap, TDD, Python, Redis and Postgres.
            </p>
        </div>
    </div>
)