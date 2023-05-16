import { Section } from '../Section'

import segwareLogo from '../../../src/assets/segware-logo.svg'
import digitroLogo from '../../../src/assets/digitro-logo.svg'
import zygoLogo from '../../../src/assets/zygo-logo.svg'
import pagseguroLogo from '../../../src/assets/pagseguro-logo.svg'

export const ProfessionalTimelineSection = () => (
    <Section isDark>
        <div class="second-container">
            <p class="is-size-2 has-text-centered">My Professional Experience</p>
            <div class="grid-timeline">
                <div>
                    <a href="#segware">
                        <img class="mt-5" src={segwareLogo} width={150} height={150} />
                    </a>
                    2017 - 2017
                </div>
                <div>
                    <a href="#digitro">
                        <img class="mt-5" src={digitroLogo} width={150} height={150} />
                    </a>
                    2018 - 2020
                </div>
                <div>
                    <a href="#zygo-pags">
                        <img class="mt-3" src={zygoLogo} width={150} height={150} />
                    </a>
                    2021 - 2022
                </div>
                <div>
                    <a href="#zygo-pags">
                        <img class="mt-5" src={pagseguroLogo} width={150} height={150} />
                    </a>
                    2022 - now
                </div>
            </div>
        </div>
    </Section>
)