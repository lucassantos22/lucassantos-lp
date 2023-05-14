import { MainSection, ProfessionalTimelineSection, SegwareSection, QrCodeSection } from '../src/components/sections'

import digitroLogo from '../src/assets/digitro-logo.svg'

export default function() {
  return (
    <>
      <MainSection />
      <ProfessionalTimelineSection />
      <SegwareSection />
        <div class="second-container has-text-white-bis has-background-black-ter" id="digitro">
          <img class="center" src={digitroLogo} width={300} height={300} />
        </div>
      <QrCodeSection />

    </>
  )
}