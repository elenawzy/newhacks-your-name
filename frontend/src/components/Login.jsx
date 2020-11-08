import React, {Component} from 'react';
import './Login.css';

// Code taken and adapted from https://www.csscodelab.com/responsive-login-form-in-react-js/

const FormInput = props => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
  

const FormButton = props => (
    <div id="button" class="row">
      <button>{props.title}</button>
    </div>
  );

const Form = props => (
    <div>
      <FormInput description="Email" placeholder="Enter your email" type="text" />
      <FormInput description="Password" placeholder="Enter your password" type="password"/>
      <FormButton title="Sign Up"/>
    </div>
 );

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

class Login extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div id="loginform">
                <Form />

          </div>
        )

    }

}
export default Login