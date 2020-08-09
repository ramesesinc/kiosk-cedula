import React from 'react'
import { Button, Panel, Subtitle, ActionBar } from 'rsi-react-web-components'

const Profile = ({ moveNext, movePrevious }) => {
  return (
    <Panel>
      <Subtitle>Profile</Subtitle>
      <ActionBar center>
        <Button caption='Next' action={() => moveNext({})} />
        <Button caption='Back' variant='text' action={movePrevious} />
      </ActionBar>
    </Panel>
  )
}

export default Profile
