import { MainSection, ProfessionalTimelineSection, SegwareSection } from '../src/components/sections'

import digitroLogo from '../src/assets/digitro-logo.svg'
import qrcode from '../src/assets/qrcode.svg'

export default function() {
  return (
    <>
      <MainSection />
      <ProfessionalTimelineSection />
      <SegwareSection />

        <div class="second-container has-text-white-bis has-background-black-ter">
          <img class="center" src={digitroLogo} width={300} height={300} />
        </div>

        <div class="has-background-white-ter container">
          <p class="is-size-2 mb-6">Scan to know me better!</p>
          <img style={{ height: '200px', width: '200px', display: 'block' }} src={qrcode} />
        </div>
    </>
  )
}