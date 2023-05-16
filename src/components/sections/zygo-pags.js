import zygoLogoDark from '../../../src/assets/zygo-logo-dark.svg'
import pagsLogoDark from '../../../src/assets/pagseguro-logo-dark.svg'
import { Section } from '../Section'

export const ZygoPags = () => (
    <Section id="zygo-pags">
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <img src={zygoLogoDark} width={300} height={300} />
                <img src={pagsLogoDark} width={250} height={250} />
            </div>
            <p class="is-size-3 has-text-centered">2021 - now</p>
            <hr style={{ border: '1px solid #242424', width: '100%' }}></hr>
            <p class="mt-6">
                Frontend tech leader of a team that follows the agile scrum methodology. I am responsible for the development,
                monitoring, bug fixing, test coverage and deployments of two web applications of the company.
            </p>
            <p class="mt-6">
                Technologies: Javascript, Typescript, Next.js, Vue.js, React.js, HTML5, CSS3, SCSS, Enzyme, Vue Test Utils,
                React Testing Library, JEST, GIT, Github, SASS, SCSS, Jenkins, JIRA, Slack, REST, Scrum, Kanban, VSCode
                and Bootstrap.
            </p>
        </div>
    </Section>
)