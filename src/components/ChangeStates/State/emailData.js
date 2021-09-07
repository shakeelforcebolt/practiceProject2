
import React from 'react';


const person= (props)=>{
    console.log("[Person.ja] rendering...",props);
    return (
        <div>
            
            <div className = "container w-25 mt-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Entered Email Data</h5>
                        <p class="card-text" onClick={props.click} > {props.name} has requested {props.age} $.</p>
                        <a href="/" class="btn btn-primary">Submit</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default person;