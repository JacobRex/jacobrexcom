/* Interfaces
---------------------------------------------- */
export interface portfolioText {
  type: 'paragraph' | 'heading',
  content: string
}

export interface portfolioItem {
  id: string,
  route: string,
  size: 'large' | 'small',
  hero: string,
  title: string,
  client: string,
  content: portfolioText[],
  shots: string[],
  year: string,
  tags: string[],
  palette: string[],
  liveUrl?: string,
}

/* Portfolio
---------------------------------------------- */
import { fluidStudies } from "./portfolio/fluid-studies"
import { revivalLane } from "./portfolio/revival-lane"
import { regionalNDT } from "./portfolio/regional-ndt"
import { orbit } from "./portfolio/orbit"
import { square } from "./portfolio/square"
import { weeblyLandingPage } from "./portfolio/weebly-landing-page"
import { weeblyHomepage } from "./portfolio/weebly-homepage"
import { patientPop } from "./portfolio/patient-pop"
import { trek } from "./portfolio/trek"
import { theBoondockSaintsOrigins } from "./portfolio/the-boondock-saints-origins"
import { clinkle } from "./portfolio/clinkle"

export const portfolio = [
  fluidStudies,
  revivalLane,
  regionalNDT,
  orbit,
  square,
  weeblyLandingPage,
  weeblyHomepage,
  patientPop,
  trek,
  theBoondockSaintsOrigins,
  clinkle
] as portfolioItem[]