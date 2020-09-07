import React from "react";
//import loginImg from "./login.svg";
import './pay.css'
import store from '../redux/store';
import history from '../history/history';



export default class Payment extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      name:"",
      cnumber:"",
      cvv:"",
      fields: {},
      errors: {}
    }
  }
  // handleValidation=()=> {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let validForm = true;

  //   if (!fields["name"]) {
  //     validForm = false;
  //     errors["name"] = "Cannot be empty";
  //   }

  //   if (typeof fields["name"] !== "undefined") {
  //     if (fields["name"].length < 4) {
  //       validForm = false;
  //       errors["name"] = "minimum 5 Letters";
  //     }
  //   }
  //   if (!fields["cnumber"]) {
  //     validForm = false;
  //     errors["cnumber"] = "Cannot be empty";
  //   }
  //   if (fields["cnumber"].length < 16) {
  //     validForm = false;
  //     errors["cnumber"] = "Invalid";
  //   }
  //   if (!fields["cvv"]) {
  //     validForm = false;
  //     errors["cvv"] = "Cannot be empty";
  //   }
  //   if (fields["cvv"].length < 3) {
  //     validForm = false;
  //     errors["cvv"] = "Invalid";
  //   }

  //   this.setState({ errors: errors });
  //   return validForm;
  // }

  paymentSubmit(e) {
    e.preventDefault();

    // if (this.handleValidation()) {
    //   alert("Form submitted");
    // } else {
    //   alert("Form has errors");
    // }
    const{name,cnumber,cvv}=this.state
    if((name.length>4&&cnumber.length>15)&&cvv.length>2){
      history.push('/confirmPage')
    }
    else{
      alert("Form have some errors")
    }
    

  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields,
    [e.target.name]:e.target.value
    },()=>console.log(this.state));
  }
  




  /*canBeSubmitted() {
    const { username, password, cvv } = this.state;
    return (username.length > 0 && password.length > 0) && cvv.length > 0;
  }*/

  render() {

    const storeValue=store.getState();
    return (
    <div class="pays">
      <div id="payment">
        <div className="row justify-content-center">
        <form className="paymentform" onSubmit={this.paymentSubmit.bind(this)}>
          <center><h3><u>Payment Form</u></h3></center>
          <br></br>
          <h5 style={{color:'red'}}>Total Price={storeValue.totalPrice}</h5>
          <br></br>
        <div class="form-group">
    <label for="name">Card Holder Name:</label>
              <input ref="name" type="text" name="name" size="30" placeholder="Card holder Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
              <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
              <br />
              </div>
              <div class="form-group">
                 <label for="card number">Card Number:</label>

              <input refs="cnumber" name="cnumber"type="passwordr" size="30" placeholder="card number" onChange={this.handleChange.bind(this, "cnumber")} value={this.state.fields["cnumber"]} />
              <span style={{ color: "red" }}>{this.state.errors["cnumber"]}</span>
              <br />
              </div>
              <div class="form-group">
                 <label for="cvv">CVV</label>
              <input refs="cvv" type="password" name="cvv" size="30" placeholder="CVV" onChange={this.handleChange.bind(this, "cvv")} value={this.state.fields["cvv"]} />
              <span style={{ color: "red" }}>{this.state.errors["cvv"]}</span>
              <br />
              </div>
            
         
              <div className="form-group">
              <div className="row">
                <div className="col-sm-4">
                  <label>Expiary</label>
                </div>

          <div className="col-sm-4">
            <label for="sel1"> Month</label>
            <select class="form-control" id="sel1">
              <option></option>
              <option>01</option>
              <option>02</option>
              <option>03</ option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</ option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</ option>
              <option>12</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label for="sel1">Year</label>
            <select class="form-control" id="sel1">
              <option></option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
            </select>
          </div>
          </div>
          </div>

      <div className="buttons">
        <button type="submit" className="btn btn-success " onClick={this.proceed}>
          Pay Now
        </button>
        <button type="button" className="btn btn-danger ">Cancel</button>
          
        
        </div>
        
        

            </form >
</div>
</div>
</div>


    );
  }
}

/*import React from 'react'
import Login from './Login'
export const Canceltickets = () => {
    return (
        <div>
            <h3>Cancel</h3>

        </div>
    )
}*/