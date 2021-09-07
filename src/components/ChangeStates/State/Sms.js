
import React from 'react';


const person= (props)=>{
    console.log("[Person.ja] rendering...",props);
    return (
        <div>
            <h3>SMS ChangeState Call</h3>
            <p>Enter Number</p>
            <input type="text" onChange={props.changed} />
            <p>Enter Amount</p>
            <input type="text" onChange={props.changed2} />
          <div className = "container w-25 mt-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sms Preview</h5>
                        <p class="card-text" onClick={props.changed} > {props.name} has requested {props.age} $.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default person;