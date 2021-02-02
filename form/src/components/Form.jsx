import React from "react";



export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email : "",
      mdp : "",
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMdpChange = this.onMdpChange.bind(this);
  };
  onEmailChange (e) {
    this.setState({
      email : e.target.value,
    });
    if ( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email,)) {
      console.log('cest bon!')
    } else {
      console.log('error')
    }
  };

  onMdpChange (e) {
    this.setState({
      mdp : e.target.value,
    });
  };

  
  render() {
    return (
      <form class="was-validated">
        <h1 class="flex">Login</h1>
        <div class="col-md-6 mid">
          <label for="validationTextarea" class="form-label">
            Email address
          </label>
          <input
            onChange={this.onEmailChange}
            class="form-control is-invalid Email"
            id="validationTextarea"
            placeholder="Enter email ..."
            required
          >{this.props.email}</input>
        </div>
        <div class="col-md-6 mid Mdp">
          <label for="validationTextarea" class="form-label">
            Password
          </label>
          <input
            onChange={this.onMdpChange}
            class="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter password ..."
            required>
          </input>

        </div>
        <div class="col-12 flex">
          <div class="form-check">
            <input
              class="form-check-input is-invalid"
              type="checkbox"
              value=""
              id="invalidCheck3"
              aria-describedby="invalidCheck3Feedback"
              required
            ></input>
            <label class="form-check-label" for="invalidCheck3">
              Remember me
            </label>
          </div>
        </div>

        <div class="mb-3 flex">
          <button class="btn btn-primary" type="submit" disabled>
            Submit form
          </button>
        </div>
      </form>
    );
  }
}
