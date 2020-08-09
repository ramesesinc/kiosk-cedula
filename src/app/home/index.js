import React from 'react'
import { Page, Panel, Title, Button, ActionBar } from 'rsi-react-web-components'

const HomeScreen = ({ onCancel, onSelectType }) => {
  return (
    <Panel>
      <Title>Select Cedula Type</Title>
      <ActionBar center>
        <Button caption='Individual' action={() => onSelectType('individual')} />
        <Button caption='Corporate' action={() => onSelectType('corporate')} />
        <Button caption='Cancel' variant='text' action={() => onCancel(null)} />
      </ActionBar>
    </Panel>
  )
}

export default HomeScreen
