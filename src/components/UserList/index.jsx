'use strict';
import React, {
	Component
} from 'react';

import './index.css';
import UserAdd from '../UserAdd';
import User from '../User';

class UserList extends Component {
	render() {
		return (
            <div className="main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12" style={{marginTop: 15}}>
                            <UserAdd history={history}/>
                        </div>
                    </div>
                    <div className="bs-example" data-example-id="simple-table">
                        <table className="table">
                        <caption>用户列表</caption>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>用户姓名</th>
                            <th>用户邮箱</th>
                            <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map((user, index)=> {
                               return <User user={user} key={user.id}/>
                            })}                            
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
		);
	}
}

export default UserList;