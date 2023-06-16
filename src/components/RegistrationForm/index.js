import {Component} from 'react'
import './index.css'

export default class RegistrationForm extends Component {
  state = {isSubmitted: false, firstName: '', lastName: ''}

  handleBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({err1: 'Required'})
    } else {
      this.setState({err1: ''})
    }
  }

  handleBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({err2: 'Required'})
    } else {
      this.setState({err2: ''})
    }
  }

  getFirstName = e => {
    this.setState({firstName: e.target.value})
  }

  getLastName = e => {
    this.setState({lastName: e.target.value})
  }

  checkFormStatus = () => {
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true})
    }
  }

  submitForm = event => {
    event.preventDefault()
    this.handleBlurFirstName()
    this.handleBlurLastName()
    this.checkFormStatus()
  }

  anotherResponse = () => {
    this.setState({isSubmitted: false})
  }

  render() {
    const {err1, err2, isSubmitted} = this.state
    console.log(isSubmitted)
    return (
      <div className="container">
        <h1>Registration</h1>
        {isSubmitted ? (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button type="button" onClick={this.anotherResponse}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={this.submitForm}>
            <label htmlFor="firstName">FIRST NAME</label>
            <br />
            <input
              onBlur={this.handleBlurFirstName}
              onChange={this.getFirstName}
              id="firstName"
              type="text"
              placeholder="First name"
            />
            <p className="err-msg">{err1}</p>
            <label htmlFor="lastName">LAST NAME</label>
            <br />
            <input
              onChange={this.getLastName}
              onBlur={this.handleBlurLastName}
              id="lastName"
              type="text"
              placeholder="Last name"
            />
            <p className="err-msg">{err2}</p>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}
