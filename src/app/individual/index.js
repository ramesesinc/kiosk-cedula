import React from "react";
import {Title, Button} from "rsi-react-web-components";

const IndividualScreen = ({onCancel, onComplete}) => {
  return (
    <div>
      <Title>IndividualScreen</Title>
      <Button caption="Back" variant="text" action={() => onCancel("home")} />
      <Button caption="Save" action={onComplete} />
    </div>
  )
}

export default IndividualScreen;
