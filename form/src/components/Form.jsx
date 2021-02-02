import React from "react";



export default class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      emailValid : false,
      mdpValid : false,
      email : "",
      mdp : "",
      rememberMe : false,
      submitClick: false,
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMdpChange = this.onMdpChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  onEmailChange (e) {
    const newEmail = e.target.value;
    const reg = /^\S+@\S+\.\S+$/g;
    const isEmail = reg.test(newEmail);
    this.setState({
      email : newEmail,
      emailValid : isEmail,
    });
  };

  onMdpChange (e) {
    let newPasswordValid = e.target.value.length >= 6 ? true : false;
    this.setState({
      mdp : e.target.value,
      mdpValid : newPasswordValid,
    });
  };

  handleSubmit(e){
    e.preventDefault()
    this.setState({
      submitClick: true,
    })
  }

  
  render() {
    if (this.state.submitClick === true){
      return (<div>ACCES AUTORISE</div>)
    }
      return (
        <form className="was-validated">
          <h1 className="flex">Login</h1>
          <div className="col-md-6 mid">
            <label htmlFor="validationTextarea" className="form-label">
              Email address
            </label>
            <input
              onChange={this.onEmailChange}
              className="form-control is-invalid Email"
              id="validationTextarea"
              placeholder="Enter email ..."
              required
            >{this.props.email}</input>
          </div>
          <div className="col-md-6 mid Mdp">
            <label htmlFor="validationTextarea" className="form-label">
              Password
            </label>
            <input
              onChange={this.onMdpChange}
              className="form-control is-invalid"
              id="validationTextarea"
              placeholder="Enter password ..."
              required>
            </input>
  
          </div>
          <div className="col-12 flex">
            <div className="form-check">
              <input
                className="form-check-input is-invalid"
                type="checkbox"
                value=""
                id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback"
                required
              ></input>
              <label className="form-check-label" htmlFor="invalidCheck3">
                Remember me
              </label>
            </div>
          </div>
  
          <div className="mb-3 flex">
            <button className="btn btn-primary" disabled={ !this.state.emailValid || !this.state.mdpValid } type="submit" onClick={this.handleSubmit}>
              Submit form
            </button>
          </div>
        </form>
      );
    }
    
    
  }
