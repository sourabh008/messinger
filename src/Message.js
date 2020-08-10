import React from 'react'
import { Card } from '@material-ui/core';

function Message(props) {
    return (
        <div>
         <Card className="card">{props.name}: { props.text}</Card>

        </div>
    )
}

export default Message;
