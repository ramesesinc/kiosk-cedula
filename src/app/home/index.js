import React from 'react'
import { Panel, Button, ActionBar } from 'rsi-react-web-components'

const HomeScreen = ({ onCancel, onSelectType }) => {
  return (
    <Panel>
       <h1 className="header-menu">Select Cedula Type</h1>
      <ActionBar center>
        <Button className="btn-menu" caption='Individual' action={() => onSelectType('individual')} />
        <Button className="btn-menu" caption='Corporate' action={() => onSelectType('corporate')} />
        <Button caption='Cancel' variant='text' action={() => onCancel(null)} />
      </ActionBar>
    </Panel>
  )
}

export default HomeScreen
