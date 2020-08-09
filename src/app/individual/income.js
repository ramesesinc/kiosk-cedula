import React from 'react'
import { Button, Panel, Subtitle, ActionBar } from 'rsi-react-web-components'

const Income = ({ movePrevious, moveNext }) => {
  return (
    <Panel>
      <Subtitle>Income</Subtitle>
      <ActionBar center>
        <Button caption='Next' action={() => moveNext({})} />
        <Button caption='Back' variant='text' action={movePrevious} />
      </ActionBar>
    </Panel>
  )
}

export default Income
