import React, {Component} from 'react';
import Email from './State/Email';
import Sms from './State/Sms';
import EmailData from './State/emailData';
import SmsData from './State/smsData';
import { logDOM } from '@testing-library/dom';

class State extends Component {

    state = {
        emailState : [
            { email:"---", amount:0 }
        ],
        smsState:[
            { sms: "---", amount:0}
       ],
        showPerson: true,
        showData: false
    }
     

    emailChangedHandler = (event) => {
         this.setState( {
            emailState : [
                { email: event.target.value, amount:this.state.emailState[0].amount },
            ]
         })
    }
    emailAmountChangedHandler = (event) => {
        this.setState( {
           emailState : [
               { email: this.state.emailState[0].email , amount:event.target.value },
           ]
        })
   }
    smsChangedHandler = (event) => {
        this.setState( {
           smsState : [
               { sms:event.target.value, amount:this.state.smsState[0].amount },
           ]
        })
   }
   smsAmountChangedHandler = (event) => {
    this.setState( {
       smsState : [
           { sms: this.state.smsState[0].sms  , amount: event.target.value },
       ]
    })
}

    togglePersonHandler = () => {
        const doesSHow  = this.state.showPerson;
        this.setState({showPerson: !doesSHow});

    }
    toggleDataHandler = () => {
        const doesSHow  = this.state.showData;
        this.setState({showData: !doesSHow});

    }
    render () {
        let data=null;

        if(this.state.showData){
            if(this.state.showPerson){
                data = (
                    <div>
                    {this.state.emailState.map( person =>{
                        return (
                            <EmailData
                            name = {person.email}
                            age = {person.amount} />
                        )
                    })}
                 </div>
                   );
            }else{
                data = (
                <div>
                {this.state.smsState.map( person =>{
                    return (
                        <SmsData
                        name = {person.sms}
                        age = {person.amount} />
                    )
                })}
             </div>
                )
               }
            
        }
       let persons = null;

       if(this.state.showPerson){
           persons = (
            <div>
            {this.state.emailState.map( person =>{
                return (
                    <Email
                    name = {person.email}
                    age = {person.amount}
                    changed = {this.emailChangedHandler}
                    changed2 = {this.emailAmountChangedHandler} />
                )
            })}

             
         </div>
           );
       }else{
        persons = (
        <div>
        {this.state.smsState.map( person =>{
            console.log(person);
            return (
                <Sms
                name = {person.sms}
                age = {person.amount}
                changed = {this.smsChangedHandler}
                changed2 = {this.smsAmountChangedHandler} />
            )
        })}
     </div>
        )
       }
       

        return(
            <div>
                <h1 className = "mb-4">STATE CHANGE TOGGLE</h1>
                {
                    this.state.showPerson ?
                    <div>
                         <button className="btn btn-warning" onClick={this.togglePersonHandler}>Email</button>
                    </div>:<button className="btn btn-warning" onClick={this.togglePersonHandler}>Sms</button>
                }
            {persons}
        
            <button className="btn btn-warning mt-3" onClick={this.toggleDataHandler}>Data</button>
            {data}
            </div>
        )
    }
}


export default State;