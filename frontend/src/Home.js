import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { setToken, getUsers, setUser } from './reducer';
import './App.css';

class Home extends Component {
 async componentDidMount() {
  const { getUsers } = this.props;
  await getUsers();
 }

 onClickUser(user) {
  const { setUser, history } = this.props;
  setUser(user);
  history.push('/details');
 }

 render() {
  const { users } = this.props;
  return (
   <div className="App m-2 p-2">
    {users &&
     users.length > 0 &&
     users.map((user, i) => {
      return (
       <div className="container p-1 m-1" key={user.id}>
        <div className="row">
         <span className=".col- pr-1 mr-2">{i + 1}</span>
         <span
          className="col-sm clickAbleDiv"
          onClick={() => this.onClickUser(user)}
         >
          {user.name}
         </span>
        </div>
       </div>
      );
     })}
   </div>
  );
 }
}

const mapStateToProps = (state) => ({
 ...state,
});

const mapDispatchToProps = (dispatch) => {
 return {
  setToken: (token) => dispatch(setToken(token)),
  getUsers: () => dispatch(getUsers()),
  setUser: (user) => dispatch(setUser(user)),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
