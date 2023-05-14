import qrcode from '../../../src/assets/qrcode.svg'

export const QrCodeSection = () => (
    <div class="has-background-white-ter">
        <div class="container">
            <p class="is-size-2 mb-6">Scan to know me better!</p>
            <img style={{ height: '200px', width: '200px', display: 'block' }} src={qrcode} />
        </div>
    </div>
)