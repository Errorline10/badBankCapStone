import React, { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import './bootstrapCard.css'
import AccountSelector from '../parts/accountSelector'
import myContext from '../context/myContext';


export function BootstrapCard(props) {
  const ctx = useContext(myContext);
  // eslint-disable-next-line
  const [currentAccountFocus, setCurrentAccountFocus] = useState(ctx.currentActiveFocus);
  const [currentUser, setCurrentUser] = useState(ctx.currentUser);

  function setCurrentUserWrapper(acctPosition) {
    currentAccountFocus(acctPosition);
    if (props.callBack) { props.callBack(acctPosition) }
  }

  return (
    <Card style={{ width: '20rem', margin: "auto auto" }}>
      <Card.Header variant="top">{props.header}</Card.Header>
      <Card.Body>
      <pre>{JSON.stringify(ctx)}</pre>

        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>

        {
          props.supressAccountSelector ?
            null
            :
            <AccountSelector callBack={setCurrentUserWrapper} />
        }


        {props.show ? (props.body) : null}

        <div className="statusMsg">{props.status}</div>

        {props.show ?
          (
            props.buttonText && ( // only show button if there is text.
              <>
                <Button
                  disabled={props.buttonDisabled ? 'disabled' : null}
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => props.callback()}>
                  {props.buttonText}
                </Button>
              </>
            )) :
          (
            props.buttonResetText && ( // only show button if there is text.
              <>
                <Button
                  type="submit"
                  className="btn btn-text"
                  onClick={() => props.callbackReset()}>
                  {props.buttonResetText}
                </Button>
              </>
            )
          )}

      </Card.Body>
    </Card>


  );
}
