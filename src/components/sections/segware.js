import segwareLogoDark from '../../../src/assets/segware-logo-dark.svg'
import { Section } from '../Section'

export const SegwareSection = () => (
    <Section id="segware">
        <div>
            <img class="center" src={segwareLogoDark} width={300} height={300} />
            <p class="is-size-3 has-text-centered">2017</p>
            <hr style={{ border: '1px solid #242424', width: '100%' }}></hr>
            <p class="mt-6">I started my career as an intern in technical support,
            performing tasks such as direct client remote access, MySQL database backups, and so on.
            The experience brought me a direct relationship with the client and helped a lot in my personal development.
            </p>
        </div>
    </Section>
)