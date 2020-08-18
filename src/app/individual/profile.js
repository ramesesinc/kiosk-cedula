import React, { useState } from 'react'
import { FormPanel, Content, Button, Panel, Subtitle, ActionBar, Text } from 'rsi-react-web-components'

const Profile = ({ moveNext, movePrevious }) => {

  const [entity, setEntity] = useState({
    lastname: "Canonoy", firstname: "Jason", mi: "C",
    bdate: "1972 Jan 20", bplace: "Cebu City",
    nationality: "Filipino", civilStatus: "Married", height: "5'6", weight: "170 lbs",
    occupation: "Business", tin: "121-999-111",
  });

  return (
    <Content center>
      <Subtitle>Please verify if personal info is correct</Subtitle>
      <br/>
      <Panel center>
        <FormPanel context={entity} handler={setEntity}>
          <Panel row>
            <Text name="lastname" caption="Last Name" editable={false} />
            <Text name="firstname" caption="First Name" editable={false} />
            <Text name="mi" caption="MI" editable={false} />
          </Panel>
          <Panel row>
            <Text name="bdate" caption="Birthdate" editable={false} />
            <Text name="bplace" caption="Birth Place" editable={false} />
          </Panel>
          <Panel row>
            <Text name="nationality" caption="Nationality" editable={false} />
            <Text name="civilStatus" caption="Civil Status" editable={false} />
            <Text name="height" caption="Height" editable={false} />
            <Text name="weight" caption="Weight" editable={false} />
          </Panel>
          <Panel row>
            <Text name="occupation" caption="Occupation" editable={false} />
            <Text name="tin" caption="TIN" editable={false} />
          </Panel>
        </FormPanel>
        <br />
      </Panel>
      <ActionBar>
        <Button className="navButton" caption='Back' action={movePrevious} />
        <Button className="navButton" caption='Next' action={() => moveNext({})} />
      </ActionBar>
    </Content >
  )
}

export default Profile
