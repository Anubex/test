import { Button } from '@mui/material'

import { PageT } from './activate-sim-view'
import InfographicSection from './components/infographic-section'
import IntroBanner from './components/intro-banner'

interface IntroT extends PageT {}

export default function Intro({ onNext }: IntroT) {
  if (onNext) {
    return (
      <>
        <div className="bg-white">
          
          
        <IntroBanner />
        
        </div>
      
       

      </>
    )
  }
}
