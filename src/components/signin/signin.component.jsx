import React from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { googleSigninStart, emailSigninStart } from '../../redux/user/user.actions'
import './signin.styles.scss'

class SignIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { emailSigninStart } = this.props
    const { email, password } = this.state

    emailSigninStart(email, password)
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {

    const { googleSigninStart } = this.props

    return (
      <div className='sign-in'>
        <h2> I already have an account </h2>
        <span> Sign in with email and password </span>

      <form onSubmit={ this.handleSubmit }>
        <FormInput 
          name='email' 
          type='email' 
          value={ this.state.email } 
          handleChange={ this.handleChange }
          label='email'
          required />

        <FormInput 
          name='password' 
          type='password' 
          value={ this.state.password }
          handleChange={ this.handleChange }
          label='password'
          required />

        <div className="buttons">
          <CustomButton type='submit'> 
            Sign in 
          </CustomButton>
          <CustomButton
            type='button'  // setting this avoids triggering form submit
            onClick={ googleSigninStart } 
            isGoogleSignIn
          > 
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSigninStart: () => 
    dispatch(googleSigninStart()),
  emailSigninStart: (email, password) => 
    dispatch(emailSigninStart({ email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)