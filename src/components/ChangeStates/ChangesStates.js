import React, {Component} from 'react';
import Email from './State/Email';
import Sms from './State/Sms';

class State extends Component {

    state = {
        states : [
            { name:"Shaleel", age:25 },
            { name : "Ahmad", age:27 }
        ],
        otherValue:"Some Other Value!",
        showPerson: false
    }
     

    nameChangeHandler = (event) => {
         this.setState( {
            states : [
                { name:"Shaleel", age:25 },
                { name : event.target.value, age:27 }
            ]
         })
    }

    togglePersonHandler = () => {
        const doesSHow  = this.state.showPerson;
        this.setState({showPerson: !doesSHow});

    }
    render () {
       let persons = null;

       if(this.state.showPerson){
           persons = (
            <div>
            {this.state.states.map( person =>{
                return (
                    <Email
                    name = {person.name}
                    age = {person.age} />
                )
            })}

             
         </div>
           );
       }else{
        persons = (
        <div>
        {this.state.states.map( person =>{
            return (
                <Sms
                name = {person.name}
                age = {person.age} />
            )
        })}
     </div>
        )
       }
       

        return(
            <div>
                <h1>ChangesStates Call</h1>
                <p>This is Simple State Change!</p>
                <button className="btn btn-warning" onClick={this.togglePersonHandler}>Radio Button</button>
            {persons}
            </div>
        )
    }
}


export default State;