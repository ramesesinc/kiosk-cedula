import React from 'react'
import { Panel, Title, Button, ActionBar } from 'rsi-react-web-components'

const HomeScreen = ({ onCancel, onSelectType }) => {
  return (
    <Panel>
      <Title>Select Cedula Type</Title>
      <Button caption='Individual' action={() => onSelectType('individual')} />
      <Button caption='Corporate' action={() => onSelectType('corporate')} />
      <Button caption='Cancel' variant='text' action={() => onCancel(null)} />
    </Panel>
  )
}

export default HomeScreen
