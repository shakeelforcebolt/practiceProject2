import { Router } from "next/dist/client/router";
import React from "react";
import Rounter from './RoutingDemo/Routing';

const demo = () =>{
    return (
        <div >
            <h1>Hello World!</h1>
            <Rounter />
        </div>
    )
}

export default demo;