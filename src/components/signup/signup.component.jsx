import React from 'react'
import { connect } from 'react-redux'
import { signupStart } from '../../redux/user/user.actions'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './signup.styles.scss'

class SignUp extends React.Component {

  constructor() {
    super()
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {

    e.preventDefault()

    const { signupStart } = this.props
    const { displayName, email, password, confirmPassword } = this.state 

    if (password !== confirmPassword) {
      alert('Passwords do not match.')
      return
    }

    signupStart({ displayName, email, password })
  }
  
  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    
    const { displayName, email, password, confirmPassword } = this.state 
    
    return (
      <div className='signup'>
        <h2 className="title"> I do not have an account</h2>
        <span> Signup with email and password </span>
        <form className="signup-form" onSubmit={ this.handleSubmit }>
          <FormInput
            type='text'
            name='displayName'
            value={ displayName }
            onChange={ this.handleChange }
            label='Username'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={ email }
            onChange={ this.handleChange }
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={ password }
            onChange={ this.handleChange }
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={ confirmPassword }
            onChange={ this.handleChange }
            label='Confirm password'
            required
          />

          <CustomButton type='submit'> SIGN UP </CustomButton>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signupStart: userCredentials => dispatch(signupStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
