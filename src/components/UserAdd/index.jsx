'use strict';
import React, { Component, PropTypes } from 'react';

class UserAdd extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email:'',
            btn:'添加用户'
        }
    }
    handleTextChange(evt){
		    this.setState({'username': evt.target.value});
    }
    handleeEmailChange(evt){
        this.setState({'email': evt.target.value});
	  }
    handleEmailBlur(evt) {
        let filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(evt.target.value)){
            this.setState({'email': evt.target.value});
        } else {
            alert('您的电子邮件格式不正确');
            this.setState({'email':''});
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addUsers(this.state)
    }
  render () {

    return (
      <div className="col-sm-12">
          <form className="form-inline">
              <div className="form-group">
                  <span>用户姓名</span>
                  <input type="text" className="form-control top" id="exampleInputName2" placeholder="Jane Doe" onChange={this.handleTextChange.bind(this)} value={this.state.username}/>
              </div>
              <div className="form-group">
                  <span className="top">用户邮箱</span>
                  <input type="email" className="form-control top" id="exampleInputEmail2" placeholder="jane.doe@example.com" onBlur={this.handleEmailBlur.bind(this)} onChange={this.handleeEmailChange.bind(this)}  value={this.state.email}/>
              </div>
              <button type="button"  onClick={this.handleSubmit.bind(this)} className="btn btn-default top">{this.state.btn}</button>
          </form>
      </div>
    );
  }
}
export default UserAdd;