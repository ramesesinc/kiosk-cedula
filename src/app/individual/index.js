import React, { useState, useEffect } from 'react'
import { Title, Panel } from 'rsi-react-web-components'

import ScanId from './scanid'
import Profile from './profile'
import Income from './income'
import Billing from './billing'

const steps = [
  { name: 'scanid', title: 'Scan ID', component: ScanId },
  { name: 'profile', title: 'Profile', component: Profile },
  { name: 'income', title: 'Income', component: Income },
  { name: 'billing', title: 'Billing', component: Billing }
]

const IndividualScreen = ({ onCancel, onComplete, ...rest }) => {
  const [step, setStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(steps[0])
  const PageComponent = currentStep.component

  useEffect(() => {
    setCurrentStep(steps[step]);
  }, [step]);

  const moveNext = (params) => {
    if (step + 1 !== steps.length) {
      setStep(step + 1);
    }
  }

  const movePrevious = () => {
    if (step - 1 >= 0) {
      setStep(step - 1);
    }
  }

  const pageProps = { moveNext, movePrevious, onCancel, onComplete }

  return (
    <Panel>
      <Title>Cedula (Individual)</Title>
      <PageComponent step={currentStep} {...rest} {...pageProps} />
    </Panel>
  )
}

export default IndividualScreen
