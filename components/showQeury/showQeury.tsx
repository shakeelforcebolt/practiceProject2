import React from "react";

import { Card } from "antd";

const showData = (props) {
    return(
        <div>
           <Card style= {{ width: 300}}>
           <p><strong>Name: </strong>  {props.name} <strong> price: </strong>  {props.price}</p>
           </Card>
        </div>
    )
}
export default showData;