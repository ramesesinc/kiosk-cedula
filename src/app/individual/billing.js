import React from 'react'
import { Button, Panel, Subtitle, ActionBar } from 'rsi-react-web-components'

const Billing = ({movePrevious, onComplete}) => {
  return (
    <Panel>
      <Subtitle>Billing</Subtitle>
      <ActionBar center>
        <Button caption='Submit' action={() => onComplete({})} />
        <Button caption='Back' variant='text' action={movePrevious} />
      </ActionBar>
    </Panel>
  )
}

export default Billing
