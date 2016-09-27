'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/user';

import { UserList } from '../../components';

class User extends Component {
  
  componentWillMount() {
    const { actions } = this.props;
    actions.getUsers();
  }

  render() {
    return (
      <div>
        	<UserList users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      users: state.user.users
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userAction, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(User);