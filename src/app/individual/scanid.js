import React from 'react'
import { Button, Panel, Subtitle, ActionBar } from 'rsi-react-web-components'

const ScanId = ({moveNext, onCancel}) => {
  return (
    <Panel>
      <Subtitle>Scan ID</Subtitle>
      <ActionBar center>
        <Button caption='Next' action={() => moveNext({})} />
        <Button caption='Back' variant='text' action={() => onCancel("home")} />
      </ActionBar>
    </Panel>
  )
}

export default ScanId
