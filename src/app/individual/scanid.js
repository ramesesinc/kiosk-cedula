import React, { useState } from 'react'
import { Text, Button, Panel, ActionBar, Link } from 'rsi-react-web-components'
import ScanImage from '../../assets/images/scan.png';



const ScanId = ({ moveNext, onCancel }) => {
  const [idno, setIdno] = useState();
  return (
    <Panel>
      <ActionBar center>
        <img src={ScanImage} width="500" />
        <center>
          <h2>Place LGU Card in the QR Code slot</h2>
          <br />
          <Button variant='text' action={() => moveNext({})} >Dont have an LGU card?</Button>
          <Text className="hideScaninput"  caption="ID Number" name="idno" value={idno} onChange={setIdno} onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              moveNext();
              ev.preventDefault();
            }
          }} autoFocus={true}></Text>
        </center>
      </ActionBar>
    </Panel>
  )
}

export default ScanId
