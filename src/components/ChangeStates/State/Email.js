
import React from 'react';


const person= (props)=>{
    console.log("[Person.ja] rendering...",props);
    return (
        <div>
            {/* <p onClick={props.click}>I am a {props.name} and I am {props.age} Years Old.</p> */}
            {/* <p onClick={props.click}>I am a {props.name} and I am {props.age} Years Old.</p> */}
            <h3>Email stateChnage Call</h3>
            {/* <p>{props.children}</p> */}
            <input type="text" onChange={props.changed} value = {props.name} />
        </div>
    );
};

export default person;