import qrcode from '../../../src/assets/qrcode.svg'
import { Section } from '../Section'

export const QrCodeSection = () => (
    <Section>
        <div class="container">
            <p class="is-size-2 mb-6">Scan to know me better!</p>
            <img style={{ height: '200px', width: '200px', display: 'block' }} src={qrcode} />
        </div>
    </Section>
)